const express = require('express')
const router = express.Router()

router.use((req, res, next)=>{
	console.log('Welcome');
	next()
})
router.get('/signup', (req,res)=>{
	const str = [{
		name: "Steph"
	}]
	res.json(str)
})

module.exports = router