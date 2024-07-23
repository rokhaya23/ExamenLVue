<template>
    <div class="hero-wrap hero-bread" style="background-image: url('images/bg_6.jpg');">
      <div class="container">
        <div class="row no-gutters slider-text align-items-center justify-content-center">
          <div class="col-md-9 text-center">
            <p class="breadcrumbs"><span class="mr-2"><a href="/">Home</a></span> <span>Validated Orders</span></p>
            <h1 class="mb-0 bread">Validated Orders</h1>
          </div>
        </div>
      </div>
    </div>
  
    <section class="ftco-section">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <table class="table">
              <thead>
                <tr class="text-center">
                  <th>Order ID</th>
                  <th>User Name</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(order, index) in orders" :key="order.id" class="text-center">
                  <td>{{ order.id }}</td>
                  <td>{{ order.userName }}</td>
                  <td>
                    <select v-model="order.status" @change="updateOrderStatus(order.id, order.status)">
                        <option value="Pending">Pending</option>
                        <option value="Confirmed">Confirmed</option>
                        <option value="Delivered">Delivered</option>
                    </select>

                  </td>
                  <td>
                    <button @click="updateOrderStatus(order.id, order.status)" class="btn btn-primary">Update Status</button>
                  </td>
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
  import swal from 'sweetalert';
  
  export default {
    name: 'ValidatedCommandePage',
    data() {
      return {
        orders: [] // Initialize orders array
      };
    },
    created() {
      this.fetchOrders();
    },
    methods: {
      fetchOrders() {
        axios.get('http://127.0.0.1:8000/api/commandes-validated', {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('access_token')}`
          }
        })
        .then(response => {
          this.orders = response.data; // Directly assign the fetched data
        })
        .catch(error => {
          console.error('Erreur lors de la récupération des commandes:', error);
        });
      },
      updateOrderStatus(orderId, status) {
        axios.put(`http://127.0.0.1:8000/api/commande/${orderId}`, { status }, {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('access_token')}`
          }
        })
        .then(response => {
          swal({
            title: 'Success!',
            text: 'Order status updated successfully!',
            icon: 'success',
            button: 'OK'
          });
          this.fetchOrders(); // Refresh the order list
        })
        .catch(error => {
          console.error('Erreur lors de la mise à jour du statut de la commande:', error);
        });
      }
    }
  };
  </script>
  
  <style scoped>
  /* Your styles here */
  </style>
  