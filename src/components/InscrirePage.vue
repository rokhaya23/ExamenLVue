<template>
    <div class="authincation h-100">
      <div class="container h-100">
        <div class="row justify-content-center h-100 align-items-center">
          <div class="col-md-6">
            <div class="authincation-content">
              <div class="row no-gutters">
                <div class="col-xl-12">
                  <div class="auth-form">
                    <div class="text-center mb-3">
                      <div class="navbar-brand">Winkel</div>
                    </div>
                    <h4 class="text-center mb-4">Create your account</h4>
                    <form @submit.prevent="register">
                      <div class="form-group">
                        <label class="mb-1"><strong>First Name</strong></label>
                        <input v-model="prenom" type="text" class="form-control" required>
                      </div>
                      <div class="form-group">
                        <label class="mb-1"><strong>Last Name</strong></label>
                        <input v-model="nom" type="text" class="form-control" required>
                      </div>
                      <div class="form-group">
                        <label class="mb-1"><strong>Email</strong></label>
                        <input v-model="email" type="email" class="form-control" required>
                      </div>
                      <div class="form-group">
                        <label class="mb-1"><strong>Password</strong></label>
                        <input v-model="password" type="password" class="form-control" required>
                      </div>
                      <div class="form-row d-flex justify-content-between mt-4 mb-2">
                        <div class="form-group">
                          <div class="custom-control custom-checkbox ml-1">
                            <input type="checkbox" class="custom-control-input" id="basic_checkbox_1">
                            <label class="custom-control-label" for="basic_checkbox_1">Remember my preference</label>
                          </div>
                        </div>
                      </div>
                      <div class="text-center">
                        <button :disabled="loading" type="submit" class="btn btn-primary btn-block">
                          <span v-if="loading" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                          <span v-if="!loading">Sign Up</span>
                        </button>
                      </div>
                    </form>
                    <div class="new-account mt-3">
                      <p>Already have an account? <a class="text-primary" href="/login">Sign in</a></p>
                    </div>
                  </div>
                </div>
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
    name: 'InscrirePage',
    data() {
      return {
        nom: '',
        prenom: '',
        email: '',
        password: '',
        loading: false,
        isLoggedIn: false,
      }
    },
    methods: {
      async register() {
        try {
          this.loading = true;
          const response = await axios.post('http://127.0.0.1:8000/api/register', {
            nom: this.nom,
            prenom: this.prenom,
            email: this.email,
            password: this.password,
          });
  
          console.log('Response:', response);
  
          if (response.data.status === 200) {
            console.log('Utilisateur enregistré avec succès!', response.data.user);
            localStorage.setItem('access_token', response.data.token);
            this.isLoggedIn = true;
            this.$router.push('/questions');
          } else {
            console.log(response.data.message);
          }
        } catch (error) {
          console.error('Erreur lors de l\'inscription :', error.response.data.message);
          alert('Erreur lors de l\'inscription : ' + error.response.data.message);
        } finally {
          this.loading = false;
        }
      }
    }
  }
  </script>
  
  <style>
  /* Ajoutez ici vos styles personnalisés */
  </style>
  