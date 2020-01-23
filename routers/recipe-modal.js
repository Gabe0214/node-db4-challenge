const db = require('../data/db')


module.exports = {

getRecipes,
getShoppingList,
getInstructions

}


function getRecipes(){
    return db('recipe').select('*')
}

function getShoppingList(recipe_id){
    return db('ingridients as i').join('recipe_ingridients as ri', 'i.id', 'ri.ingridients_id').join('recipe as r' ,'r.id', 'ri.recipe_id').select('i.ingridient_name', 'ri.quantity' ,'r.name',
    'ri.id').where('r.id', recipe_id ).orderBy('r.name')
}

function getInstructions(recipe_id){
    return db('recipe as r').select('r.id','r.name', 'r.directions').where('r.id', recipe_id)
}