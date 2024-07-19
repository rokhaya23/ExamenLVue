<template>
    <div class="hero-wrap hero-bread" style="background-image: url('images/bg_6.jpg');">
      <div class="container">
        <div class="row no-gutters slider-text align-items-center justify-content-center">
          <div class="col-md-9 ftco-animate text-center">
          	<p class="breadcrumbs"><span class="mr-2"><a href="/">Home</a></span> <span>Cart</span></p>
            <h1 class="mb-0 bread">My Cart</h1>
          </div>
        </div>
      </div>
    </div>

    <section class="ftco-section ftco-cart">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="cart-list">
            <table class="table">
              <thead class="thead-primary">
                <tr class="text-center">
                  <th>&nbsp;</th>
				  <th>&nbsp;</th>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in cart" :key="index" class="text-center">
                  <td class="product-remove">
                    <a href="#" @click.prevent="removeFromCart(index)">
                      <span class="ion-ios-close"></span>
                    </a>
                  </td>
				  <td class="image-prod">
					<div class="img">
                    <img :src="getImageUrl(item.photo)" alt="Product Image" class="img-fluid">
				</div>
				</td>
                  <td class="product-name">
                    <h3>{{ item.nom }}</h3>
                    <!-- <p>{{ item.description }}</p> -->
                  </td>
                  <td class="price">{{ item.prix }}F</td>
                  <td class="quantity">
                    <div class="input-group mb-3">
                      <input type="number" v-model="item.quantity" class="quantity form-control input-number" min="1" max="100">
                    </div>
                  </td>
                  <td class="total">{{ calculateTotal(item) }}F</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col col-lg-5 col-md-6 mt-5 cart-wrap">
          <div class="cart-total mb-3">
            <h3>Cart Totals</h3>
            <p class="d-flex">
              <span>Subtotal</span>
              <span>{{ calculateSubtotal() }}F</span>
            </p>
            <p class="d-flex">
              <span>Delivery</span>
              <span>3000.00F</span>
            </p>
            <!-- Example discount -->
            <p class="d-flex">
              <span>Discount</span>
              <span>0.00F</span>
            </p>
            <hr>
            <p class="d-flex total-price">
              <span>Total</span>
              <span>{{ calculateTotalWithDiscount() }}F</span>
            </p>
          </div>
          <p class="text-center">
            <a href="/checkout" class="btn btn-primary py-3 px-4">Proceed to Checkout</a>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'CartPage',
  data() {
    return {
      cart: []
    };
  },
  created() {
    this.loadCart();
  },
  methods: {
    loadCart() {
      // Charger le panier depuis localStorage
      const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
      this.cart = cartItems;
    },
    removeFromCart(index) {
      // Supprimer un produit du panier
      this.cart.splice(index, 1);
      localStorage.setItem('cart', JSON.stringify(this.cart));
    },
    calculateTotal(item) {
      // Calculer le total pour un produit
      return (item.prix * item.quantity).toFixed(2);
    },
    calculateSubtotal() {
      // Calculer le sous-total du panier
      const subtotal = this.cart.reduce((total, item) => total + (item.prix * item.quantity), 0);
      return subtotal;
	},
    calculateTotalWithDiscount() {
      // Exemple de calcul avec une remise (vous pouvez adapter selon vos besoins)
      const subtotal = this.calculateSubtotal();
      const delivery = 3000; // Exemple de remise fixe
      return (subtotal + delivery).toFixed(2);
    },
	getImageUrl(photo) {
	  // Afficher l'image du produit
	  return `http://127.0.0.1:8000/storage/photos/${photo}`;
	},
	saveCart() {
      // Sauvegarder le panier dans localStorage
      localStorage.setItem('cart', JSON.stringify(this.cart));
    },
  },
  watch: {
    cart: {
      handler() {
        this.saveCart();
      },
      deep: true
    }
  }
};
</script>