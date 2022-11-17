const express = require('express')
const app = express()
const route = require('./express-routing')

app.use('/', route)
// console.log(route);


// app.get('/signup', (req, res)=> {
// 	con
// 	res.send(
// 	`<h1>signup form</h1>`
// )
// })

port = 4000
app.listen(port, ()=> console.log(`Port is running on ${port}`))
