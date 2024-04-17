var express = require('express');
var router = express.Router();


var express = require('express');
const ornaments_controlers= require('../controllers/ornaments');
var router = express.Router();
/* GET ornaments */
router.get('/', ornaments_controlers.ornaments_view_all_Page );

// GET request for one ornament.
router.get('/ornaments/:id', ornaments_controlers.ornaments_detail);


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('ornaments', { title: 'Search Results Ornaments' });
});

module.exports = router;

/* GET detail ornaments page */
router.get('/detail', ornaments_controlers.ornaments_view_one_Page);

/* GET create ornaments page */
router.get('/create', ornaments_controlers.ornaments_create_Page);

/* GET create update page */
router.get('/update', ornaments_controlers.ornaments_update_Page);

/* GET delete ornaments page */
router.get('/delete', ornaments_controlers.ornaments_delete_Page);


