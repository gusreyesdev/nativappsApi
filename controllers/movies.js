const { response } = require('express');
const axios = require('axios').default;
const Movie = require('../models/Movie');


const saveMovies = async (req, res = response) => {

    try {

        for (let i = 1; i <= 90; i++) {

            const response = await axios.get(process.env.URL_API + '?i=tt3896198&apikey=5eec5adc&s=Love&y=2020&page=' + i);

            const dataResponse = await response.data;

            let movies = [];

            for (const key in dataResponse) {

                const response = await dataResponse[key];

                for (const dataArray of response) {

                    if (dataArray.Title !== undefined) {

                        const responseObj = await dataArray;

                        let movie = new Movie(responseObj);

                        const movieSaved = await movie.save();

                    }

                }

            }

        }

        res.status(200).json({
            ok: true,
            msg: "save"
        });

    } catch (error) {

        console.log("error api movies", error);

        res.status(500).json({
            ok: false,
            msg: 'Por favor hable con el administrador'
        });
    }

}


const getMovies = async (req, res = response) => {

    try {

        const movies = await Movie.find();

        console.log("movies ", movies)

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
    saveMovies,
    getMovies
}