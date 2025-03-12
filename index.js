/* eslint-disable no-undef */
const jsonServer = require("json-server"); // importing json-server library
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 8080; //  chose port from here like 8080, 3001

server.use(middlewares);
server.use(router);

server.listen(port);


// mongodb+srv://PalashArunNandanwar:<db_password>@chatcluster1.hvxzp.mongodb.net/?retryWrites=true&w=majority&appName=ChatCluster1

// jL4ydmu8z7hD9qeq  -----  arunpalash1
