<template>
    <div class="hero-wrap hero-bread" style="background-image: url('images/bg_6.jpg');">
        <div class="container">
            <div class="row no-gutters slider-text align-items-center justify-content-center">
                <div class="col-md-9 text-center">
                    <p class="breadcrumbs"><span class="mr-2"><a href="/">Home</a></span> <span>Checkout</span></p>
                    <h1 class="mb-0 bread">Checkout</h1>
                </div>
            </div>
        </div>
    </div>

    <section class="ftco-section">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-xl-8">
                    <form @submit.prevent="placeOrder" >
                        <h3 class="mb-4 billing-heading">Billing Details</h3>
                        <div class="row align-items-end">
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="firstname">First Name</label>
                                    <input type="text" class="form-control" v-model="billing.prenom" placeholder="Enter your first name">
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="lastname">Last Name</label>
                                    <input type="text" class="form-control" v-model="billing.nom" placeholder="Enter your last name">
                                </div>
                            </div>
                            <div class="w-100"></div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="towncity">Department</label>
                                    <input type="text" class="form-control" v-model="billing.departement" placeholder="Enter your department">
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="postcodezip">Street Address</label>
                                    <input type="text" class="form-control" v-model="billing.adresse" placeholder="Enter your street address">
                                </div>
                            </div>
                            <div class="w-100"></div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="phone">Phone</label>
                                    <input type="text" class="form-control" v-model="billing.telephone" placeholder="Enter your phone number">
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="emailaddress">Email</label>
                                    <input type="text" class="form-control" v-model="billing.email" placeholder="Enter your email address">
                                </div>
                            </div>
                            <div class="w-100"></div>
                            <div class="col-md-12" v-if="!isUserLoggedIn">
                                <div class="form-group mt-4">
                                    <div class="radio">
                                        <label class="mr-3"><input type="radio" name="optradio" v-model="createAccount"> Create an Account? </label>
                                    </div>
                                    <small v-if="!isUserLoggedIn">If you already have an account, please <a href="/login">login</a>.</small>
                                </div>
                                <div class="form-group" v-if="createAccount">
                                    <label for="password">Password</label>
                                    <input type="password" class="form-control" v-model="billing.password" placeholder="Enter your password">
                                </div>
                            </div>
                        </div>
                    </form>

                    <div class="row mt-5 pt-3 d-flex">
                        <div class="col-md-6 d-flex">
                            <div class="cart-detail cart-total bg-light p-3 p-md-4">
                                <h3 class="billing-heading mb-4">Cart Total</h3>
                                <p class="d-flex">
                                    <span>Subtotal</span>
                                    <span>{{ formatCurrency(cart.subtotal) }}</span>
                                </p>
                                <p class="d-flex">
                                    <span>Delivery</span>
                                    <span>3000.00F</span>
                                </p>
                                <p class="d-flex">
                                    <span>Discount</span>
                                    <span>0.00F</span>
                                </p>
                                <p class="d-flex total-price">
		    						<span>Total</span>
		    						<span>{{ formatCurrency(cart.total) }}</span>
		    					</p>
                                <!-- Other total details like delivery, discount, and total price -->
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="cart-detail bg-light p-3 p-md-4">
                                <h3 class="billing-heading mb-4">Payment Method</h3>
                                <div class="form-group">
                                    <div class="col-md-12">
                                        <div class="radio" v-for="method in paymentMethods" :key="method.id">
                                            <label><input type="radio" name="paymentMethod" v-model="selectedPaymentMethod" :value="method.id"> {{ method.name }}</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="col-md-12">
                                        <div class="checkbox">
                                            <label><input type="checkbox" v-model="termsAccepted"> I have read and accept the terms and conditions</label>
                                        </div>
                                    </div>
                                </div>
                                <button type="submit" class="btn btn-primary py-3 px-4" :disabled="!termsAccepted">Place an order</button>
                            </div>
                        </div>
                    </div>
                </div> <!-- .col-md-8 -->
            </div>
        </div>
    </section> <!-- .section -->
</template>

<script>
export default {
    name: 'CheckoutPage',
    data() {
        return {
            billing: {
                prenom: '',
                nom: '',
                departement: '',
                adresse: '',
                telephone: '',
                email: '',
                password: ''
            },
            cart: {
                items: [],
                subtotal: 0,
                total: 0,
            },
            paymentMethods: [
                { id: 1, name: 'Cash on Delivery' },
                { id: 2, name: 'Mobile Payment' }
                // Add more payment methods as needed
            ],
            selectedPaymentMethod: null,
            termsAccepted: false,
            createAccount: false,
            isUserLoggedIn: false
        };
    },
    created() {
        this.loadCart();
        this.checkUser();
    },
    methods: {
    checkUser() {
        // Vérifiez si l'utilisateur est connecté
        const user = JSON.parse(localStorage.getItem('user'));
        console.log('User from localStorage:', user);
        if (user) {
            this.isUserLoggedIn = true;
            this.billing = {
                prenom: user.prenom || '',
                nom: user.nom || '',
                departement: user.departement ,
                adresse: user.adresse ,
                telephone: user.telephone ,
                email: user.email || '',
            };
        }
    },
    formatCurrency(value) {
        return `${value}F`;
    },
    loadCart() {
        const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
        const subtotal = cartItems.reduce((total, item) => total + (item.prix * item.quantity), 0).toFixed(2);
        const delivery = 3000; // Exemple de frais de livraison
        const total = (parseFloat(subtotal) + delivery).toFixed(2);

        this.cart.items = cartItems;
        this.cart.subtotal = subtotal;
        this.cart.total = total;
    },
    placeOrder() {
        if (!this.termsAccepted) {
            alert('Please accept the terms and conditions.');
            return;
        }
        if (!this.selectedPaymentMethod) {
            alert('Please select a payment method.');
            return;
        }

        const orderData = {
            date_commande: new Date().toISOString().split('T')[0], // or any other date format
            produits: this.cart.items.map(item => ({
                id: item.id,
                quantity: item.quantity
            })),
            prenom: this.billing.prenom,
            nom: this.billing.nom,
            departement: this.billing.departement,
            adresse: this.billing.adresse,
            telephone: this.billing.telephone,
            email: this.billing.email,
            // payment_method: this.selectedPaymentMethod
        };

        if (!this.isUserLoggedIn && this.createAccount) {
            orderData.password = this.billing.password;
            this.registerAndOrder(orderData);
        } else {
            this.sendOrder(orderData);
        }
    },
    sendOrder(orderData) {
        axios.post('http://127.0.0.1:8000/api/commandes', orderData, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('access_token')}`
            }
        })
        .then(response => {
            console.log('Order placed!', response.data);
            // Redirigez vers la confirmation de commande ou procédez à d'autres étapes
        })
        .catch(error => {
            console.error('Error placing order:', error);
            // Gérez les erreurs ici
        });
    },
    registerAndOrder(orderData) {
        axios.post('http://127.0.0.1:8000/api/register-and-order', orderData)
        .then(response => {
            console.log('User registered and order placed!', response.data);
            // Enregistrez le token et l'utilisateur dans le localStorage
            localStorage.setItem('access_token', response.data.token);
            localStorage.setItem('user', JSON.stringify(response.data.user));
            // Redirigez vers la confirmation de commande ou procédez à d'autres étapes
        })
        .catch(error => {
            console.error('Error registering and placing order:', error);
            // Gérez les erreurs ici
        });
    }
}

};
</script>
