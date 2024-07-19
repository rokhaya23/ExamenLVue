import { createRouter, createWebHistory } from 'vue-router'
import IndexPage from "../components/IndexPage.vue";
import ProductPage from "../components/ProductPage.vue";
import ProductDetailsPage from "../components/ProductDetailsPage.vue";
import ContactPage from "../components/ContactPage.vue";
import LoginPage from "../components/LoginPage.vue";
import InscrirePage from "../components/InscrirePage.vue";
import CartPage from "../components/CartPage.vue";
import CheckoutPage from "../components/CheckoutPage.vue";
import ListeCommandePage from "../components/ListeCommandePage.vue";
import ValidatedCommandePage from "../components/ValidatedCommandePage.vue";

const routes = [
    {
        path: '/',
        component: IndexPage,
        name: 'home'
    },
    {
        path: '/produits',
        component: ProductPage,
        name: 'produits'
    },
    {
        path: '/produitsdetail/:id',
        component: ProductDetailsPage,
        name: 'produitsdetail'
    },
    {
        path: '/contact',
        component: ContactPage,
        name: 'contact'
    },
    {
        path: '/login',
        component: LoginPage,
        name: 'login'
    },
    {
        path: '/inscrire',
        component: InscrirePage,
        name: 'inscrire'
    },
    {
        path: '/cart',
        component: CartPage,
        name: 'cart'
    },
    {
        path: '/checkout',
        component: CheckoutPage,
        name: 'checkout'
    },
    {
        path: '/listecommande',
        component: ListeCommandePage,
        name: 'listecommande',
        // meta: {requiresAuth: true}
    },
    {
        path: '/validercommande',
        component: ValidatedCommandePage,
        name: 'validercommande',
        // meta: {requiresAuth: true}
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

router.beforeEach((to, from, next) => {
    const loggedIn = !!localStorage.getItem('access_token');

    if (to.matched.some(record => record.meta.requiresAuth) && !loggedIn) {
        next('/login');
    } else {
        next();
    }
});

export default router
