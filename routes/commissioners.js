const express = require('express'),
    router = express.Router(),
    commishModel = require('../models/commishModel'),
    slugify = require('slugify');

router.get('/', async (req, res) => {
    const commishData = await commishModel.getAll();
    res.json(commishData).status(200);
})

router.get('/:slug', async (req, res) => {
    const { slug } = req.params;
    const pres = await commishModel.getBySlug(slug);

    if (pres) {
        res.json(pres).status(200);
    } else {
        res.status(404).send(`No Commissioner found that matches slug, ${slug}`);
    }
});

module.exports = router;