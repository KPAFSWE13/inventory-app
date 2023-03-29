const express = require("express");
const router = express.Router();
const { User } = require("../models");

//Server side valiation
const {check, validationResult} = require("express-validator");

// GET all users
router.get("/", async (req, res, next) => {
  try {
    const users = await User.findAll();
    res.send(users);
  } catch (error) {
    next(error);
  }
});

//GET individual user

router.get("/:id", async (req, res, next) => {
    try {
        const user = await User.findByPk(req.params.id);
        res.json(user);
    } catch(error) {
        next(error);
    }
});

//Post for creating a new user
router.use(express.urlencoded({ extended: true }));

router.post("/", [check("username", "not empty or white spaces").not().isEmpty().trim(), check("password", "not empty or white spaces").not().isEmpty().trim(), check("password", "Password between 4 & 30").isLength({min: 4, max: 30})], async (req, res, next) => { 
    try {
        const errors = validationResult(req);
        if(!errors.isEmpty()) {
            res.json({ error: errors.array()})
        } else {
            const newUser = await User.create(req.body);
            res.json(newUser);
        }
        
    } catch(error) {
        next(error);
    }
    
})


module.exports = router;
