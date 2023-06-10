export class Router {
   routes = {}

   // add() serve para adicionar a propriedade(routeName) e o valor(link) do meu objeto modelado para acessar minhas rotas
   add(routeName, page) {
      this.routes[routeName] = page
   }

   route(event) {
      event = event || window.event
      event.preventDefault()
   
      // Pegar no histórico do window a url para meu pathname 
      window.history.pushState({}, "", event.target.href)
   
      this.handle()
   }
   
   handle() {
      // Desestrurando o location para pegar apenas o seu pathname
      const { pathname } = window.location
   
      // Pegando a rota da página
      const route = this.routes[pathname] || this.routes[404]
   
      // fazendo a function assincrona para fazer minha promisse
      // 1. fetch() = vai buscar está rota | then() = quando concluir, execute essa função
      // 2. text() = retorna os dados em forma de texto
      // O primeiro then() pega os dados e transforma em texto, e no segundo then() pega o texto e transforma em HTML
      fetch(route)
      .then((data) => data.text())
      .then(html => {
         document.querySelector('#app').innerHTML = html
      })
   }

}

