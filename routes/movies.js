/*
    Rutas de Peliculas
    host + /movies
*/

const express = require('express');

const { saveMovies, getMovies, getApiMovies } = require('../controllers/movies');


const router = express.Router();

router.post('/saveMovies', saveMovies);

router.get('/getMovies', getMovies);

router.get('/getMovies', getMovies);

router.get('/getApiMovies', getApiMovies);



module.exports = router;