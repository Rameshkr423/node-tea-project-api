const express = require('express');
const router  = express.Router();
const teaController = require('../controllers/tea');
//import tea model
const multer = require('multer');
const upload = multer();
const Tea = require('../models/tea');


router.get('/tea', teaController.getAllTea);
router.delete('/tea', teaController.deleteAllTea);
router.post("/tea", teaController.uploadImg, teaController.newTea);
//router.post("/tea", upload.none(), teaController.newTea);


router.get('/tea/:name', teaController.getOneTea);
router.post('/tea/:name', teaController.newComment);
router.delete('/tea/:name', teaController.deleteOneTea);

module.exports = router;
