<template>
      <body class="goto-here">

    <section id="home-section" class="hero">
		  <div class="home-slider js-fullheight owl-carousel">
	      <div class="slider-item js-fullheight ">
	      	<div class="overlay"></div>
	        <div class="container-fluid p-0">
	          <div class="row d-md-flex no-gutters slider-text js-fullheight align-items-center justify-content-end" data-scrollax-parent="true">
	          	<div class="one-third order-md-last img js-fullheight" style="background-image:url(/images/bg_1.jpg);">
	          	</div>
		          <div class="one-forth d-flex js-fullheight align-items-center " data-scrollax=" properties: { translateY: '70%' }">
		          	<div class="text">
		          		<span class="subheading">Winkel eCommerce Shop</span>
		          		<div class="horizontal">
		          			<h3 class="vr" style="background-image: url(/images/divider.jpg);">Stablished Since 2000</h3>
				            <h1 class="mb-4 mt-3">Catch Your Own <br><span>Stylish &amp; Look</span></h1>
				            <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country.</p>
				            
				            <p><a href="#" class="btn btn-primary px-5 py-3 mt-3">Discover Now</a></p>
				          </div>
		            </div>
		          </div>
	        	</div>
	        </div>
	      </div>

	      <div class="slider-item js-fullheight">
	      	<div class="overlay"></div>
	        <div class="container-fluid p-0">
	          <div class="row d-flex no-gutters slider-text js-fullheight align-items-center justify-content-end" data-scrollax-parent="true">
	          	<div class="one-third order-md-last img js-fullheight" style="background-image:url(/images/bg_2.jpg);">
	          	</div>
		          <div class="one-forth d-flex js-fullheight align-items-center " data-scrollax=" properties: { translateY: '70%' }">
		          	<div class="text">
		          		<span class="subheading">Winkel eCommerce Shop</span>
		          		<div class="horizontal">
		          			<h3 class="vr" style="background-image: url(/images/divider.jpg);">Best eCommerce Online Shop</h3>
				            <h1 class="mb-4 mt-3">A Thouroughly <span>Modern</span> Woman</h1>
				            <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country.</p>
				            
				            <p><a href="#" class="btn btn-primary px-5 py-3 mt-3">Shop Now</a></p>
				          </div>
		            </div>
		          </div>
	        	</div>
	        </div>
	      </div>
	    </div>
    </section>

    <section class="ftco-section ftco-no-pb ftco-no-pt bg-light">
			<div class="container">
				<div class="row">
					<div class="col-md-5 p-md-5 img img-2 d-flex justify-content-center align-items-center" style="background-image: url(/images/about.jpg);">
						<a href="https://vimeo.com/45830194" class="icon popup-vimeo d-flex justify-content-center align-items-center">
							<span class="icon-play"></span>
						</a>
					</div>
					<div class="col-md-7 py-5 wrap-about pb-md-5 ">
	          <div class="heading-section-bold mb-4 mt-md-5">
	          	<div class="ml-md-0">
		            <h2 class="mb-4">Better Way to Ship Your Products</h2>
	            </div>
	          </div>
	          <div class="pb-md-5">
							<p>But nothing the copy said could convince her and so it didn’t take long until a few insidious Copy Writers ambushed her, made her drunk with Longe and Parole and dragged her into their agency, where they abused her for their.</p>
							<div class="row ftco-services">
			          <div class="col-lg-4 text-center d-flex align-self-stretch ">
			            <div class="media block-6 services">
			              <div class="icon d-flex justify-content-center align-items-center mb-4">
			            		<span class="flaticon-002-recommended"></span>
			              </div>
			              <div class="media-body">
			                <h3 class="heading">Refund Policy</h3>
			                <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
			              </div>
			            </div>      
			          </div>
			          <div class="col-lg-4 text-center d-flex align-self-stretch ">
			            <div class="media block-6 services">
			              <div class="icon d-flex justify-content-center align-items-center mb-4">
			            		<span class="flaticon-001-box"></span>
			              </div>
			              <div class="media-body">
			                <h3 class="heading">Premium Packaging</h3>
			                <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
			              </div>
			            </div>    
			          </div>
			          <div class="col-lg-4 text-center d-flex align-self-stretch ">
			            <div class="media block-6 services">
			              <div class="icon d-flex justify-content-center align-items-center mb-4">
			            		<span class="flaticon-003-medal"></span>
			              </div>
			              <div class="media-body">
			                <h3 class="heading">Superior Quality</h3>
			                <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
			              </div>
			            </div>      
			          </div>
			        </div>
						</div>
					</div>
				</div>
			</div>
		</section>

	<section class="ftco-section bg-light">
    <div class="container">
      <div class="row justify-content-center mb-3 pb-3">
        <div class="col-md-12 heading-section text-center">
          <h2 class="mb-4">Best Sellers</h2>
          <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div v-for="product in products1" :key="product.id" class="col-sm col-md-6 col-lg">
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
      </div>
    </div>
  </section>

    <section class="ftco-section ftco-choose ftco-no-pb ftco-no-pt">
    	<div class="container">
    		<div class="row">
    			<div class="col-md-8 d-flex align-items-stretch">
    				<div class="img" style="background-image: url(/images/about-1.jpg);"></div>
    			</div>
    			<div class="col-md-4 py-md-5 ">
    				<div class="text py-3 py-md-5">
	            <h2 class="mb-4">New Women's Clothing Summer Collection 2019</h2>
	            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
	            <p><a href="#" class="btn btn-white px-4 py-3">Shop now</a></p>
    				</div>
    			</div>
    		</div>

    		<div class="row">
    			<div class="col-md-5 order-md-last d-flex align-items-stretch">
    				<div class="img img-2" style="background-image: url(/images/about-2.jpg);"></div>
    			</div>
    			<div class="col-md-7 py-3 py-md-5 ">
    				<div class="text text-2 py-md-5">
	            <h2 class="mb-4">New Men's Clothing Summer Collection 2019</h2>
	            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
	            <p><a href="#" class="btn btn-white px-4 py-3">Shop now</a></p>
    				</div>
    			</div>
    		</div>
    	</div>
    </section>

    <section class="ftco-section bg-light">
    	<div class="container">
				<div class="row justify-content-center mb-3 pb-3">
          <div class="col-md-12 heading-section text-center ">
            <h2 class="mb-4">Products</h2>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
          </div>
        </div>   		
    	</div>
		<div class="container">
      <div class="row">
        <div v-for="product in products2" :key="product.id" class="col-sm col-md-6 col-lg">
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
      </div>
    </div>
    </section>

    <section class="ftco-section ftco-counter img" id="section-counter" style="background-image: url(/images/bg_4.jpg);">
    	<div class="container">
    		<div class="row justify-content-center py-5">
    			<div class="col-md-10">
		    		<div class="row">
		          <div class="col-md-3 d-flex justify-content-center counter-wrap ">
		            <div class="block-18 text-center">
		              <div class="text">
		                <strong class="number" data-number="10000">0</strong>
		                <span>Happy Customers</span>
		              </div>
		            </div>
		          </div>
		          <div class="col-md-3 d-flex justify-content-center counter-wrap ">
		            <div class="block-18 text-center">
		              <div class="text">
		                <strong class="number" data-number="100">0</strong>
		                <span>Branches</span>
		              </div>
		            </div>
		          </div>
		          <div class="col-md-3 d-flex justify-content-center counter-wrap ">
		            <div class="block-18 text-center">
		              <div class="text">
		                <strong class="number" data-number="1000">0</strong>
		                <span>Partner</span>
		              </div>
		            </div>
		          </div>
		          <div class="col-md-3 d-flex justify-content-center counter-wrap ">
		            <div class="block-18 text-center">
		              <div class="text">
		                <strong class="number" data-number="100">0</strong>
		                <span>Awards</span>
		              </div>
		            </div>
		          </div>
		        </div>
	        </div>
        </div>
    	</div>
    </section>

    <section class="ftco-section testimony-section">
      <div class="container">
        <div class="row justify-content-center mb-5 pb-3">
          <div class="col-md-7 heading-section ">
            <h2 class="mb-4">Our satisfied customer says</h2>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in</p>
          </div>
        </div>
        <div class="row ">
          <div class="col-md-12">
            <div class="carousel-testimony owl-carousel">
              <div class="item">
                <div class="testimony-wrap p-4 pb-5">
                  <div class="user-img mb-5" style="background-image: url(/images/person_1.jpg)">
                    <span class="quote d-flex align-items-center justify-content-center">
                      <i class="icon-quote-left"></i>
                    </span>
                  </div>
                  <div class="text">
                    <p class="mb-5 pl-4 line">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    <p class="name">Garreth Smith</p>
                    <span class="position">Marketing Manager</span>
                  </div>
                </div>
              </div>
              <div class="item">
                <div class="testimony-wrap p-4 pb-5">
                  <div class="user-img mb-5" style="background-image: url(/images/person_2.jpg)">
                    <span class="quote d-flex align-items-center justify-content-center">
                      <i class="icon-quote-left"></i>
                    </span>
                  </div>
                  <div class="text">
                    <p class="mb-5 pl-4 line">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    <p class="name">Garreth Smith</p>
                    <span class="position">Interface Designer</span>
                  </div>
                </div>
              </div>
              <div class="item">
                <div class="testimony-wrap p-4 pb-5">
                  <div class="user-img mb-5" style="background-image: url(/images/person_3.jpg)">
                    <span class="quote d-flex align-items-center justify-content-center">
                      <i class="icon-quote-left"></i>
                    </span>
                  </div>
                  <div class="text">
                    <p class="mb-5 pl-4 line">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    <p class="name">Garreth Smith</p>
                    <span class="position">UI Designer</span>
                  </div>
                </div>
              </div>
              <div class="item">
                <div class="testimony-wrap p-4 pb-5">
                  <div class="user-img mb-5" style="background-image: url(/images/person_1.jpg)">
                    <span class="quote d-flex align-items-center justify-content-center">
                      <i class="icon-quote-left"></i>
                    </span>
                  </div>
                  <div class="text">
                    <p class="mb-5 pl-4 line">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    <p class="name">Garreth Smith</p>
                    <span class="position">Web Developer</span>
                  </div>
                </div>
              </div>
              <div class="item">
                <div class="testimony-wrap p-4 pb-5">
                  <div class="user-img mb-5" style="background-image: url(/images/person_1.jpg)">
                    <span class="quote d-flex align-items-center justify-content-center">
                      <i class="icon-quote-left"></i>
                    </span>
                  </div>
                  <div class="text">
                    <p class="mb-5 pl-4 line">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    <p class="name">Garreth Smith</p>
                    <span class="position">System Analyst</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
		<hr>

		<section class="ftco-section-parallax">
      <div class="parallax-img d-flex align-items-center">
        <div class="container">
          <div class="row d-flex justify-content-center py-5">
            <div class="col-md-7 text-center heading-section ">
              <h2>Subcribe to our Newsletter</h2>
              <div class="row d-flex justify-content-center mt-5">
                <div class="col-md-8">
                  <form action="#" class="subscribe-form">
                    <div class="form-group d-flex">
                      <input type="text" class="form-control" placeholder="Enter email address">
                      <input type="submit" value="Subscribe" class="submit px-3">
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
  

  <!-- loader -->
   <!-- <div id="ftco-loader" class="show fullscreen"><svg class="circular" width="48px" height="48px"><circle class="path-bg" cx="24" cy="24" r="22" fill="none" stroke-width="4" stroke="#eeeeee"/><circle class="path" cx="24" cy="24" r="22" fill="none" stroke-width="4" stroke-miterlimit="10" stroke="#F96D00"/></svg></div> -->


  
    
  </body>

