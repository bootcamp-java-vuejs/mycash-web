import { createRouter, createWebHistory } from 'vue-router'
import Lancamentos from '../views/lancamentos/Lancamentos.vue'
import AlterarSenha from '../views/alterarsenha/AlterarSenha.vue'
import Usuarios from '../views/usuarios/Usuarios.vue'

const routes = [
  {
    path: '/',
    name: 'Lancamentos',
    component: Lancamentos
  },
  {
    path: '/alterarsenha',
    name: 'AlterarSenha',
    component: AlterarSenha
  },
  {
    path: '/usuarios',
    name: 'Usuarios',
    component: Usuarios
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
