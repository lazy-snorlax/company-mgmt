import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'
import authenticated from './guards/authenticated'
// import authorized from './guards/authorized'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    ...routes,
  ]
})


// Bind the authenticated and authorized guards to ensure users are logged in and have the correct permission.
authenticated(router)

/** Check the abilites of the user */
// authorized(router)

// Bind the other middleware to handle things such as account verification and two factor.
// middleware(router)

export default router
