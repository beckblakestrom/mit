const express = require("express");
const app = express();
const low = require("lowdb");
const fs = require("lowdb/adapters/FileSync");
const adapter = new fs("db.json");
const db = low(adapter);

db.defaults({ users: {} }).write();
