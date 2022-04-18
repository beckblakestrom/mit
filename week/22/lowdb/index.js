import express from "express";
import { join, dirname } from "path";
import { Low, JSONFile } from "lowdb";
import { fileURLToPath } from "url";

import path from "path";

import router from "./routes/index.js";

const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));

// Use JSON file for storage
const file = join(__dirname, "db.json");
const adapter = new JSONFile(file);
const db = new Low(adapter);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(express.static(path.join(__dirname, "public")));

// Read data from JSON file, this will set db.data content
await db.read();

// If file.json doesn't exist, db.data will be null
// Set default data
db.data ||= { users: [] };
// db.data = db.data || { posts: [] } // for node < v15.x

// writing user
// app.post("/add", function (req, res) {
// 	var user = {
// 		name: req.body.name,
// 		dob: req.body.dob,
// 		email: req.body.email,
// 		username: req.body.username,
// 		password: req.body.password,
// 		phone: req.body.phone,
// 		address: req.body.address,
// 		zip: req.body.zip,
// 		lat: req.body.lat,
// 		long: req.body.long,
// 		avatar: req.body.avatar,
// 	};
// 	db.get("users").push(user).write();
// 	res.send(db.db.data.users);
// });

// Create and query items using plain JS
// db.data.users.push({});
// db.data.posts[0];

// // You can also use this syntax if you prefer
console.log(db.data);
const { users } = db.data;
users.push({ name: "Blake", zip: 29150 });

// // Write db.data content to db.json
await db.write();

app.use("/", router);

app.get("/home", function (req, res) {
	res.send(db.data.users);
});

app.post("/test", function (req, res) {
	console.log("test");
	res.send(req);
});

app.listen(3000, function () {
	console.log("Running on port 3000");
});
