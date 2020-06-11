// Express
const express = require("express");

// Middleware
const morgan = require("morgan");
const cors = require("cors");
const helmet = require("helmet");

// Server
const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());
server.use(morgan());

// Routes
// ex. server.use("/api/monthly_costs", monthlyRouter);

