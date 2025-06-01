const express = require('express');
const router = express.Router();
const axios = require('axios');

const token = "d0a36422fc3a2c263284d3ae43c12cb8cabe98895fd8e4b162cc89a751dd53664926cc1aaed4ebb7238a12b35bd62e91fb9fe3674784583e3dace9af2333b5ed41f0ae10a3f8613c6d75dba14d2997380bf132c5787487ceed61c38d468a0c13995d71e0038cd25e73f7e6af2136f95075f2cdaf1fe89c087847e2d97decc083";

const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
};

const strapiApi = "https://api.antares-rh.net/api/actualites";

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

router.get('/:id', async (req, res) => {
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
