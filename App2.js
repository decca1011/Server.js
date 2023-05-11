const http = require ('http');
 
const server = http.createServer((req,res)=>{
     const url = req.url;
    // const method = req.method;

    //console.log(req.url, req.method, req.headers);
    
    if(url == '/home'){
        res.setHeader('Content-Type','home/html')
        res.write('<html>')
        res.write('<head><title>My First Page</title><head>')
        res.write('<body><h1>Welcome Home</h></body>')
        res.write('</html>')
         res.end();
    
    }
    
    if(url == '/about'){
        res.setHeader('Content-Type','about/html')
        res.write('<html>')
        res.write('<head><title>My First Page</title><head>')
        res.write('<body><h1>Welcome to About Us page</h></body>')
        res.write('</html>')
        return res.end();
    
    }
    
    if(url == '/node'){
        res.setHeader('Content-Type','node/html')
        res.write('<html>')
        res.write('<head><title>My First Page</title><head>')
        res.write('<body><h1>Welcome to my Node Js project</h></body>')
        res.write('</html>')
        return res.end();
    }

  else{
    // Default response for unknown URLs
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>Not Found</title></head>');
  res.write('<body><h1>404 - Not Found</h1></body>');
  res.write('</html>');
  res.end();
  }     
})

server.listen(2000, ()=> {
    console.log('server listening on port 2000', http)
   // console.log(url)

});   