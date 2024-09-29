const express = require("express");
const app = express();
const db = require("./db");
require("dotenv").config();
const passport = require("./auth");
const cors = require("cors");

const bodyParser = require("body-parser");
app.use(bodyParser.json());
const PORT = process.env.PORT || 3000;

const corsOptions = {
    origin: "http://localhost:5173",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
};
app.use(cors(corsOptions));

app.use(passport.initialize());
const localAuthMiddleware = passport.authenticate("local", { session: false });

app.get("/", localAuthMiddleware, function (req, res) {
    res.send("Hello World");
});

const personRoutes = require("./routes/personRoutes");
const applicationRoutes = require("./routes/applicationRoutes");

app.use("/person", personRoutes);
app.use("/application", applicationRoutes);

app.listen(PORT, () => {
    console.log("Server is running on port 3000");
});
