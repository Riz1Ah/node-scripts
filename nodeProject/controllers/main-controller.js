
const express = require('express');
const { editYAMLVariable, runCommand } = require('./helper');

const router = express.Router();

router.get('/run', async (req, res, next) => {
    // #swagger.tags = ['Run Command']
    // #swagger.description = 'Route to Run Command'
    try {
        runCommand('ls -l');
        const result = 'Command executed successfully !';
        return res.status(200).json(result)
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
});

router.post('/rlink', async (req, res, next) => {
    // #swagger.tags = ['Replace Link']
    // #swagger.description = 'Replace Link'
    try {
        const product = {
            link: req.body.link
        }
        editYAMLVariable('link', product.link)
        const result = product.link;
        return res.status(202).json(result)
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
});

module.exports = router;
