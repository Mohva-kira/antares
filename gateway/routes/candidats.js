const express = require('express');
const router = express.Router();
const axios = require('axios');

const token = "f280a1d17f90aadb250ef613c679289adcca1336a22a7e8a5d877dd1426f8c00c5d50d8804cf746c9657f9fc897cd6a4f0518eb11f24394d66eee7e63e48460dd9dfc0f69b12e7f583d1efda68194ab8f067f515db0871d6f0b7ab4837e27d40856c0fcf7a5d183fbb70ad3abbc0ad6fb026ad4005adc92471faded8d7acbe17";

const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
};

const strapiApi = "https://api.antares-rh.net/api/resumes";

/* GET redevances listing. */
router.get('/', async (req, res) => {
    try {
        const response = await axios.get(`${strapiApi}?populate=*`, { headers });
        console.log('candidat GET', response.data);
        res.json(response.data);
    } catch (error) {
        console.error('Erreur GET candidat', error);
        res.status(500).send({ error: "Erreur lors de la récupération des candidat" });
    }
});

router.get('/resume/:id', async (req, res) => {
    console.log('req params', req.params)
    try {
        const response = await axios.get(`${strapiApi}?populate=*&filters[user][$eq]=${req.params.id}`, { headers });
        console.log('candidat GET', response.data);
        res.json(response.data);
    } catch (error) {
        console.error('Erreur GET candidat', error);
        res.status(500).send({ error: "Erreur lors de la récupération des candidat" });
    }
});

router.post('/', async (req, res) => {
    try {
        console.log('candidats POST:', req.body.data);

        // Correction : Convertir 'montant' en string si présent
        // if (req.body.data.montant) {
        //     req.body.data.montant = String(req.body.data.montant);
        // }

        // Envoi vers Strapi
        const response = await axios.post(strapiApi, { data: req.body.data }, { headers });

        console.log('candidat envoyée:', response.data);
        return res.json(response.data);
    } catch (error) {
        console.error('Erreur POST candidat:', error.response?.data || error.message);
        return res.status(500).json({ error: "Erreur lors de l'envoi de la candidat" });
    }
});



module.exports = router;
