var low = require("lowdb");
var fs = require("lowdb/adapters/FileSync");
var adapter = new fs("db.json");
var db = low(adapter);

// init the data store
// ---------------------------
db.defaults({ posts: [] }).write();

// db.get("posts")
// 	.push({ id: 3, title: "Young diggity", published: true })
// 	.write();

// count posts

// find all posts ids
console.log(db.get("posts").find({ published: true }).value());

// all matches of published false
// ----------------------------
// YOUR CODE

// find post with published false
// ----------------------------
// YOUR CODE
