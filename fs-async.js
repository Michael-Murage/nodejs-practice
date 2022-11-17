// 'fs' for file system
const { readFile, writeFile } = require('fs')

readFile('./content/subfolder/test.txt', 'utf8', (err, res) => {
	if(err){
		console.log(err);
		return
	}
	const test = res
	// console.log(test);
	readFile('./content/second.txt', 'utf8', (err, result)=>{
		if(err){
			console.log(err);
			return
		}
		const sult = result
		// console.log(sult);
		writeFile('./content/result-async.txt',
		 `\nNew line from test.txt - ${test}\n and ${sult}`,
		  (err, results)=>{
				if(err){
					console.log(err);
					return
				}
			})
	})
})