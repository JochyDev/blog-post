if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config();
}

module.exports = {
    PORT: process.env.PORT,
    MONGO_URI: process.env.MONGO_URI,
    APLICATION_NAME: process.env.APLICATION_NAME,
    JWT_SECRET: process.env.JWT_SECRET,
    SWAGGER_PATH: `../config/swagger/${process.env.SWAGGER_DOC}.json`
}