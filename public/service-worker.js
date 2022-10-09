const verssao = 9

//criar uma avriavel global para poder atualizar o css
let arquivos = [
"/",
]

self.addEventListener("install", function(){
	console.log("Instalou");	
})

/*
	TO::DO
'	Validar ser tem veção nova - verificar a const
	Validar se tem conteudo novo na aplicação - 
		criar uma variavel que verifique isso e atualize so memnte o conteudo novo e fazer as validações
	Web SQL 
	IndexDP
*/
self.addEventListener("activate", function(){
	caches.open("ceep-arquivos-" + verssao ).then(cache => {
		cache.addAll(arquivos).then(cache => {
			caches.delete("ceep-arquivos-"+ ( verssao - 1 ) )
			caches.delete("ceep-arquivos")
		})
	})
})

caches.open('ceep-arquivos').then(cache =>{
	cache.addAll(arquivos);
})

self.addEventListener('fetch', function(event){

	let pedido = event.request
	let promiseResposta = caches.match(pedido).then(respostaCache => {
		let resposta = respostaCache ? respostaCache : fetch(pedido)
		return resposta
	})

	event.respondWith(promiseResposta)
})