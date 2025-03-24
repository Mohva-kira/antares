const express = require('express');
const router = express.Router();
const axios = require('axios');

const token = "bb4c1fcf6200a9409a44165baa8ef2872f16cfaa72073158caa01673351d6773dcb1cddeea6e2d9539182f44666cad44a14b228dca6eb9c52cd2bfbe9ef321f8ef21bb1bd7830ba3cef86c21f98d5e16b603d4c08c9af16f9f6d0ca832e08f5989e7fd0e710dafdd280f117b1af5b2a375fc1d402374394222fcd62fef3e742c";

const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
};

const strapiApi = "http://localhost:1337/api/jobs";

/* GET redevances listing. */
router.get('/', async (req, res) => {
    try {
        const response = await axios.get(`${strapiApi}?populate=*`, { headers });
        console.log('jobs GET', response.data);
        res.json(response.data);
    } catch (error) {
        console.error('Erreur GET jobs', error);
        res.status(500).send({ error: "Erreur lors de la récupération des jobs" });
    }
});

router.get('/:id', async (req, res) => {
    console.log('req params', req.params)
    try {
        const response = await axios.get(`${strapiApi}?populate=*&filters[user][$eq]=${req.params.id}`, { headers });
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
