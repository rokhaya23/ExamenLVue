<template>
	<div>
	  <div class="hero-wrap hero-bread" style="background-image: url('/images/bg_6.jpg');">
		<div class="container">
		  <div class="row no-gutters slider-text align-items-center justify-content-center">
			<div class="col-md-9  text-center">
			  <p class="breadcrumbs">
				<span class="mr-2">
				  <a href="/">Home</a>
				</span>
				<span class="mr-2">
				  <a href="/produits">Product</a>
				</span>
				<span>Product Single</span>
			  </p>
			  <h1 class="mb-0 bread">Product Single</h1>
			</div>
		  </div>
		</div>
	  </div>
  
	  <section class="ftco-section">
		<div class="container">
		  <div class="row">
			<div class="col-lg-6 mb-5 ">
			  <a :href="product.photo" class="image-popup">
				<img :src="getImageUrl(product.photo)" class="img-fluid" alt="Product Image">
			  </a>
			</div>
			<div class="col-lg-6 product-details pl-md-5 ">
			  <h3>{{ product.nom }}</h3>
			  <div class="rating d-flex">
				<p class="text-left mr-4">
				  <a href="#" class="mr-2">5.0</a>
				  <a href="#"><span class="ion-ios-star-outline"></span></a>
				  <a href="#"><span class="ion-ios-star-outline"></span></a>
				  <a href="#"><span class="ion-ios-star-outline"></span></a>
				  <a href="#"><span class="ion-ios-star-outline"></span></a>
				  <a href="#"><span class="ion-ios-star-outline"></span></a>
				</p>
				 <p class="text-left mr-4">
				  <a href="#" class="mr-2" style="color: #000;">Category : <span style="color: #bbb;">{{ product.category ? product.category.libelle : 'N/A' }}</span></a>
				</p>
				<!-- <p class="text-left">
				  <a href="#" class="mr-2" style="color: #000;">500 <span style="color: #bbb;">Sold</span></a>
				</p> -->
			  </div>
			  <p class="price"><span>{{ product.prix }}</span></p>
			  <p>{{ product.description }}</p>
			  <div class="row mt-4">
					<div class="col-md-6">
					<div v-if="product.category.libelle === 'Clothing' || product.category.libelle === 'Jeans'" class="form-group d-flex">
						<div class="select-wrap">
						<div class="icon"><span class="ion-ios-arrow-down"></span></div>
						<select name="" id="" class="form-control">
							<option value="">Small</option>
							<option value="">Medium</option>
							<option value="">Large</option>
							<option value="">Extra Large</option>
						</select>
						</div>
					</div>
					
					<div v-if="product.category.libelle === 'Shoes'" class="form-group d-flex">
						<div class="select-wrap">
						<div class="icon"><span class="ion-ios-arrow-down"></span></div>
						<select name="" id="" class="form-control">
							<option value="38">38</option>
							<option value="39">39</option>
							<option value="40">40</option>
							<option value="41">41</option>
						</select>
						</div>
					</div>
					</div>
				<div class="w-100"></div>
				<div class="input-group col-md-6 d-flex mb-3">
				  <span class="input-group-btn mr-2">
					<button type="button" class="quantity-left-minus btn" data-type="minus" data-field="">
					  <i class="ion-ios-remove"></i>
					</button>
				  </span>
				  <input type="text" id="quantity" name="quantity" class="form-control input-number" value="1" min="1" max="100">
				  <span class="input-group-btn ml-2">
					<button type="button" class="quantity-right-plus btn" data-type="plus" data-field="">
					  <i class="ion-ios-add"></i>
					</button>
				  </span>
				</div>
				<div class="w-100"></div>
				<div class="col-md-12">
					<p style="color: #000;">{{ product.quantite_stock }} piece(s) available</p>
				</div>
			  </div>
          	<p><a href="#" class="btn btn-black py-3 px-5" @click.prevent="addProductToCart(product)">Add to Cart</a></p>
			</div>
		  </div>
		</div>
	  </section>
  
	  <section class="ftco-section bg-light">
		<div class="container">
		  <div class="row justify-content-center mb-3 pb-3">
			<div class="col-md-12 heading-section text-center">
			  <h2 class="mb-4">Related Products</h2>
			  <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
			</div>
		  </div>
		</div>
		<div class="container">
		  <div class="row">
			<div v-for="relatedProduct in relatedProducts" :key="relatedProduct.id" class="col-sm col-md-6 col-lg">
			  <div class="product">
				<a :href="{ name: 'produitsdetail', params: { id: relatedProduct.id } }" class="img-prod">
				  <img class="img-fluid" :src="getImageUrl(relatedProduct.photo)" alt="Colorlib Template">
				  <span class="status">30%</span>
				  <div class="overlay"></div>
				</a>
				<div class="text py-3 px-3">
				  <h3>
					<a :href="{ name: 'produitsdetail', params: { id: relatedProduct.id } }">{{ relatedProduct.nom }}</a>
				  </h3>
				  <div class="d-flex">
					<div class="pricing">
					  <p class="price"><span>{{ relatedProduct.prix }}</span></p>
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
					<a href="#" class="add-to-cart text-center py-2 mr-1" @click.prevent="addProductToCart(relatedProduct)">
                  		<span>Add to cart <i class="ion-ios-add ml-1"></i></span>
                	</a>
					<a href="#" class="buy-now text-center py-2">Buy now<span><i class="ion-ios-cart ml-1"></i></span></a>
				  </p>
				</div>
			  </div>
			</div>
		  </div>
		</div>
	  </section>
	</div>
  </template>
  
  <script>
  import axios from 'axios';
  export default {
	name: 'ProductDetailsPage',
	data() {
	  return {
		product: null,
		relatedProducts: [],
	  };
	},
	created() {
    this.fetchProduct();
    this.fetchRelatedProducts();
  },
  watch: {
    '$route.params.id': function(newId) {
      this.fetchProduct(newId);
      this.fetchRelatedProducts(newId);
    }
  },

	methods: {
		fetchProduct(productId) {
			productId = productId || this.$route.params.id; // Use current route params if productId is not provided
			const token = localStorage.getItem('access_token');

			axios.get(`http://127.0.0.1:8000/api/produits/${productId}`, {
				headers: {
				Authorization: `Bearer ${token}`
				}
			})
			.then(response => {
				if (response.data && response.data.produit) {
				this.product = response.data.produit; // Assurez-vous que le nom du champ est correct ici
				} else {
				console.error('Réponse de l\'API invalide:', response.data);
				}
			})
			.catch(error => {
				console.error('Erreur lors de la récupération du produit:', error);
			});
			},

				addProductToCart(product) {
					let cart = JSON.parse(localStorage.getItem('cart')) || [];
					cart.push(product);
					localStorage.setItem('cart', JSON.stringify(cart));

						swal({
						title: 'Success!',
						text: `${product.nom} is added to cart!`,
						icon: 'success',
						button: 'OK'
					});
					this.$emit('product-added-to-cart', cart); // Émettre l'événement avec le panier mis à jour

		},
		fetchRelatedProducts(productId) {
			productId = productId || this.$route.params.id; // Use current route params if productId is not provided

		const token = localStorage.getItem('access_token');

		axios.get('http://127.0.0.1:8000/api/produits/related', {
			headers: {
			Authorization: `Bearer ${token}`
			}
		})
		.then(response => {
			console.log('Produits liés récupérés :', response.data); // Vérifiez les données récupérées dans la console
			this.relatedProducts = response.data;
		})
		.catch(error => {
			console.error('Erreur lors de la récupération des produits liés :', error);
		});
		},

	  getImageUrl(photo) {
		return `http://127.0.0.1:8000/storage/photos/${photo}`;
	  },
	},
  };
  </script>
  
  <style scoped>
  /* Ajoutez vos styles ici */
  </style>
  