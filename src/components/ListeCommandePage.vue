<template>
    <div class="hero-wrap hero-bread" style="background-image: url('images/bg_6.jpg');">
      <div class="container">
        <div class="row no-gutters slider-text align-items-center justify-content-center">
          <div class="col-md-9 text-center">
            <p class="breadcrumbs"><span class="mr-2"><a href="/">Home</a></span> <span>Orders</span></p>
            <h1 class="mb-0 bread">List of Orders</h1>
          </div>
        </div>
      </div>
    </div>
  
    <section class="ftco-section">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <h3 class="mb-4">List of Orders</h3>
            <table class="table">
              <thead>
                <tr>
                  <th>Order ID</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="order in orders.commandes" :key="order.id">
                  <td>{{ order.id }}</td>
                  <td :class="statusClass(order.status)">{{ order.status }}</td>
                  <td>
                    <button @click="seeOrder(order.id)" class="btn btn-primary">
                      See Order
                    </button>
                  </td>
                </tr>
                <tr v-if="orders.commandes.length === 0">
                  <td colspan="3">No orders found.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'ListeCommandePage',
    data() {
      return {
        orders: {
          commandes: []
        }
      };
    },
    created() {
      this.fetchOrders();
    },
    methods: {
      fetchOrders() {
        // Fetch orders and classify them by status
        axios.get('http://127.0.0.1:8000/api/commandes', {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('access_token')}`
          }
        })
        .then(response => {
          const orders = response.data;
          console.log('Fetched orders:', orders); // Debugging line
          orders.forEach(order => {
            console.log(`Order ID: ${order.id}, Status: ${order.status}`); // Log status of each order
          });
          this.orders.commandes = orders.filter(order => order.status === 'Pending' || order.status === 'Confirmed' || order.status === 'Delivered');
          console.log('Classified orders:', this.orders); // Debugging line
        })
        .catch(error => {
          console.error('Erreur lors de la récupération des commandes:', error);
        });
      },
      seeOrder(orderId) {
        // Navigate to the order edit page or show a modal for editing
        this.$router.push(`/order-details/${orderId}`);
      },
      statusClass(status) {
        if (status === 'Pending') {
          return 'text-warning';
        } else if (status === 'Confirmed') {
          return 'text-primary';
        } else if (status === 'Delivered') {
          return 'text-success';
        }
      }
    }
  };
  </script>
  
  
  <style scoped>
  .table th, .table td {
    text-align: center;
  }
  </style>
  