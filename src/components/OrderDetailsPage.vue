<template>
  <div class="hero-wrap hero-bread" style="background-image: url('images/bg_6.jpg');">
    <div class="container">
      <div class="row no-gutters slider-text align-items-center justify-content-center">
        <div class="col-md-9 text-center">
          <p class="breadcrumbs"><span class="mr-2"><a href="/">Home</a></span> <span>Order Details</span></p>
          <h1 class="mb-0 bread">Order Details</h1>
        </div>
      </div>
    </div>
  </div>

  <section class="ftco-section">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <h3 class="mb-4">Order ID: {{ order.id }}</h3>
          <table class="table">
            <thead>
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
              <tr v-for="(item, index) in order.produits" :key="index" class="text-center">
                <td v-if="order.status === 'Pending'" class="product-remove">
                  <a href="#" @click.prevent="removeOrder(index)">
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
                    <input type="number" v-model="item.pivot.quantity" class="quantity form-control input-number" min="1" max="100">
                  </div>
                </td>
                <td class="total">{{ calculateTotal(item) }}F</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col col-lg-5 col-md-6 mt-5 cart-wrap">
          <div class="cart-total mb-3">
            <h3>Order Totals</h3>
            <p class="d-flex">
              <span>Total</span>
              <span>{{ calculateOrderTotal() }}F</span>
            </p>
          </div>
          <!-- Show the button only if the order status is 'En Attente' -->
          <p class="text-center" v-if="order.status === 'Pending'">
            <button @click="saveOrder" class="btn btn-primary py-3 px-4">Save Changes</button>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>


<script>
import axios from 'axios';
import swal from 'sweetalert';

export default {
  name: 'OrderDetailsPage',
  data() {
    return {
      order: {
        id: null,
        produits: []  // Initialize products as an empty array
      }
    };
  },
  created() {
    this.fetchOrderDetails();
  },
  methods: {
    fetchOrderDetails() {
      const orderId = this.$route.params.id;
      axios.get(`http://127.0.0.1:8000/api/commandes/${orderId}`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('access_token')}`
        }
      })
      .then(response => {
        console.log(response.data);  // Vérifiez la structure de la réponse
        this.order = response.data;
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des détails de la commande:', error);
      });
    },
    calculateTotal(item) {
      return (item.prix * item.pivot.quantity).toFixed(2);
    },
    calculateOrderTotal() {
      if (!this.order.produits) return 0;
      return this.order.produits.reduce((total, item) => total + (item.prix * item.pivot.quantity), 0).toFixed(2);
    },
    saveOrder() {
      axios.put(`http://127.0.0.1:8000/api/commandes/${this.order.id}`, this.order, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('access_token')}`
        }
      })
      .then(response => {
        swal({
          title: 'Success!',
          text: 'Order updated successfully!',
          icon: 'success',
          button: 'OK'
        });
      })
      .catch(error => {
        console.error('Erreur lors de la mise à jour de la commande:', error);
      });
    },
    getImageUrl(photo) {
      return `http://127.0.0.1:8000/storage/photos/${photo}`;
    },
    removeOrder(index) {
      this.order.products.splice(index, 1);
    }
  }
};
</script>

<style scoped>
/* Your styles here */
</style>
