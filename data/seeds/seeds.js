
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipe_ingridients').truncate()
  .then(() => knex('ingridients').truncate())
  .then(() => knex('recipe').truncate())
    .then(function () {
      // Inserts seed entries
      return knex('recipe').insert([
        {id: 1, 
        name: 'Tasty Buckwheat Pancakes',
        directions: '1) In a large bowl, stir together wheat flour, buckwheat flour, all-purpose flour, oats, and baking powder. Stir in milk, oil, honey, and egg. 2) Heat a lightly oiled griddle or frying pan over medium heat. Pour or scoop the batter onto the griddle, using approximately 1/4 cup for each pancake. Brown on both sides, and serve hot. '

      
      },
        {
          id: 2, 
          name: 'Sweet Corn Cake',
          directions: '1) In a medium bowl beat butter until it is creamy. Add the Mexican corn flour and water and beat until well mixed. 2)Using a food processor, process thawed corn, but leave chunky. Stir into the butter mixture. 3) In a separate bowl, mix cornmeal, sugar, cream, salt, and baking powder. Add to corn flour mixture and stir to combine. Pour batter into an ungreased 8x8 inch baking pan. Smooth batter and cover with aluminum foil. Place pan into a 9x13 inch baking dish that is filled a third of the way with water. 4) Bake in a preheated 350 degree oven F (175 degrees C) oven for 50 to 60 minutes. Allow to cool for 10 minutes. Use an ice cream scoop for easy removal from pan. '
        },
        {
          id: 3, 
          name: 'Restaurant-Style Taco Meat Seasoning',
          directions: '1) In a medium bowl, combine the corn flour, chili powder, onion powder, garlic powder, and seasoned salt. Stir in the paprika, cumin, garlic salt, and sugar. Blend in the onion, bouillon, and ground red pepper, stirring until all spices are well blended. 2) Crumble the ground chuck into a large skillet over medium heat. Cook, stirring, until browned. Remove from heat, rinse meat with hot water, and drain water and grease from beef. 3) Return meat to skillet, and pour in seasoning. Stir in water. Reduce heat to medium-low, and simmer until most of the liquid has cooked away, about 20 minutes. '
        }
      ]);
    })
    .then(() => {
      return knex('ingridients').insert([
        { id: 1, ingridient_name: 'whole wheat flour',type:'cup'},
        { id:2, ingridient_name: 'buckwheat flour', type:'cup'},
        { id: 3,
          ingridient_name: 'all-purpose flour', type: 'cup'
        },
        { id: 4, ingridient_name: 'quick cooking oats', type: 'cup'},
        {id: 5, ingridient_name: 'baking powder', type:'teaspoons'},
        {id: 6, ingridient_name: 'skim milk', type: 'cup'},
        {id: 7, ingridient_name: 'saffflower oil', type: 'tablespoons'},
        {id: 8, ingridient_name: 'honey', type:'tablespoons' },
        {id: 9, ingridient_name: 'egg', type:'single'},
        {id: 10, ingridient_name: 'water', type:'cup'},
        {id: 11, ingridient_name: 'masa harina', type: 'cup'},
        {id: 12, ingridient_name: 'kernel-corn', type:'cup'},
        {id: 13, ingridient_name: 'salt', type:'teaspoons'},
       {id: 14, ingridient_name: 'white sugar', type: 'cup'},
       {id: 15, ingridient_name: 'corn flour', type: 'tablespoons'},
       {id: 16, ingridient_name: 'chili powder', type: 'teaspoon'},
       {id: 17, ingridient_name: 'onion powder', type: 'teaspoon'},
       {id: 18, ingridient_name: 'garlic powder', type: 'teaspoon'},
       {id: 19, ingridient_name: 'paparika', type: 'teaspoon'},
       {id: 20, ingridient_name: 'cumin', type: 'teaspoon'},
       {id: 21, ingridient_name: 'garlic salt', type: 'teaspoon'},
       {id: 22, ingridient_name: 'minced onion', type: 'teaspoon'},
       {id: 23, ingridient_name: 'ground red pepper', type: 'teaspoon'},
       {id: 24, ingridient_name: 'lean beef chuck', type: 'pounds'},
      ])
    })
    .then(() => {
       return knex('recipe_ingridients').insert([
         {id: 1, recipe_id: 1, ingridients_id: 1,  quantity: '1/2'  },
         {id: 2, recipe_id: 1, ingridients_id: 2, quantity: '1/4'  },
         {id: 3, recipe_id: 1, ingridients_id: 3,quantity: '1/4'  },
         {id: 4, recipe_id: 1, ingridients_id: 4, quantity: '1/4'  },
         {id: 5, recipe_id: 1, ingridients_id: 5, quantity: '3'  },
         {id: 6, recipe_id: 1, ingridients_id: 6, quantity: '1'  },
         {id: 7, recipe_id: 1, ingridients_id: 7, quantity: '3'  },
         {id: 8, recipe_id: 1, ingridients_id: 8, quantity: '2'  },
         {id: 9, recipe_id: 1, ingridients_id: 9, quantity: '1'  },
         // end of pancakes
         { id: 10, recipe_id: 2, ingridients_id: 10,quantity: '1/4'}, 
         { id: 11, recipe_id: 2, ingridients_id: 11,quantity: '1/3'},
         { id: 12, recipe_id: 2, ingridients_id: 12,quantity: '1 1/2'},  
         { id: 13, recipe_id: 2, ingridients_id: 13,quantity: '1/4'}, 
         { id: 14, recipe_id: 2, ingridients_id: 14,quantity: '1/3'}, 
         { id: 15, recipe_id: 2, ingridients_id: 5,quantity: '1/2'}, 
         // end of korn bread
         { id: 16, recipe_id: 3, ingridients_id: 15,quantity: '1 1/2'}, 
         { id: 17, recipe_id: 3, ingridients_id: 16,quantity: '4 1/2'}, 
         { id: 18, recipe_id: 3, ingridients_id: 17,quantity: '1/2'}, 
         { id: 19, recipe_id: 3, ingridients_id: 18,quantity: '1/2'}, 
         { id: 20, recipe_id: 3, ingridients_id: 19,quantity: '1/2'},
         { id: 21, recipe_id: 3, ingridients_id: 20,quantity: '1/4'}, 
         { id: 22, recipe_id: 3, ingridients_id: 21,quantity: '1/2'},  
         { id: 23, recipe_id: 3, ingridients_id: 22,quantity: '1'}, 
         { id: 24, recipe_id: 3, ingridients_id: 23,quantity: '1/4'},
         { id: 25, recipe_id: 3, ingridients_id: 24,quantity: '1 1/3'},  
         { id: 26, recipe_id: 3, ingridients_id: 10,quantity: '1'}, 
         { id: 27, recipe_id: 3, ingridients_id: 14,quantity: '0.00521'}, 
       ])
    })
};
