const express = require('express')
const app = express()
let people  = require('./data')

// app.use(express.static('./methods-public'))

app.get('/api/people', (req, res) => {
    res.status(200).json({ success: true, people })
})

app.listen(5000, () => {
    console.log(people)
    console.log('Server listening on port 5000....')
})
