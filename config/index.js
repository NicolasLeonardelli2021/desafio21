require("dotenv").config();

let config = {
    dev: process.env.NODE_ENV !== 'production',
    port: process.env.PORT
    
}

let mongo_db = {
    uri: process.env.MONGO_DB_URI,
    name: process.env.DB_NAME,
    mongo_atlas: process.env.MONGO_ATLAS
}

/* let sqlite_db = {
    host: process.env.DB_HOST || "localhost",
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'usuarios'
} */

let facebook = {
    app_id: process.env.FACEBOOK_APP_ID,
    app_secret: process.env.FACEBOOK_APP_SECRET
}

module.exports={config,mongo_db,facebook}