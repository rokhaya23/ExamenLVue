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
                                    <h4 class="text-center mb-4">Sign in your account</h4>
                                    <form @submit.prevent="login">
                                        
                                        <div class="form-group">
                                            <label class="mb-1"><strong>Email</strong></label>
                                            <input type="email" class="form-control" v-model="email" required>
                                        </div>
                                        <div class="form-group">
                                            <label class="mb-1"><strong>Password</strong></label>
                                            <input type="password" class="form-control" v-model="password" required>
                                        </div>
                                        <div class="form-row d-flex justify-content-between mt-4 mb-2">
                                            <div class="form-group">
                                                <div class="custom-control custom-checkbox ml-1">
                                                    <input type="checkbox" class="custom-control-input" id="basic_checkbox_1">
                                                    <label class="custom-control-label" for="basic_checkbox_1">Remember my preference</label>
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <a href="page-forgot-password.html">Forgot Password?</a>
                                            </div>
                                        </div>
                                        <div class="text-center">
                                            <button type="submit" class="btn btn-primary btn-block">Sign Me In</button>
                                        </div>
                                    </form>
                                    <div class="new-account mt-3">
                                        <p>Don't have an account? <a class="text-primary" href="/inscrire">Sign up</a></p>
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
    name: 'LoginPage',
    data() {
        return {
            email: '',
            password: '',
        }
    },
    methods: {
    async login() {
      try {
        this.loading = true;
        const response = await axios.post('http://127.0.0.1:8000/api/login', {
          email: this.email,
          password: this.password
        });

        console.log('Response:', response);

        if (response.data.token) {  
          localStorage.setItem('access_token', response.data.token);
          localStorage.setItem('user_roles', JSON.stringify(response.data.roles));
          // Ici, vous pouvez sauvegarder toutes les informations de l'utilisateur
            const userData = {
                id: response.data.user.id,
                nom: response.data.user.nom,
                prenom: response.data.user.prenom,
                email: response.data.user.email,
                // Ajoutez d'autres informations utilisateur si nécessaires
            };
            localStorage.setItem('user', JSON.stringify(userData));
          console.log('Vous êtes connecté');
          this.$router.push('/produits');
        } else {
          console.log('Échec de la connexion : Jeton non reçu');
          alert('Échec de la connexion : Jeton non reçu');
        }
      } catch (error) {
        console.error('Erreur lors de la connexion :', error);
        if (error.response && error.response.status === 401) {
          alert('Non autorisé : Détails de connexion non valides');
        } else {
          alert('Une erreur s\'est produite lors de la connexion');
        }
      }
    }
}
}
</script>