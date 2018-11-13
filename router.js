module.exports = function(app) {
  app.get('/', function (req, res, next) {
    res.send(['response1', 'response2'])
  });  
}