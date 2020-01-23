const express = require('express')

const recipe = require('./recipe-modal')

const router = express.Router();


router.get('/', (req, res) => {
    recipe.getRecipes()
    .then( recipes => {
        res.status(201).json(recipes)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({message: "sorry "})
    })
})

router.get('/:id/shoppinglist', (req, res) => {
    recipe.getShoppingList(req.params.id)
    .then(result => {
        res.status(201).json(result)
    })
    .catch(err => {
        res.status(500).json({message: "sorry"})
    })
})

router.get('/:id/directions' , (req, res) => {
    recipe.getInstructions(req.params.id)
    .then(result => {
        res.status(201).json(result)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({message: "sorry"})
    })
})


module.exports= router;