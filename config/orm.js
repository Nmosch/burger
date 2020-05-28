const connection = require("./connection.js");

const orm = {
    selectAll: async (table)=>
    {
        try {
            //?? for columns and table names, ? for data
            const query = "SELECT * FROM ??";

            const result = await connection.query(query, table);

            console.log(result);

        }catch (err){

            throw err;
        }
    },

    insertOne: async(newBurger)=>
    {
        try{
            const query = "INSERT INTO burger VALUES ?";

            const result = await connection.query(query, newBurger);

            console.log(result);

        }catch (err){

            throw err;
        }
    },

    updateOne: async(updateBurger,id) =>
    {
        try{
            const query = "UPDATE burger SET ? WHERE id = ?";

            const result = await connection.query(query,[updateBurger,id]);

            console.log(results);
        
        }catch (err){

            throw err;
        }
    }
}

module.exports = orm;