class HttpError extends Error{


constructor(message, errorCode){
    super(message); // Add a "message " prperty
    this.code = errorCode; // adds a 'code' property(instance variable)


}



}


module.exports = HttpError;