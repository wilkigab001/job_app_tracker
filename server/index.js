require("dotenv").config();
const express = require("express");
const cors = require("cors");

const { SERVER_PORT } = process.env;
const { User } = require("./models/User");
const { Application } = require("./models/Application");

const {isAuthenticated} = require("./middleware/isAuthenticated");
const {login, register} = require("./controllers/auth")
const {
    getApps, deleteApp, editApp, createApp
} = require("./controllers/apps")

const app = express();
const { sequelize } = require("./util/Database");
app.use(cors());
app.use(express.json());

User.hasMany(Application);
Application.belongsTo(User);

app.post("/register", register)
app.post('/login', login)

app.post('/adding/:userId', isAuthenticated, createApp)
app.get("/applications/:userId", getApps)
app.delete('/application/:id',isAuthenticated, deleteApp)
app.delete('/application/:id',isAuthenticated, editApp)

sequelize
  .sync()
  .then(() => {
    app.listen(SERVER_PORT, () => {
      console.log("listening on port " + SERVER_PORT);
    });
  })
  .catch((err) => console.log(err));
