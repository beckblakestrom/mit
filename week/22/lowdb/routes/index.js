import { Router } from "express";
var router = Router();

/* GET home page. */
router.get("/", function (req, res, next) {
	res.render("index", { title: "Exprsss" });
});

router.get("/adduser", function (req, res, next) {
	res.render("adduser");
});

export default router;
