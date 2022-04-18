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
db.data ||= { posts: [] };
// db.data = db.data || { posts: [] } // for node < v15.x

// Create and query items using plain JS
db.data.posts.push("hello world");
db.data.posts[0];

// You can also use this syntax if you prefer
const { posts } = db.data;
posts.push("hello world");

// Write db.data content to db.json
await db.write();

app.get("/", function (req, res) {
	res.send(db.data.posts);
});

app.use("/home", router);

app.post("/test", function (req, res) {
	console.log("test");
	res.send(req);
});

app.listen(3000, function () {
	console.log("Running on port 3000");
});
