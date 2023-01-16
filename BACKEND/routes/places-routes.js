const express = require('express');

const placesController = require('../controllers/places-controller')
const router = express.Router();




// ========= get place by placeId =======
router.get('/:pid',placesController.getPlaceById);

// ========= get place by creator ID =======

router.get('/user/:uid', placesController.getPlaceByUserId );




module.exports = router;

