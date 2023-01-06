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
app.use("/login", loginRoute);
app.use("/add-membre", addMembreRoute);
app.use("/commune", communeRoute);
app.use("/cultes", culteRoute);
app.use("/membres", membreRoute);
app.use("/pays", paysRoute);
app.use("/add-pointage", pointageRoute);
app.use("/stats", statsRoute);
app.use("/villes", villeRoute);
app.use("/user/:username", userRoute);


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
        url: "http://localhost:3000",
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
