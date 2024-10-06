import { createServer } from "http";

const server = createServer((req, res) => {
  res.write("Hello world!");
  res.end();
});

server.listen(5000, () => {
  console.log("Server listening on port 5000........");
});
