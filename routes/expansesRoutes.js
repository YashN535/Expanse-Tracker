const express = require("express");
const Expanse = require("../models/Expanses");
const router = express.Router();

//Add Expanses

router.post("/add", async (req, res) => {
  try {
    const { description, category, amount, date } = req.body;
    const expanse = new Expanse({ description, category, amount, date });
    await expanse.save();
    res.json({ Message: "Expanse added successfully", expanse });
  } catch (error) {
    res.json({ Message: error.message });
  }
});

//Get All Expanses

router.get("/", async (req, res) => {
  try {
    const expanses = await Expanse.find();
    res.json(expanses);
  } catch (error) {
    res.json({ Message: error.message });
  }
});

//Update Expanses By ID

router.put("/add/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updatedExpanse = await Expanse.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json(updatedExpanse);
  } catch (error) {
    res.json({ Message: error.message });
  }
});

//Delete Expanses By ID

router.delete("/add/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await Expanse.findByIdAndDelete(id);
    res.json({ Message: "Expanse Deleted" });
  } catch (error) {
    res.json({ Message: error.message });
  }
});

module.exports = router;
