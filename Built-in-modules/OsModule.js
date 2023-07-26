const osmodule = require('os')
//info about current user
// const user = osmodule.userInfo()
// console.log(user)
//method returns the system uptime in seconds
// console.log(`the system uptime is ${osmodule.uptime()} seconds`)


//system configuration
const currentOS = {
    name:osmodule.type(),
    release:osmodule.release(),
    version:osmodule.version(),
    totalMem:osmodule.totalmem(),
    freeMem:osmodule.freemem(),
    cpus:osmodule.cpus().length,
    homeDir:osmodule.homedir(),
    tmpDir:osmodule.tmpdir(),
    hostname:osmodule.hostname(),
    machine:osmodule.machine(),
    platform:osmodule.platform(),
    arch:osmodule.arch(),
    endianness:osmodule.endianness(),
    
}
console.log(currentOS)