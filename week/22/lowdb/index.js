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

// Create and query items using plain JS
// db.data.users.push({});
// db.data.posts[0];

// // You can also use this syntax if you prefer
const { users } = db.data;
// users.push({ name: "Blake", zip: 29150 });

app.post("/adduser", function (req, res) {
	var user = {
		name: req.body.name,
		zip: req.body.zip,
	};
	users.push(user).write();
	res.send(db.data);
});

// // Write db.data content to db.json
await db.write();

app.use("/", router);

// GET method route
// app.get("/", (req, res) => {
// 	res.send("GET request to the homepage");
// });

// POST method route
// app.post("/", (req, res) => {
// 	res.send("POST request to the homepage");
// 	users.push({ name: "Thom", zip: 55678 }).write();
// });

app.listen(3000, function () {
	console.log("Running on port 3000");
});
