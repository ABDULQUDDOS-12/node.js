const {readFileSync,writeFileSync} = require('fs')
const first = readFileSync('../content/first.txt','utf8')
const second = readFileSync('../content/second.txt','utf8')
console.log(first,second)

//if the file is already created then it will be ok otherwise it will create a file for you
