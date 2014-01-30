
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index',
    {
        title: 'Polymer Example',
        test: 'test value'
    });
};
