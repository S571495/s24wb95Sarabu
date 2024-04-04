var express = require('express');
var router = express.Router();


var express = require('express');
const ornaments_controlers= require('../controllers/ornaments');
var router = express.Router();
/* GET costumes */
router.get('/', ornaments_controlers.ornaments_view_all_Page );

// GET request for one costume.
router.get('/costumes/:id', ornaments_controlers.ornaments_detail);


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('ornaments', { title: 'Search Results Ornaments' });
});

module.exports = router;
