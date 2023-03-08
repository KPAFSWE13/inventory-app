const {Sequelize} = require('sequelize')
const {sequelize} = require('../db')

// const Sauce = sequelize.define("sauces", {
//   name: Sequelize.STRING,
//   image: Sequelize.STRING,
// });

const Item = sequelize.define("items", {
  title:{ 
    type: Sequelize.STRING,
    allowNull: false 
  },
  
  price:{
    type:Sequelize.NUMBER,
    allowNull: false
  },

  description:{ 
    type: Sequelize.STRING,
    allowNull: false
  },

  category:{ 
    type:Sequelize.STRING,
    allowNull: false
  },

  image: { 
    type:Sequelize.STRING,
    allowNull: false
  }

});
module.exports = {
  db: sequelize,
  // Sauce,
  Item
};
