require("dotenv").config();
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

// Start server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`🚀 Server start at port ${port}`));
