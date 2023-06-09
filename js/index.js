import { Router } from "./router.js"

const router = new Router()
router.add("/", "/pages/home.html")
router.add("/about", "/pages/about.html")
router.add("/contact", "/pages/contact.html")
router.add(404, "/pages/404.html")

// Para já iniciar o projeto na página Home
router.handle()

// Para poder navegar pelas rotas nas setinhas do navegador
window.onpopstate = () => router.handle()

window.route = () => router.route()
