require("dotenv").config();
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const express = require("express");
const cors = require("cors");

// Express configuration
const app = express();
app.use(cors({ origin: "*", methods: ["GET", "POST"] }));
app.use(express.json());

// Routes
const helloRoute = require("./routes/hello");
const loginRoute = require("./routes/login");
const addMembreRoute = require("./routes/addmembre");
const communeRoute = require("./routes/communes");
const culteRoute = require("./routes/cultes");
const membreRoute = require("./routes/membres");
const paysRoute = require("./routes/pays");
const pointageRoute = require("./routes/pointage");
const statsRoute = require("./routes/stats");
const villeRoute = require("./routes/villes");
const userRoute = require("./routes/user");

app.use("/", helloRoute);
app.use("/", loginRoute);
app.use("/", addMembreRoute);
app.use("/", communeRoute);
app.use("/", culteRoute);
app.use("/", membreRoute);
app.use("/", paysRoute);
app.use("/", pointageRoute);
app.use("/", statsRoute);
app.use("/", villeRoute);
app.use("/", userRoute);


// Swagger config
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Soulkeeper Express API with Swagger",
      version: "0.1.0",
      description:
        "This is a simple CRUD API application made with Express and documented with Swagger",
    },
    servers: [
      {
        url: "http://apimobile.bigdata-ci.com",
      },
    ],
  },
  apis: ["./routes/*.js"],
};

const specs = swaggerJsdoc(options);
app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(specs, { explorer: true }),
);

// Start server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`🚀 Server start at port ${port}`));
