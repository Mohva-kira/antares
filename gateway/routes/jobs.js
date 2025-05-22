const express = require('express');
const router = express.Router();
const axios = require('axios');

const token = "f280a1d17f90aadb250ef613c679289adcca1336a22a7e8a5d877dd1426f8c00c5d50d8804cf746c9657f9fc897cd6a4f0518eb11f24394d66eee7e63e48460dd9dfc0f69b12e7f583d1efda68194ab8f067f515db0871d6f0b7ab4837e27d40856c0fcf7a5d183fbb70ad3abbc0ad6fb026ad4005adc92471faded8d7acbe17";

const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
};

const strapiApi = "http://localhost:1337/api/jobs";

/* GET redevances listing. */
router.get('/', async (req, res) => {

    try {
        const response = await axios.get(`${strapiApi}?populate=*&sort[0]=createdAt:desc`, { headers });
        console.log('jobs GET', response.data);
        res.json(response.data);
    } catch (error) {
        console.error('Erreur GET jobs', error);
        res.status(500).send({ error: "Erreur lors de la récupération des jobs" });
    }
});

router.get('/:id', async (req, res) => {

    try {
        const response = await axios.get(`${strapiApi}/${req.params.id}?populate=*`, { headers });
        console.log('jobs GET', response.data);
        res.json(response.data);
    } catch (error) {
        console.error('Erreur GET jobs', error);
        res.status(500).send({ error: "Erreur lors de la récupération des jobs" });
    }
});

router.get('/getbyname/:id', async (req, res) => {
    console.log('id', req.params.id);
    try {
        const response = await axios.get(`${strapiApi}?populate=*&filters[titre][$eq]=${encodeURIComponent(req.params.id)}`, { headers });
        console.log('jobs GET', response.data);
        res.json(response.data);
    } catch (error) {
        console.error('Erreur GET jobs', error);
        res.status(500).send({ error: "Erreur lors de la récupération des jobs" });
    }
});
router.get('/getbyid/:id', async (req, res) => {

    try {
        const response = await axios.get(`${strapiApi}?populate=*&filters[id][$eq]=${req.params.id}`, { headers });
        console.log('jobs GET', response.data);
        res.json(response.data);
    } catch (error) {
        console.error('Erreur GET jobs', error);
        res.status(500).send({ error: "Erreur lors de la récupération des jobs" });
    }
});
router.post('/', async (req, res) => {
    try {
        console.log('jobs POST:', req.body.data);

        // Correction : Convertir 'montant' en string si présent
        // if (req.body.data.montant) {
        //     req.body.data.montant = String(req.body.data.montant);
        // }

        // Envoi vers Strapi
        const response = await axios.post(strapiApi, { data: req.body.data }, { headers });

        console.log('jobs envoyée:', response.data);
        return res.json(response.data);
    } catch (error) {
        console.error('Erreur POST jobs:', error.response?.data || error.message);
        return res.status(500).json({ error: "Erreur lors de l'envoi de la jobs" });
    }
});



module.exports = router;
