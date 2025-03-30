const express = require('express');
const router  = express.Router();
const path = require('path');
const rootdir = require('../utils/path');
const frontController = require('../controllers/front');
    
// Serve index.html for the root route
router.get('/', (req, res) => {
    //res.sendFile(path.join(rootdir, '..','views', 'index.html'));
    res.render('index');
});


router.get('/service', (req, res) => {
    //res.sendFile(path.join(rootdir, 'views', 'service-details.html'));

    const mycode =[ 'HTML','CSS','PHP','LARAVEL','REACT','VUE','NODE' ];
    const mylng =[  {code:'HTML'},{code:'CSS' },{code:'PHP' },{code:'LARAVEL' },{code:'REACT' },{code:'VUE' },{code:'NODE' } ];

    res.render('service',{ newtitle : 'My Express application',mycode,mylng}); // view file with dynamic content
});

router.get('/starter', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'starter-page.html'));
});

router.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, '..', 'views', '404.html'));
});

module.exports = router;
       
