const http = require('http');

const server = http.createServer((req, res) => {
  // Set the headers before sending any data
//   res.setHeader('Content-Type', 'text/plain');

//   // Send the response data
//   res.write('Hello, world!');
  
//   // End the response
//   res.end();

const url = req.url    
  if(url === '/home'){
    res.setHeader('Content-Type','home/html')
    res.write('<html>')
    res.write('<head><title>My First Page</title></head>')
    res.write('<body><h1>Welcome Home</h></body>')
    res.write('</html>')
    return res.end();

}

if(url === 'about'){
    res.setHeader('Content-Type','about/html')
    res.write('<html>')
    res.write('<head><title>My First Page</title></head>')
    res.write('<body><h1>Welcome to About Us page</h></body>')
    res.write('</html>')
    return res.end();

}

if(url === '/node'){
    res.setHeader('Content-Type','node/html')
    res.write('<html>')
    res.write('<head><title>My First Page</title></head>')
    res.write('<body><h1>Welcome to my Node Js project</h></body>')
    res.write('</html>')
    return res.end();
}

// Default response for unknown URLs
res.setHeader('Content-Type', 'text/html');
res.write('<html>');
res.write('<head><title>Not Found</title></head>');
res.write('<body><h1>404 - Not Found</h1></body>');
res.write('</html>');
res.end();


});

server.listen(3000, () => {
  console.log('Server listening on port 300');
});
