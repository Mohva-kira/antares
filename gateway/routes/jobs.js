const express = require('express');
const router = express.Router();
const axios = require('axios');

const token = "d0a36422fc3a2c263284d3ae43c12cb8cabe98895fd8e4b162cc89a751dd53664926cc1aaed4ebb7238a12b35bd62e91fb9fe3674784583e3dace9af2333b5ed41f0ae10a3f8613c6d75dba14d2997380bf132c5787487ceed61c38d468a0c13995d71e0038cd25e73f7e6af2136f95075f2cdaf1fe89c087847e2d97decc083";

const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
};

const strapiApi = "https://api.antares-rh.net/api/jobs";

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
