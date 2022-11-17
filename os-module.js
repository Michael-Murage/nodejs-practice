const os = require('os')

// returns info about current user
console.log(os.userInfo());

// returns system uptime in seconds
console.log(`System has been up for ${os.uptime()} seconds`)


const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: `${os.totalmem()}`,
    freemem: os.freemem(),
}

console.log(typeof os)

console.log(os.networkInterfaces());