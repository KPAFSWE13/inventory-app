const express = require('express');
const router = express.Router();
const { Item } = require("../models");

//Server side valiation
const {check, validationResult} = require("express-validator");

//Tier 1 routes

// GET /sauce
router.get("/", async (req, res, next) => {
    try {
      const items = await Item.findAll();
      res.send(items);
    } catch (error) {
      next(error);
    }
});

//GET an individual item

router.get("/:id", async (req, res, next) => {
    try {
        const item = await Item.findByPk(req.params.id);
        res.json(item);
    } catch(error) {
        next(error);
    }
});
  
//Tier 2 Routes 

//Post for a new item
router.use(express.urlencoded({ extended: true }));

router.post("/", [check("title", "not empty or white spaces").not().isEmpty().trim(), check("price", "not empty or white spaces").not().isEmpty().trim(), check("description", "not empty or white spaces").not().isEmpty().trim(), check("category", "not empty or white space").not().isEmpty().trim(), check("image", "not empty").not().isEmpty().trim()], async (req, res, next) => { 
    try {
        const errors = validationResult(req);
        if(!errors.isEmpty()) {
            res.json({ error: errors.array()})
        } else {
            const newItem = await Item.create(req.body);
            res.json(newItem);
        }
        
    } catch(error) {
        next(error);
    }
    
})

//Tier 3 Routes
//Deleting items
router.delete("/:id", async (req, res, next) => {
    try{
        const deletedItem = await Item.destroy({
            where: {
                id: req.params.id
            }
        })
        res.json(Item);
    } catch(error) {
        next(error);
    }
});

//Tier 4 routes
//Edit Item
router.put("/:id", async (req, res, next) => {
    try{
        const updatedItem = req.body;
        await Item.update(
            {title: updatedItem.title, price: updatedItem.price, description: updatedItem.description, category: updatedItem.category, image: updatedItem.image},
            {where: {id: req.params.id}}
        )
        const item = await Item.findByPk(req.params.id);
        res.json(item);
    } catch(error) {
        next(error);
    }
})

module.exports = router;