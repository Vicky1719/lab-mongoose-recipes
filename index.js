const mongoose = require('mongoose');

// Import of the model Recipe from './models/Recipe.model.js'
const Recipe = require('./models/Recipe.model');
// Import of the data from './data.json'
const data = require('./data');

const MONGODB_URI = 'mongodb://localhost:27017/recipe-app';

// Connection to the database "recipe-app"
mongoose
  .connect(MONGODB_URI)
  .then(x => {
    console.log(`Connected to the database: "${x.connection.name}"`)})
    
    // Before adding any recipes to the database, let's remove all existing ones
    
    /* iteracion 2
    
   return Recipe.create({
      title: "Tortilla Española",
      level: "Easy Peasy",
      ingredients: [
           "2 eggs",
           "5 potatoes",
           "1 onion",
           "oil",
          "salt to taste",
        ],
         cuisine: "Spanish",
       dishType: "main_course",
         image: "https://acortar.link/nOq8eK",
        duration: 30,
         creator: "Vicky"
       })
       .then((response) => {
        console.log("title")
        
      })
       .catch(error => {
      console.error('Error connecting to the database', error);
    })*/
     

     /* iteracion 3

      return Recipe.insertMany(data) 
    .then((response) => {
        console.log("recetas")
      })
    
    .catch(error => {
      console.error('Error connecting to the database', error);
    });*/

    
    /* iteracion 4

    return Recipe.findOneAndUpdate({title: "Rigatoni alla Genovese"}, {duration: 100})
    .then((response) => {
      console.log("conseguido!!")
    })
     .catch(error => {
      console.error('Error connecting to the database', error);
    }) */


    /* iteracion 5

    return Recipe.deleteOne({title: "Carrot Cake"})
    .then((response) => {
      console.log("Ya no hay Carrot Cake")
    })
     .catch(error => {
      console.error('Error connecting to the database', error);
    }) */
    
    
    /* iteracion 6
    
    mongoose.connection.close()*/

   // return Recipe.deleteMany()