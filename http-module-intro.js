const http = require('http');

const server = http.createServer((req, res)=>{
	if(req.url == '/about'){
		res.end('Short story')
	}else if(req.url == '/'){
		res.end('Welcome to the home page')
	}else{
		res.end(`
		<h1>Oops</h1>

		We couldn't find the page you are looking for<br/>
		<a href='/'>Back home</a>
		`)
	}
})

server.listen(5000)