const { response } = require('express');
const axios = require('axios').default;
const Movie = require('../models/Movie');


const getApiMovies = async () => {

    try {

        const response = await axios.get(process.env.URL_API + '?i=tt3896198&apikey=5eec5adc&s=Love');

        const dataResponse = response.data;

        let movies = [];

        for (const key in dataResponse) {

            const response = dataResponse[key];

            for (const dataArray of response) {

                if (dataArray.Title !== undefined) {

                    movies.push(dataArray);

                }
            }
        }

        return movies;

    } catch (error) {

        console.log("error api movies", error);
    }

}


const saveMovies = async (req, res = response) => {

    const movies = await getApiMovies();

    try {

        for (const moviesArray of movies) {

            let movie = new Movie(moviesArray);

            const movieSaved = await movie.save();

        }

        res.status(200).json({
            ok: true,
            msg: "save"
        });

    } catch (error) {

        console.log("errror save ", error);

        res.status(500).json({
            ok: false,
            msg: 'Por favor hable con el administrador'
        });
    }
};



const getMovies = async (req, res = response) => {

    try {

        const movies = await Movie.find();

        res.status(200).json({
            ok: true,
            movies
        });

    } catch (error) {

        res.status(500).json({
            ok: false,
            msg: 'Por favor hable con el administrador'
        });
    }
};


module.exports = {
    getMovies,
    saveMovies,
    getApiMovies
}