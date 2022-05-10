/*
    Rutas de Peliculas
    host + /movies
*/

const express = require('express');

const { saveMovies, getMovies } = require('../controllers/movies');

const router = express.Router();

router.post('/saveMovies', saveMovies);

router.get('/getMovies', getMovies);



module.exports = router;