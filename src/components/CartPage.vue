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
                <tr v-for="(item, index) in cart.items" :key="index" class="text-center">
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
                  </td>
                  <td class="price">{{ item.prix }}F</td>
                  <td class="quantity">
                    <div class="input-group mb-3">
                      <input type="number" v-model.number="item.quantity" @change="updateQuantity(index)" class="quantity form-control input-number" min="1" max="100">
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
              <span>{{ cart.subtotal }}F</span>
            </p>
            <p class="d-flex">
              <span>Delivery</span>
              <span>3000.00F</span>
            </p>
            <p class="d-flex">
              <span>Discount</span>
              <span>0.00F</span>
            </p>
            <hr>
            <p class="d-flex total-price">
              <span>Total</span>
              <span>{{ cart.total }}F</span>
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
      cart: {
        items: [],
        subtotal: 0,
        total: 0
      },
      user: null,
    };
  },
  created() {
    this.loadUser();
    this.loadCart();
  },
  methods: {
    loadUser() {
      this.user = JSON.parse(localStorage.getItem('user'));
    },
    getCartKey() {
      return this.user ? `cart_${this.user.email}` : 'cart_guest';
    },
    loadCart() {
  const cartKey = this.getCartKey();
  const cartData = JSON.parse(localStorage.getItem(cartKey)) || { items: [], subtotal: 0, total: 0 };
  if (!Array.isArray(cartData.items)) {
    cartData.items = [];
  }
  this.cart = cartData;
  this.calculateTotals(); // Recalculate totals after loading cart
},

    saveCart() {
      const cartKey = this.getCartKey();
      const cartData = {
        items: this.cart.items,
        subtotal: this.cart.subtotal,
        total: this.cart.total
      };
      localStorage.setItem(cartKey, JSON.stringify(cartData));
    },
    removeFromCart(index) {
      this.cart.items.splice(index, 1);
      this.calculateTotals();
      this.saveCart();
    },
    updateQuantity(index) {
      this.cart.items[index].quantity = Math.max(1, this.cart.items[index].quantity);
      this.calculateTotals();
      this.saveCart();
    },
    calculateTotal(item) {
      return (item.prix * item.quantity).toFixed(2);
    },
    calculateTotals() {
  if (!Array.isArray(this.cart.items)) {
    this.cart.items = []; // Ensure it's an array
  }
  const subtotal = this.cart.items.reduce((total, item) => total + (item.prix * item.quantity), 0);
  const delivery = 3000;
  this.cart.subtotal = subtotal.toFixed(2);
  this.cart.total = (subtotal + delivery).toFixed(2);
},
    getImageUrl(photo) {
      return `http://127.0.0.1:8000/storage/photos/${photo}`;
    },
  },
  watch: {
    cart: {
      handler() {
        this.calculateTotals();
        this.saveCart();
      },
      deep: true
    }
  }
};
</script>
