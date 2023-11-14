/*const config = {
env: process.env.NODE_ENV || 'development', 
port: process.env.PORT || 3000,
jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key", 
mongoUri: process.env.MONGODB_URI || "mongodb://localhost:27017/Marketplace" ||
process.env.MONGO_HOST || + (process.env.IP || 'localhost') + ':' + 
(process.env.MONGO_PORT || '27017') +
'/mernproject' 
}
export default config 
*/

/*
const config = { env: process.env.NODE_ENV || 'development', 
 port: process.env.PORT || 3000,
 jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key", 
 mongoUri: process.env.MONGODB_URI || "mongodb+srv://syi:gkFJPyc6ixx0uiKH@cluster0.rarlgmd.mongodb.net/Marketplace?retryWrites=true&w=majority"||
process.env.MONGO_HOST ||
 'mongodb://' + (process.env.IP || 'localhost') + ':' + 
(process.env.MONGO_PORT || '27017') +
 '/mernproject' 
 }
 export default config  */





const config = {
    env: process.env.NODE_ENV || 'development',
    port: process.env.PORT || 3000,
    jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key", 
    mongoUri: process.env.MONGODB_URI || 
              "mongodb+srv://syi11:LuBuHaCUE7ZSp9Bv@cluster0.ny55zvf.mongodb.net/marketplace?retryWrites=true&w=majority" ||
              process.env.MONGO_HOST ||
              'mongodb://' + (process.env.IP || 'localhost') + ':' + 
              (process.env.MONGO_PORT || '27017') +
              '/Marketplace' 
  };
  
  export default config;
  