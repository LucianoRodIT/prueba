const path = require("path");
const express = require("express");

// const bodyParser = require("body-parser");
// app.use(bodyParser.json());

const app = express();
app.use(express.json()); //Metodo que convierte el res.body en .json

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
    console.log(__dirname)
});

app.post("/add", (req, res) => {
    const { a, b } = req.body;
    res.send({
        result: parseInt(a) + parseInt(b)
    });
    console.log(result)
});

app.listen(5000, () => {
    console.log(`Server is running on port 5000.`);
});