const express = require('express');
const router  = express.Router();
const path = require('path');
const frontController = require('../controllers/front');
    
// Serve index.html for the root route
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../','views', 'index.html'));
});


router.get('/service', (req, res) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'service-details.html'));
});

router.get('/starter', (req, res) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'starter-page.html'));
});

router.use((req, res, next) => {
    res.status(404).send({ status: 404, message: 'Page URL not found' });
});

module.exports = router;
       
