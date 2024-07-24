<template>
    <div class="dashboard">
      <div class="container">
        <div class="row">
          <div class="col-md-3">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Products In Stock</h5>
                <p class="card-text">{{ statistics.inStock }}</p>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Out of Stock Products</h5>
                <p class="card-text">{{ statistics.outOfStock }}</p>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Number of Users</h5>
                <p class="card-text">{{ statistics.userCount }}</p>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Confirmed Orders</h5>
                <p class="card-text">{{ statistics.confirmedOrdersCount }}</p>
              </div>
            </div>
          </div>
          <div class="col-md-3">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Total Revenue</h5>
              <p class="card-text">{{ statistics.totalRevenue.toFixed(2) }}F</p>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  export default {
    name: 'DashboardPage',
    data() {
      return {
        statistics: {
          inStock: 0,
          outOfStock: 0,
          userCount: 0,
          confirmedOrdersCount: 0,
          totalRevenue: 0
        }
      };
    },
    mounted() {
      this.fetchStatistics();
    },
    methods: {
      async fetchStatistics() {
        try {
          const response = await axios.get('http://127.0.0.1:8000/api/dashboard');
          this.statistics = response.data;
        } catch (error) {
          console.error('Error fetching statistics:', error);
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .card {
    margin: 10px;
  }
  .card-body {
    text-align: center;
  }
  .dashboard .card {
  margin: 15px 0;
}

.card-title {
  font-size: 1.2rem;
}

.card-text {
  font-size: 1.5rem;
  font-weight: bold;
}
  </style>
  