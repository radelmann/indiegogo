module.exports = {
  get: function(req, res, next) {
    res.status(200);
    res.json({
      "success": "OK"
    });
  }
}