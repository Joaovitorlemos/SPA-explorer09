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

// Adicionando na window o route como uma função para poder disparar a função do route().
// Porque quando coloquei os dados dentro do index.js ele não está conseguindo ler o evento de click(onclick) que eu coloquei no HTML
// para retornar minha função de callback.
// Posso colocar o route() como uma função que vai disparar a função do route()
window.route = () => router.route()
