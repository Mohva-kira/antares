const express = require('express');
const router = express.Router();
const axios = require('axios');

const token = "82d64b3cd57901064e3223c1cbdb475343e37d78729cac3030b998801dc9aa1c1ffc58e2ecea7a870f14ac9a5db5fed3e93e6cf09b7aef09ef1504807b969e517a7f20c216c0061ec5600c21a715f969a0438d0852baac9036742fc2d41b2ca002cf49a74bdae295e657054dff7ea77f941c7d1e7dbd177c163d400205160c46";

const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
};

const strapiApi = "http://localhost:1337/api/resumes";

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
