const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const { connectionDB } = require('./database/config');


dotenv.config();
const app = express();

//Connection DataBase 
connectionDB();

app.use(cors());
app.use(express.static('public'));

app.use(express.json());

//Routes
app.use('/movies', require('./routes/movies'));


app.listen(process.env.PORT, () => {
    console.log(`servidor corriendo en puerto ${process.env.PORT} `)
});