const http = require("http");
const port = 3000;
// console.log("hello");

http
  .createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text.html");
    res.write("hello world");
    res.write("<h1>Hello Everyone</h1>");
    res.end();
  })
  .listen(port, () => {
    console.log(`Server running  ${port}`);
  });
