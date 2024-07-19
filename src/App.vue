<script>
import HeaderPage from './components/HeaderPage.vue';
import FooterPage from './components/FooterPage.vue';

export default {
  name: 'App',
  components: {
    HeaderPage,
    FooterPage
  },
  data() {
    return {
      cart: [] // Initialisation du panier
    };
  },
  methods: {
    addToCart(product) {
      // Ajoutez le produit au panier
      this.cart.push(product);
    },
    updateCart(cart) {
      // Mettre à jour le panier depuis ProductPage ou tout autre composant rendu par Vue Router
      this.cart = cart;
    }
  }
}
</script>

<template>
  <main>
    <HeaderPage :cart="cart" @add-to-cart="addToCart" />
    <router-view @product-added-to-cart="updateCart" />
    <FooterPage />
</main>
</template>

<style scoped>

</style>
