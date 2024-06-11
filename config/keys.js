//keys.js - figure out what set of creditials to return

if (process.env.NODE_ENV === 'production'){
  //we are in product - return the prod set of keys
  module.exports = require('./prod');

}else {
  //we are in development - return the dev key
  module.exports = require('./dev'); 
  // we export dev keys to whoever is asking for it

}
