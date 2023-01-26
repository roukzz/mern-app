const { application } = require('express');
const express = require('express');

const placesController = require('../controllers/places-controller')
const router = express.Router();




// ========= get place by placeIdd =======
router.get('/:pid',placesController.getPlaceById);

// ========= get place by creator ID =======

router.get('/user/:uid', placesController.getPlaceByUserId );

router.post('/',placesController.createPlace)



module.exports = router;

