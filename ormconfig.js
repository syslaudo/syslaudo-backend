/* eslint-disable prettier/prettier */
if (process.env.ENVIRONMENT == 'DEV'){
  module.exports = {  
  "type": process.env.DB_TYPE,
  "host": process.env.DB_HOST,
  "port": process.env.DB_PORT,
  "username": process.env.DB_USERNAME,
  "password": process.env.DB_PASSWORD,
  "database": process.env.DB_DATABASE,
  "synchronize": false,
  "logging": true,
  "migrations": ["./src/database/migrations/**.ts"],
  "entities": ["./src/models/**.ts"],
  "cli": {
    "migrationsDir": "./src/database/migrations"
  }
  };
} else if (process.env.ENVIRONMENT == 'PROD') {
  module.exports = {  
    "type": process.env.DB_TYPE,
    "host": process.env.DB_HOST,
    "port": process.env.DB_PORT,
    "username": process.env.DB_USERNAME,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_DATABASE,
    "synchronize": false,
    "logging": false,
    "migrations": ["dist/database/migrations/**.js"],
    "entities": ["dist/models/**.js"],
    "cli": {
      "migrationsDir": "./src/database/migrations"
    }
  };