<template>
	<div>
	  <div class="hero-wrap hero-bread" style="background-image: url('/images/bg_6.jpg');">
		<div class="container">
		  <div class="row no-gutters slider-text align-items-center justify-content-center">
			<div class="col-md-9 text-center">
			  <p class="breadcrumbs"><span class="mr-2"><a href="/">Home</a></span> <span>Products</span></p>
			  <h1 class="mb-0 bread">Collection Products</h1>
			</div>
		  </div>
		</div>
	  </div>
	  <div class="container mt-5">
		<button v-if="isAdmin && isAuthenticated" @click="showModal = true" class="btn btn-primary">Add Product +</button>
	  </div>
  
	  <!-- Modal -->
	  <div v-if="showModal" class="modal-overlay" @click.self="showModal = false">
		<div class="modal-content">
		  <h2>Ajouter un Produit</h2>
		  <form @submit.prevent="addProduct">
			<div class="form-group">
            <label for="productName">Product Name</label>
            <input v-model="newProduct.nom" id="productName" type="text" class="form-control" required />
          </div>
          <div class="form-group">
            <label for="productDescription">Description</label>
            <textarea v-model="newProduct.description" id="productDescription" class="form-control" required></textarea>
          </div>
          <div class="form-row">
			<div class="form-group col-md-6">
				<label for="productPrice">Price</label>
				<input v-model="newProduct.prix" id="productPrice" type="number" class="form-control" required />
			</div>
			<div class="form-group col-md-6">
				<label for="productQuantity">Stock Quantity</label>
				<input v-model="newProduct.quantite_stock" id="productQuantity" type="number" class="form-control" required />
			</div>
			</div>

			<div class="form-group">
			<label for="productImage">Image</label>
			<input type="file" @change="onFileChange" class="form-control-file" id="productImage" required>
			</div>

          <div class="form-group">
            <label for="productCategory">Category</label>
            <select v-model="newProduct.idCategory" id="productCategory" class="form-control" required>
              <option v-for="category in categories" :key="category.id" :value="category.id">{{ category.libelle }}</option>
            </select>
          </div>
		  <div class="form-group">
			<button type="submit" class="btn btn-primary mr-3">Submit </button>
			<button type="button" @click="showModal = false" class="btn btn-secondary">Cancel</button>
		</div>
		  </form>
		</div>
	  </div>
	   <!-- Affichage des messages de succès ou d'erreur -->
	   <div v-if="successMessage" class="alert alert-success" role="alert">
		{{ successMessage }}
		</div>
		<div v-if="errorMessage" class="alert alert-danger" role="alert">
		{{ errorMessage }}
		</div>
  
	  <section class="ftco-section bg-light">
		<div class="container">
		  <div class="row">
			<div class="col-md-8 col-lg-10 order-md-last">
			  <div class="row">
				<!-- Existing product code -->
				<!-- Add dynamic product rendering -->
				<div v-for="product in filteredProducts" :key="product.id" class="col-sm-6 col-md-6 col-lg-4">
				<div class="product">
					<a :href="'/produitsdetail/' + product.id" class="img-prod">
					<img class="img-fluid" :src="getImageUrl(product.photo)" alt="Product Image">
					<div class="overlay"></div>
					</a>
					<div class="text py-3 px-3">
					<h3><a :href="'/produitsdetail/' + product.id">{{ product.nom }}</a></h3>
					<div class="d-flex">
						<div class="pricing">
						<p class="price"><span>{{ product.prix }}F</span></p>
						</div>
						<div class="rating">
							<p class="text-right">
								<a href="#"><span class="ion-ios-star-outline"></span></a>
								<a href="#"><span class="ion-ios-star-outline"></span></a>
								<a href="#"><span class="ion-ios-star-outline"></span></a>
								<a href="#"><span class="ion-ios-star-outline"></span></a>
								<a href="#"><span class="ion-ios-star-outline"></span></a>
							</p>
						</div>
					</div>
					<p class="bottom-area d-flex px-3">
						<a href="#" class="add-to-cart text-center py-2 mr-1" @click.prevent="addProductToCart(product)"><span>Add to cart <i class="ion-ios-add ml-1"></i></span></a>
						<a href="#" class="buy-now text-center py-2">Buy now<span><i class="ion-ios-cart ml-1"></i></span></a>
					</p>
					</div>
				</div>
			</div>

				<!-- Existing product code -->
			  </div>
			  <div class="row mt-5">
              <div class="col text-center">
                <div class="block-27">
                  <ul>
                    <li><a href="#" @click.prevent="changePage(currentPage - 1)" :disabled="currentPage === 1">&lt;</a></li>
                    <li v-for="page in totalPages" :key="page" :class="{ active: page === currentPage }">
                      <a href="#" @click.prevent="changePage(page)">{{ page }}</a>
                    </li>
                    <li><a href="#" @click.prevent="changePage(currentPage + 1)" :disabled="currentPage === totalPages">&gt;</a></li>
                  </ul>
                </div>
              </div>
            </div>
			</div>
  
		<div class="col-md-4 col-lg-2 sidebar">
			<div class="sidebar-box-2">
				<h2 class="heading mb-4">Clothing</h2>
				<ul>
				<li><a href="#" @click.prevent="filterProducts('Shirts')">Shirts &amp; Tops</a></li>
				<li><a href="#" @click.prevent="filterProducts('Dresse')">Dresses</a></li>
				<li><a href="#" @click.prevent="filterProducts('Jackets')">Jackets</a></li>
				<li><a href="#" @click.prevent="filterProducts('Coats')">Coats</a></li>
				<li><a href="#" @click.prevent="filterProducts('Winter Coats')">Winter Coats</a></li>
				<li><a href="#" @click.prevent="filterProducts('Jumpsuits')">Jumpsuits</a></li>
				</ul>
			</div>
			<div class="sidebar-box-2">
				<h2 class="heading mb-4">Jeans</h2>
				<ul>
				<li><a href="#" @click.prevent="filterProducts('Shorts')">Shorts &amp; Skirts</a></li>
				<li><a href="#" @click.prevent="filterProducts('Jeans')">Jeans</a></li>
				<li><a href="#" @click.prevent="filterProducts('Trousers')">Trousers</a></li>
				</ul>
			</div>
			<div class="sidebar-box-2">
				<h2 class="heading mb-2">Bags</h2>
				<ul>
				<li><a href="#" @click.prevent="filterProducts('BackPack')">BackPack</a></li>
				<li><a href="#" @click.prevent="filterProducts('Crossbody')">Crossbody</a></li>
				<li><a href="#" @click.prevent="filterProducts('Tote')">Tote</a></li>
				</ul>
				<h2 class="heading mb-2">Accessories</h2>
				<ul>
				<li><a href="#" @click.prevent="filterProducts('Sunglasses')">Sunglasses</a></li>
				<li><a href="#" @click.prevent="filterProducts('Hats')">Hats</a></li>
				<li><a href="#" @click.prevent="filterProducts('Watches')">Watches</a></li>
				</ul>
			</div>
			<div class="sidebar-box-2">
				<h2 class="heading mb-4">Shoes</h2>
				<ul>
				<li><a href="#" @click.prevent="filterProducts('Nike')">Nike</a></li>
				<li><a href="#" @click.prevent="filterProducts('Addidas')">Addidas</a></li>
				<li><a href="#" @click.prevent="filterProducts('Puma')">Puma</a></li>
				<li><a href="#" @click.prevent="filterProducts('Jordan')">Jordan</a></li>
				<li><a href="#" @click.prevent="filterProducts('Yeezy')">Yeezy</a></li>
				<li><a href="#" @click.prevent="filterProducts('Converse')">Converse</a></li>
				</ul>
			</div>
		</div>

		  </div>
		</div>
	  </section>
	</div>
  </template>
  
