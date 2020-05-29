const express = require("express");
const burger = require("../models/burger");
const router = express.Router();

router.get("/", async (req, res) => {
    const data = await burger.selectAll();

    res.render("index", { burgers: data });
});

router.post("/api/burgers", async (req, res) => {
    const data = await burger.insertOne(req.body.burger_name);

    res.json({ id: data.insertId });
});

router.put("/api/burgers/:id", async(req, res)=>{
    const data = await burger.updateOne(req.params.id);

    res.json(data);
})


module.exports = router;