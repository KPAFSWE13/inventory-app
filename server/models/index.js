const {Sequelize} = require('sequelize')
const {sequelize} = require('../db')



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

const User = sequelize.define("users", {
  username:{ 
    type: Sequelize.STRING,
    allowNull: false 
  },
  password:{
    type:Sequelize.NUMBER,
    allowNull: false
  }

});

module.exports = {
  db: sequelize,
  Item,
  User
};
