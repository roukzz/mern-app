const express = require('express');
const bodyParser = require('body-parser');
const PORT = 5000;

// router module that was exporter and here we are importing it
const placesRoutes = require('./routes/places-routes');

const app = express();

app.use(bodyParser.json());

app.use('/api/places', placesRoutes);

app.use((error, req, res, next) => {

    if( res.headerSent){
        return next(error);
    }

    res.status(error.code || 500);
    res.json({message: error.message || ' An unknown error occurred!'})
});

app.listen(PORT, (err)=> {
    if(err){
        console.log("Error in server setup");
    }else{
        console.log('Server listening on Port: ', PORT);
    }
});




