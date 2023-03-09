const {sequelize} = require('./db');
const { Item } = require("./models/index");
const regeneratorRuntime = require("regenerator-runtime");

describe('Item Model Tests', () => {

    beforeAll(async () => {
        await sequelize.sync({ force: true });
    });

    beforeEach(async () => {
        await sequelize.sync({ force: true });
    });
    
    afterEach(async () => {
        await Item.sync({ force: true });
    });
    
    afterAll(async () => {
        await sequelize.drop()
    });

    test("Test to create a item", async () => {

        const item = await Item.create({
            title: "Nike Tee",
            price: 25,
            description: "A simple Nike t-shirt",
            category: "men's clothing",
            image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"
        });

        expect(item).toBeInstanceOf(Item);
        expect(item.title).toBe("Nike Tee");
        expect(item.price).toBe(25);
        expect(item.description).toBe("A simple Nike t-shirt");
        expect(item.category).toBe("men's clothing");
        expect(item.image).toBe("https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg");
    });

    test("Test to update an item", async () => {

        const item2 = await Item.create({
            title: "Nike Tee",
            price: 25,
            description: "A simple Nike t-shirt",
            category: "men's clothing",
            image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"
        });

        await Item.update({ price: 20 }, { where: { id: item2.id } });
        
        const updatedItem2 = await Item.findByPk(item2.id);
        expect( updatedItem2.price).toBe(20);
    });

    test("Test to read an item", async () => {

        const item = await Item.create({
            title: "Nike Tee",
            price: 25,
            description: "A simple Nike t-shirt",
            category: "men's clothing",
            image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"
        });

        const item2 = await Item.create({
            title: "Grey Jeans",
            price: 50,
            description: "A simple straight pair of jeans",
            category: "men's clothing",
            image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"
        });

        let findItem = await Item.findByPk(item.id);
        let findItem2 = await Item.findByPk(item2.id);

        expect(findItem.id).toBe(item.id);
        expect(findItem2.id).toBe(item2.id);
    });

    test("Test to delete an item", async () => {

        const item3 = await Item.create({
            title: "Grey Jeans",
            price: 50,
            description: "A simple straight pair of jeans",
            category: "men's clothing",
            image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"
        });

        let findItem3 = await Item.findByPk(item3.id);
        await Item.destroy({ where: { id: item3.id } });

        findItem3 = await Item.findByPk(item3.id);
        expect(findItem3).toBeNull();
    })
});