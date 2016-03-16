var https = require('https');

module.exports = {
  get: function(req, res, next) {

    https.get('https://api.indiegogo.com/1/campaigns.json?api_token=e377270bf1e9121da34cb6dff0e8af52a03296766a8e955c19f62f593651b346', function(httpResponse) {
      var resData = '';

      httpResponse.on('data', function(chunk) {
        resData += chunk;
      });

      httpResponse.on('end', function() {
        res.status(200);
        res.json(resData);
      });

      httpResponse.on('error', function(err) {
        res.status(err.statusCode || 500);
        res.json(err);
      });
    });
  }
}