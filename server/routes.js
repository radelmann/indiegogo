var indiegogo = require('./controllers/indiegogo.js');

module.exports = function(app) {
  app.get('/api/get', indiegogo.get);
}