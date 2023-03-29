const { items, users} = require('./seedData.js');

const {sequelize} = require('./db');
const {Item} = require('./models');
const {User} = require('./models');


const seed = async () => {

    try {
        // drop and recreate tables per model definitions
        await sequelize.sync({ force: true });
    
        // insert data
        await Promise.all(items.map(item => Item.create(item)));

        console.log("Main db populated!");

        await Promise.all(users.map(user => User.create(user)));

        console.log("User db populated!");

        
    } catch (error) {
        console.error(error);
    }

}


seed();
