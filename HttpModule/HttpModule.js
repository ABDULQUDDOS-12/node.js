const http = require('http')
const server = http.createServer((req,res)=>{
  if(req.url==='/'){
    res.end("Welcome to our home page")  
  }
  // console.log(req)
  // res.write('Welcome to our home page')
  // res.end() 
  if(req.url==='/about'){
    res.end("Here is the about page")
  }
  res.end(`<h1>Ooops!</h1>
  <p>We can't seem to find the page you are looking for</p>
  <a href="/">back home</a>`)

})
server.listen(5000) //port number