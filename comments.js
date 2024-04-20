// Create web server

// <html>
//   <head>
//     <title>Comments</title>
//   </head>
//   <body>
//     <h1>Comments</h1>
//     <section id="comments">
//       <ul id="comment-list">
//         <li>Comment 1</li>
//         <li>Comment 2</li>
//         <li>Comment 3</li>
//       </ul>
//     </section>
//   </body>
// </html>
// The comments.html file should be served with the following content type: text/html.
// The server should serve the comments.html file when the user navigates to http://localhost:3000.

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  fs.createReadStream('./comments.html').pipe(res);
});

server.listen(3000);
console.log('Server listening on port 3000');