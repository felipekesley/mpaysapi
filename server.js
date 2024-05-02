// See https://github.com/typicode/json-server#module
const jsonServer = require("json-server");
const auth = require("json-server-auth");
const server = jsonServer.create();
const router = jsonServer.router("db.json");

const rules = auth.rewriter({
  users: 600,
  posts: 600,
  "/posts/:category": "/posts?category=:category",
});

server.use(rules);
server.use(auth);
server.use(router);
server.listen(3008, () => {
  console.log("JSON Server is running");
});

// Export the Server API
module.exports = server;
