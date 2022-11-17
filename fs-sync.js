// 'fs' for file system
const { readFileSync, writeFileSync } = require('fs')

const first = readFileSync('./content/first.txt')
console.log(first);

// writeFileSync('./content/second.txt', `The resultant is: ${first}`)
writeFileSync('./content/second.txt', `The result is - ${first}`, {flag: 'a'})