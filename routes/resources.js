var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var ornaments_controller = require('../controllers/ornaments');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// ornaments ROUTES ///
// POST request for creating a ornaments.
router.post('/ornaments', ornaments_controller.ornaments_create_post);
// DELETE request to delete ornaments.
router.delete('/ornaments/:id', ornaments_controller.ornaments_delete);
// PUT request to update ornaments.
router.put('/ornaments/:id', ornaments_controller.ornaments_update_put);
// GET request for one ornaments.
router.get('/ornaments/:id', ornaments_controller.ornaments_detail);
// GET request for list of all ornaments items.
router.get('/ornaments', ornaments_controller.ornaments_list);
module.exports = router;
// API for our resources
exports.api = function(req, res) {
res.write('[');
res.write('{"resource":"ornaments", ');
res.write(' "verbs":["GET","PUT", "DELETE"] ');
res.write('}');
res.write(']')
res.send();
};
