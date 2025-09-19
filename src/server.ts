import http from "node:http";

const server = http.createServer({ keepAliveTimeout: 60000 }, (req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(
    JSON.stringify({
      data: "Hello World!",
    })
  );
});

server.listen(8000);

// setTimeout(() => {
//   server.close(() => {
//     console.log('server on port 8000 closed successfully');
//   });
// }, 10000); copy
