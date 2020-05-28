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
    updateOne: async(updateBurger, id)=>{
        const result = await orm.updateOne(pdateBurger,id);

        return result;
    }    
};

module.exports = burger;