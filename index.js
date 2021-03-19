const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");
const path = require("path");
const PORT = process.env.PORT || 5000;

//process.env.PORT
//process.env.NODE_ENV => production or undefined

//middleware
app.use(cors());
app.use(express.json());

if (process.env.NODE_ENV === "production") {
    //server static content
    //npm run build
    app.use(express.static(path.join(__dirname, "client/build")));
}

//ROUTES//

//create animal entry
app.post("/animals", async(req, res) => {
    try {
        const {link, type} = req.body;
        const newAnimalEntry = await pool.query("INSERT INTO animals (link, type) VALUES($1, $2) RETURNING *", 
        [link, type]);

        res.json(newAnimalEntry.rows[0]);                    
    } catch (error) {
        console.error(error.message);
    }
});

//get all animal entry

app.get("/animals", async(req, res) => {
    try {
        const allAnimalEntries = await pool.query("SELECT * FROM animals");
        res.json(allAnimalEntries.rows); 
    } catch (error) {
        console.error(error.message);
    }
});

//get a type of animal in database

app.get("/animals/type/:type", async(req,res)=> {
    try {
        const {type} = req.params;
        const animalEntry = await pool.query("SELECT * FROM animals WHERE type = $1", 
        [type]);

        res.json(animalEntry.rows);  
    } catch (error) {
        console.error(error.message);
    }
});

//get all types of animal in database

app.get("/animals/type", async(req,res) => {
    try {
        const allAnimalTypes = await pool.query("SELECT DISTINCT type from animals");
        res.json(allAnimalTypes.rows);  
    } catch (error) {
        console.error(error.message);
    }
});

//update an animal entry

app.put("/animals/:id", async(req,res)=> {
    try {
        const {id} = req.params;
        const {link, type} = req.body;
        const updateAnimalEntry = await pool.query("UPDATE animals SET link = $1, type = $2 WHERE animal_id = $3", 
        [link, type, id]);

        res.json("Animals was updated.");  
    } catch (error) {
        console.error(error.message);
    }
});

//delete an animal entry

app.delete("/animals/:id", async(req,res) => {
    try {
        const {id} = req.params;
        const deleteAnimalEntry = await pool.query("DELETE FROM animals where animal_id = $1",
        [id]);

        res.json("Specified entry has been deleted.");
    } catch (error) {
        console.error(error.message);
    }
});

//catch all method
app.get("*", (req,res) => {
    res.sendFile(path.join(__dirname, "client/build/index.html"));
});

app.listen(PORT, () => {
    console.log(`server has started on port ${PORT}`);
});