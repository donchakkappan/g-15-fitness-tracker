const express = require("express");
const connection = require("./confgs/db");
//const GoogleRouter = require("./router/google.auth");

var path = require('path');
var oas3Tools = require('oas3-tools');
// swaggerRouter configuration
var options = {
    routing: {
        controllers: path.join(__dirname, './controllers')
    },
};

var expressAppConfig = oas3Tools.expressAppConfig(path.join(__dirname, 'api/openapi.yaml'), options);
var app = expressAppConfig.getApp();
//const app = express();
//const passport = require("./confgs/google");
const cookieSession = require("cookie-session");
const cors = require("cors");
const UserModel = require("./models/usermodel");
const { postRouter } = require("./router/post.router");

//=============> ENV VARIABLES
require("dotenv").config();
const PORT = 5000;

//=============> MIDDLEWARES

app.use(cors());
app.use(express.json());

//=============> Testing endpoint
app.get("/getuser", async (req, res) => {
	let userId = req.query.userID;
	try {
		let data = await UserModel.findById(userId);
		res.send(data);
	} catch (error) {
		res.send(error);
	}
});
app.get("/", (req, res) => res.send({ Message: "Welcome to fitfusion" }));

app.use("/posts", postRouter);

//=============> ROUTES

// app.use(
// 	cookieSession({
// 		name: "google-auth-session",
// 		keys: ["key1", "key2"],
// 	})
// );

// app.use(passport.initialize());
// app.use(passport.session());

//=============> Testing endpoint
// app.get('/', (req, res) => res.send({ Message: "Welcome to ALS-Backend Server" }))

//=============> ROUTES

//app.use("/auth", GoogleRouter);

//=============> CONNECTION
app.listen(PORT, async () => {
	try {
		await connection;
		console.log(`runnin server a http://localhost:${PORT}`);
	} catch (error) {
		console.log({ error: error.message });
	}
});