</template>

<script>
import FooterPage from './FooterPage.vue';
import HeaderPage from './HeaderPage.vue';
import axios from 'axios';

export default{
    name: 'IndexPage',
	components:{ FooterPage,HeaderPage},
	data() {
    return {
      products1: [],
	  products2: [],

    };
  },
  mounted() {
    this.fetchProducts1();
	this.fetchProducts2();
  },
  methods: {
    async fetchProducts1() {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/random-products1');
        this.products1 = response.data;
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    },
	async fetchProducts2() {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/random-products2');
        this.products2 = response.data;
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    },
	addProductToCart(product) {
      let cart = JSON.parse(localStorage.getItem(this.getCartKey())) || { items: [], subtotal: '0.00', total: '0.00' };

	  // Vérifiez que cart.items est bien un tableau
      if (!Array.isArray(cart.items)) {
        cart.items = [];
      }
      // Trouvez l'index du produit dans le panier
      const existingProductIndex = cart.items.findIndex(item => item.id === product.id);

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
	getImageUrl(photo) {
      return `http://127.0.0.1:8000/storage/photos/${photo}`;
    },
	loadCart() {
      let cart = JSON.parse(localStorage.getItem(this.getCartKey())) || { items: [], subtotal: '0.00', total: '0.00' };
      this.cart = cart;
    },
  },

};
</script>

<style scoped>

</style>