<script>
  import axios from 'axios';
  import swal from 'sweetalert'; // Importer SweetAlert

  import FooterPage from './FooterPage.vue';
  import HeaderPage from './HeaderPage.vue';
  
  export default {
	name: 'ProductPage',
	components: { FooterPage, HeaderPage },
	data() {
	  return {
		cart: {
        items: [],
        subtotal: '0.00',
        total: '0.00'
      },
		showModal: false,
		isAdmin: false,
		errorMessage : '',
		successMessage : '',
		newProduct: {
		  nom: '',
		  description: '',
		  prix: 0,
		  quantite_stock: 0,
		  photo: null,
		  idCategory: null
		},
		products: [],
		categories: [], // Assuming you have categories data
		filteredProducts: [],
		isAuthenticated: true, // Replace with actual auth check
		currentPage: 1,
		totalPages: 1,
		limit: 9 // Number of products per page
	  };
	},
	created() {
		this.checkAdmin();
	},
	methods: {
		validateProduct() {
			if (!this.newProduct.nom) return "Le nom du produit est requis.";
			if (!this.newProduct.description) return "La description du produit est requise.";
			if (!this.newProduct.prix) return "Le prix du produit est requis.";
			if (!this.newProduct.quantite_stock) return "La quantité en stock est requise.";
			if (!this.newProduct.idCategory) return "La catégorie du produit est requise.";
			return null;
    },
	addProductToCart(product) {
      let cart = JSON.parse(localStorage.getItem(this.getCartKey())) || { items: [], subtotal: '0.00', total: '0.00' };

	  // Vérifiez que cart.items est bien un tableau
      if (!Array.isArray(cart.items)) {
        cart.items = [];
      }
      // Trouvez l'index du produit dans le panier
      const existingProductIndex = cart.items.findIndex(item => item.id === product.id);


  // Déterminer la quantité actuelle du produit dans le panier
 		 let currentQuantity = existingProductIndex !== -1 ? cart.items[existingProductIndex].quantity : 0;

		// Vérifier si le produit est en stock
		if (product.quantite_stock <= 0) {
		swal({
			title: 'Out of Stock',
			text: `Sorry, ${product.nom} is currently out of stock.`,
			icon: 'error',
			button: 'OK'
		});
		return;
		}

		// Vérifier si la quantité demandée est disponible
		if (currentQuantity + 1 > product.quantite_stock) {
		swal({
			title: 'Stock Unavailable',
			text: `Sorry, only ${product.quantite_stock} units of ${product.nom} are available.`,
			icon: 'error',
			button: 'OK'
		});
		return;
		}


      // Ajoutez ou mettez à jour le produit dans le panier
      if (existingProductIndex !== -1) {
        cart.items[existingProductIndex].quantity++;
      } else {
        cart.items.push({ ...product, quantity: 1 });
      }

      // Mettre à jour le sous-total et le total
      cart.subtotal = this.calculateSubtotal(cart.items);
      cart.total = this.calculateTotal(cart.subtotal);

      // Sauvegardez le panier mis à jour dans le localStorage
      localStorage.setItem(this.getCartKey(), JSON.stringify(cart));

      // Affichez un message de succès
      swal({
        title: 'Success!',
        text: `${product.nom} is added to cart!`,
        icon: 'success',
        button: 'OK'
      });

      // Émettez l'événement avec le panier mis à jour
      this.$emit('product-added-to-cart', cart);
    },
	calculateSubtotal(items) {
      return items.reduce((sum, item) => sum + (item.prix * item.quantity), 0).toFixed(2);
    },
    calculateTotal(subtotal) {
      // Vous pouvez ajouter des calculs supplémentaires pour le total ici, comme les taxes
      return subtotal;
    },
	getCartKey() {
		const user = JSON.parse(localStorage.getItem('user'));
		return user ? `cart_${user.email}` : 'cart_guest';
	},

		async fetchCategories() {
		try {
		const token = localStorage.getItem('access_token');
		const config = {
		headers: { Authorization: `Bearer ${token}` }
		};
		const response = await axios.get('http://127.0.0.1:8000/api/categories', config);
		
		// Utilisez les données de réponse pour remplir les options du select avec ID et libellé
		this.categories = response.data.map(category => ({
		id: category.id,
		libelle: category.libelle
		}));
		
		console.log('Catégories récupérées:', this.categories); // Pour vérification
		
	} catch (error) {
		console.error("Erreur lors de la récupération des catégories :", error);
	}
	},

	async addProduct() {
  if (!this.validateProduct()) {
    this.errorMessage = "Please fill in all fields correctly.";
    return;
  }

  try {
    const token = localStorage.getItem('access_token');
    const config = {
      headers: { Authorization: `Bearer ${token}` }
    };
    const formData = new FormData();
    formData.append('nom', this.newProduct.nom);
    formData.append('description', this.newProduct.description);
    formData.append('prix', this.newProduct.prix);
    formData.append('quantite_stock', this.newProduct.quantite_stock);
    formData.append('photo', this.newProduct.photo);
    formData.append('idCategory', this.newProduct.idCategory);

    const response = await axios.post('http://127.0.0.1:8000/api/produits', formData, config);
    
    console.log('Réponse de l\'API après ajout:', response.data); // Vérifiez la réponse renvoyée par l'API

    // Assurez-vous que response.data.produit est correctement défini et utilisé
    if (response.data.produit) {
      swal({
        title: 'Success!',
        text: 'Produit ajouté avec succès.',
        icon: 'success',
        button: 'OK'
      });
      // Réinitialisez les messages
      this.errorMessage = '';
      this.successMessage = '';

      // Réinitialisez le formulaire et fermez le modal
      this.resetForm();
      this.showModal = false;
    } else {
      // Gérez le cas où response.data.produit n'est pas défini
      console.error('La réponse de l\'API ne contient pas de produit:', response.data);
      this.errorMessage = 'Erreur lors de l\'ajout du produit.';
    }
  } catch (error) {
    // Gérez les erreurs de connexion ou autres erreurs
    console.error('Erreur lors de l\'ajout du produit :', error);
    this.errorMessage = 'Erreur lors de l\'ajout du produit : ' + error.message;
  }
},
	  onFileChange(e) {
		const file = e.target.files[0];
		this.newProduct.photo = file;
	  },
	  resetNewProduct() {
		this.newProduct = {
		  nom: '',
		  description: '',
		  prix: 0,
		  quantite_stock: 0,
		  photo: null,
		  idCategory: null
		};
	  },
	  async fetchProducts(page = 1) {
		try {
			const response = await axios.get(`http://127.0.0.1:8000/api/produits?page=${page}&limit=${this.limit}`);
			console.log(response.data); // Vérifiez la structure complète de la réponse
			if (response.data && response.data.produits && response.data.produits.data) {
			this.products = response.data.produits.data;
			this.filteredProducts = this.products;
			this.currentPage = response.data.produits.current_page;
			this.totalPages = response.data.produits.last_page;
			} else {
			console.error("Structure de réponse inattendue", response.data);
			this.errorMessage = "Erreur de format de réponse de l'API.";
			}
			console.log(this.products); // Vérifiez les données de l'état
		} catch (error) {
			console.error("Erreur lors de la récupération des produits :", error);
			this.errorMessage = "Erreur lors de la récupération des produits.";
		}
		},
		filterProducts(keyword) {
      // Convert both keyword and product name to lowercase for case-insensitive comparison
      const lowerKeyword = keyword.toLowerCase();

      // Filter products based on the keyword
      this.filteredProducts = this.products.filter(product =>
        product.nom.toLowerCase().includes(lowerKeyword)
      );
	  this.$nextTick(() => {
    console.log("Mise à jour de l'interface après le filtrage");
  });
    },
	
	  prevPage() {
		if (this.currentPage > 1) {
		  this.fetchProducts(this.currentPage - 1);
		}
	  },
	  nextPage() {
		if (this.currentPage < this.totalPages) {
		  this.fetchProducts(this.currentPage + 1);
		}
	  },
	  changePage(page) {
		this.fetchProducts(page);
	},
	checkAdmin() {
  		const roles = JSON.parse(localStorage.getItem('user_roles'));
		const isAuthenticated = localStorage.getItem('access_token');

		if (roles && isAuthenticated) {
			this.isAdmin = roles.includes('Admin'); // Vérifie si l'utilisateur a le rôle Admin
			console.log(this.isAdmin);
		} else {
			this.isAdmin = false; // Assurez-vous que isAdmin est faux si l'utilisateur n'est pas authentifié ou n'a pas de rôle Admin
		}
		},
	getImageUrl(photo) {
      return `http://127.0.0.1:8000/storage/photos/${photo}`;
    },
	loadCart() {
      let cart = JSON.parse(localStorage.getItem(this.getCartKey())) || { items: [], subtotal: '0.00', total: '0.00' };
      this.cart = cart;
    },
	},
	mounted() {
	  this.fetchProducts();
	  this.fetchCategories();
	}
  }
</script>

<style>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
}

.modal-content {
  background: white;
  padding: 10px;
  border-radius: 2px;
  width: 800px;
  max-width: 100%;
  height: 690px;
}
</style>