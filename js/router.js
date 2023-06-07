export class Router {
   routes = {}

   add(routeName, page) {
      this.routes[routeName] = page
   }

   route(event) {
      event = event || window.event
      event.preventDefault()
   
      window.history.pushState({}, "", event.target.href)
   
      this.handle()
   }
   
   handle() {
      // Desestrurando o location para pegar apenas o seu pathname
      const { pathname } = window.location
   
      // Pegando a rota da página
      const route = this.routes[pathname] || this.routes[404]
   
      // fazendo a function assincrona para fazer minha promisse
      fetch(route)
      .then((data) => data.text())
      .then(html => {
         document.querySelector('#app').innerHTML = html
      })
   }

}

