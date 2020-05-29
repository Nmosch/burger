const orm = require("../config/orm.js");

const burger = {
    selectAll: async()=>{
        const result = await orm.selectAll("burger");

        return result;
    },
    insertOne: async(newBurger)=>{
        const result = await orm.insertOne(newBurger);

        return result;
    },
    updateOne: async(id)=>{
        const result = await orm.updateOne(true, id);

        return result;
    }    
};

// burger.insertOne("BBQ Burger");
// burger.selectAll();

module.exports = burger;