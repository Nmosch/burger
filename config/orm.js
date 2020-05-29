const connection = require("./connection.js");

const orm = {
    selectAll: async (table)=>
    {
        try {
            //?? for columns and table names, ? for data
            const query = "SELECT * FROM ??";

            const result = await connection.query(query, table);

            console.log(result);

            return result;

        }catch (err){

            throw err;
        }
    },

    insertOne: async(newBurger)=>
    {
        try{
            const query = "INSERT INTO burger (burger_name) VALUES (?)";

            const result = await connection.query(query, newBurger);

            console.log(result);

            return result;

        }catch (err){

            throw err;
        }
    },

    updateOne: async(updateDevoured,id) =>
    {
        try{
            const query = "UPDATE burger SET devoured = ? WHERE id = ?";

            const result = await connection.query(query,[updateDevoured,id]);

            console.log(result);

            return result;
        
        }catch (err){

            throw err;
        }
    }
}

module.exports = orm;