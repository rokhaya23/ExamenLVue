<template>
	<div>
	  <div class="py-1 bg-black">
		<div class="container">
		  <div class="row no-gutters d-flex align-items-start align-items-center px-md-0">
			<div class="col-lg-12 d-block">
			  <div class="row d-flex">
				<div class="col-md pr-4 d-flex topper align-items-center">
				  <div class="icon mr-2 d-flex justify-content-center align-items-center"><span class="icon-phone2"></span></div>
				  <span class="text">+(221) 77 777 77 77</span>
				</div>
				<div class="col-md pr-4 d-flex topper align-items-center">
				  <div class="icon mr-2 d-flex justify-content-center align-items-center"><span class="icon-paper-plane"></span></div>
				  <span class="text">eshop@email.com</span>
				</div>
				<div class="col-md-5 pr-4 d-flex topper align-items-center text-lg-right">
				  <span class="text">3-5 Business days delivery & Free Returns</span>
				</div>
			  </div>
			</div>
		  </div>
		</div>
	  </div>
	  <nav class="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
		<div class="container">
		  <a class="navbar-brand" href="/">Winkel</a>
		  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
			<span class="oi oi-menu"></span> Menu
		  </button>
  
		  <div class="collapse navbar-collapse" id="ftco-nav">
			<ul class="navbar-nav ml-auto">
			  <li class="nav-item active"><a href="/" class="nav-link">Home</a></li>
			  <li class="nav-item dropdown">
				<a class="nav-link dropdown-toggle" href="#" id="dropdown04" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Shop</a>
				<div class="dropdown-menu" aria-labelledby="dropdown04">
				  <a href="/produits" class="dropdown-item">Shop</a>
				  <a class="dropdown-item" href="/cart">Cart</a>
				</div>
			  </li>
			<li class="nav-item dropdown" v-if="isLoggedIn">
				<a class="nav-link dropdown-toggle" href="#" id="dropdown04" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Orders</a>
				<div class="dropdown-menu" aria-labelledby="dropdown04">
					<a v-if="isClient" href="/listecommande" class="dropdown-item">Orders</a>
					<a v-if="isAdmin" href="/validercommande" class="dropdown-item">Validate Orders</a>
				</div>
			</li>
			  <li class="nav-item"><a href="/contact" class="nav-link">Contact</a></li>
			  <li class="nav-item cta cta-colored"><router-link to="/cart" class="nav-link"><span class="icon-shopping_cart"></span>[{{ cartItemCount }}]</router-link></li>
			  <li class="nav-item" v-if="!isLoggedIn"><a href="/inscrire" class="nav-link">Sign Up</a></li>
			  <li class="nav-item" v-if="!isLoggedIn"><a href="/login" class="nav-link">Login</a></li>
			  <li class="nav-item" v-if="isLoggedIn"><a @click="logout" class="nav-link" style="cursor: pointer;">Logout</a></li>
			</ul>
		  </div>
		</div>
	  </nav>
	</div>
  </template>
  
  <script>
export default {
  name: 'HeaderPage',
  data() {
    return {
      isLoggedIn: false,
	  isClient: false,
	  isAdmin: false,
    };
  },
  props: {
    cart: {
      type: Array,
      required: true
    }
  },
  computed: {
    cartItemCount() {
      return this.cart.length;
    }
  },

  created() {
    this.checkUserStatus();
  },
  methods: {
    checkUserStatus() {
      const user = JSON.parse(localStorage.getItem('user_roles'));
      if (user) {
        this.isLoggedIn = true;
        this.isClient = user.includes('Client'); ; 
        this.isAdmin = user.includes('Admin');   
      } else {
        this.isLoggedIn = false;
		this.isClient = false;
		this.isAdmin = false;
      }
    },
	addToCart(product) {
      // Ajoutez le produit au panier
      this.$emit('add-to-cart', product);
    },
    logout() {
    localStorage.removeItem('access_token');
	localStorage.removeItem('user');
	localStorage.removeItem('user_roles');
    this.isLoggedIn = false;
	this.isClient = false;
	this.isAdmin = false;
    this.$router.push('/login');
    console.log('Logout successful');
}
  }
}
</script>
  
  <style>
  /* Your styles here */
  </style>
  