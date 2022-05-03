import Accueil from '../page/Accueil.vue'
import Add from '../page/Add.vue'
import View from '../page/View.vue'
import Edit from '../page/Edit.vue'
import Delete from '../page/Delete.vue'
import { createRouter, createWebHistory } from 'vue-router'
const routes = [
    { path: '/', name: 'Accueil', component: Accueil },
    { path: '/add', name: 'Add', component: Add },
    { path: '/view/:number', name: 'View', component: View },
    { path: '/edit/:number', name: 'Edit', component: Edit },
    { path: '/delete/:number', name: 'Delete', component: Delete },
]

export const router = createRouter({
    history: createWebHistory(),
    routes
})
