// Express
const express = require("express")("development");

// Middleware
const morgan = require("morgan");
const cors = require("cors");
const helmet = require("helmet");

// Router Imports
const appointmentsRouter = require("./endpoints/appointments/appointments-router.js");
const holdsRouter = require("./endpoints/holds/holds-router");
const problemsRouter = require("./endpoints/problems/problems-router");
const sendsRouter = require("./endpoints/sends/sends-router");
const usersRouter = require("./endpoints/users/users-router");

// Server
const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());
server.use(morgan('tiny'));

// Router calls
server.use("/api/appointments", appointmentsRouter);
server.use("/api/holds", holdsRouter);
server.use("/api/problems", problemsRouter)
server.use("/api/sends", sendsRouter)
server.use("/api/users", usersRouter)

// API home page tester
server.get("/", (req, res) => {
  res.status(200).json({ message: "Let's send!" })
})

module.exports = server;

