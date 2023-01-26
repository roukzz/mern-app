
const HttpError = require('../models/http-error');
const DUMMY_PLACES = [
    {
        id: 'p1',
        title:'Empire State Building',
        description: 'One of the most famous sky scrapers in the world!',
        location:{
            lat: 40.7484474,
            lng:-73.9871516
        },
        address:' 20 w 34th St, New York,  NY 10001',
        creator: 'u1'

    }
];


const getPlaceById = (req,res,next) => {

    
    const pid = req.params.pid;
    // console.log(req.params);
    console.log('GET Request in places');

    const place = DUMMY_PLACES.find(place => place.id === pid);
    if(!place){
       const error = new HttpError('Could not find a place for the provided id',404);
       throw error;
    }
    res.json({place}); 

    
}

const getPlaceByUserId = (req,res,next) => {

   
    const userId = req.params.uid;

    const place = DUMMY_PLACES.find(place => place.creator === userId);

    if(!place){
        const error = new HttpError('Could not find a place for the provided user id',404);
       
       return next(error) ;
    }

    res.json({place});
    
}


const createPlace = (req, res, next) => {

    const {title,description, coordinates,address, creator} = req.body;

    const createdPlace = {
        title,
        description,
        location: coordinates,
        address,
        creator
    };

    DUMMY_PLACES.push(createdPlace);

    res.status(201).json({place:createdPlace});
}

exports.getPlaceById = getPlaceById;
exports.getPlaceByUserId = getPlaceByUserId;
exports.createPlace = createPlace;