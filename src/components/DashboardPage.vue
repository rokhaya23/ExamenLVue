<template>
  <div class="dashboard">
    <div class="container">
      <div class="row">
        <div class="col-md-3">
          <div class="card bg-primary text-white">
            <div class="card-body">
              <h5 class="card-title">Products In Stock</h5>
              <p class="card-text">{{ statistics.inStock }}</p>
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="card bg-danger text-white">
            <div class="card-body">
              <h5 class="card-title">Out of Stock Products</h5>
              <p class="card-text">{{ statistics.outOfStock }}</p>
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="card bg-success text-white">
            <div class="card-body">
              <h5 class="card-title">Number of Users</h5>
              <p class="card-text">{{ statistics.userCount }}</p>
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="card bg-info text-white">
            <div class="card-body">
              <h5 class="card-title">Delivered Orders</h5>
              <p class="card-text">{{ statistics.deliveredOrdersCount }}</p>
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="card bg-info text-white">
            <div class="card-body">
              <h5 class="card-title">Pending Orders</h5>
              <p class="card-text">{{ statistics.pendingOrdersCount }}</p>
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="card bg-warning text-white">
            <div class="card-body">
              <h5 class="card-title">Total Revenue</h5>
              <p class="card-text">{{ statistics.totalRevenue.toFixed(2) }}F</p>
            </div>
          </div>
        </div>
      </div>
      <div class="row mt-5">
        <div class="col-md-6">
          <canvas id="productsChart" width="400" height="400"></canvas>
        </div>
        <div class="col-md-6">
          <canvas id="ordersChart" width="400" height="400"></canvas>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { Chart, BarController, BarElement, CategoryScale, LinearScale, DoughnutController, ArcElement, Tooltip, Legend } from 'chart.js';

Chart.register(BarController, BarElement, CategoryScale, LinearScale, DoughnutController, ArcElement, Tooltip, Legend);

export default {
  name: 'DashboardPage',
  data() {
    return {
      statistics: {
        inStock: 0,
        outOfStock: 0,
        userCount: 0,
        deliveredOrdersCount: 0,
        pendingOrdersCount: 0,
        totalRevenue: 0,
      },
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
        this.initCharts();
      } catch (error) {
        console.error('Error fetching statistics:', error);
      }
    },
    initCharts() {
      this.initProductsChart();
      this.initOrdersChart();
    },
    initProductsChart() {
      const ctx = document.getElementById('productsChart').getContext('2d');
      new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['In Stock', 'Out of Stock'],
          datasets: [
            {
              label: 'Products',
              data: [this.statistics.inStock, this.statistics.outOfStock],
              backgroundColor: ['#007bff', '#dc3545'],
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
        },
      });
    },
    initOrdersChart() {
      const ctx = document.getElementById('ordersChart').getContext('2d');
      new Chart(ctx, {
        type: 'doughnut',
        data: {
          labels: ['Delivered Orders', 'Pending Orders'],
          datasets: [
            {
              label: 'Orders',
              data: [this.statistics.deliveredOrdersCount, this.statistics.pendingOrdersCount],
              backgroundColor: ['#17a2b8', '#ffc107'],
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
        },
      });
    },
  },
};
</script>

<style scoped>
.card {
  margin: 10px;
}
.card-body {
  text-align: center;
}
.card-title {
  font-size: 1.2rem;
}
.card-text {
  font-size: 1.5rem;
  font-weight: bold;
}
.dashboard .row {
  display: flex;
  justify-content: center;
}
.dashboard .col-md-6 {
  margin: 10px;
}
</style>
