Para selseccionar el DAO por linea de comando es "sql o mongo", y por defecto inicia con mongo.

El factory está en el Constructor del DAO.

El Singleton está en la carpeta utils/persistencia
  "dependencies": {
    "autocannon": "^7.9.0",
    "axios": "^0.27.2",
    "bcrypt": "^5.0.1",
    "compression": "^1.7.4",
    "connect-mongo": "^4.6.0",
    "cookie-parser": "^1.4.6",
    "cors": "^2.8.5",
    "dotenv": "^16.0.0",
    "ejs": "^3.1.7",
    "express": "^4.18.1",
    "express-session": "^1.17.2",
    "faker": "^5.5.3",
    "knex": "^2.1.0",
    "moment": "^2.29.3",
    "mongoose": "^6.3.2",
    "mysql": "^2.18.1",
    "nodemailer": "^6.7.5",
    "passport": "^0.5.2",
    "passport-facebook": "^3.0.0",
    "response-time": "^2.3.2",
    "router": "^1.3.7",
    "session-file-store": "^1.5.0",
    "socket.io": "^4.5.0",
    "sqlite3": "^5.0.2",
    "winston": "^3.7.2",
    "yargs": "^17.5.1"
  },
  "devDependencies": {
    "chai": "^4.3.6",
    "mocha": "^10.0.0",
    "nodemon": "^2.0.16",
    "supertest": "^6.2.3"
  }
"scripts": {
    "test": "mocha test/mochaProductos.js --exit",
    "dev": "nodemon index.js",
    "start": "node index.js"
  },
