var ornaments = require('../models/ornaments');
// List of all Costumes
exports.ornaments_list = function(req, res) {
res.send('NOT IMPLEMENTED: Ornament list');
};
// for a specific Costume.
exports.ornaments_detail = function(req, res) {
res.send('NOT IMPLEMENTED: Ornament detail: ' + req.params.id);
};
// Handle Costume create on POST.
exports.ornaments_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: Ornament create POST');
};
// Handle Costume delete from on DELETE.
exports.ornaments_delete = function(req, res) {
res.send('NOT IMPLEMENTED: Ornament delete DELETE ' + req.params.id);
};
// Handle Costume update form on PUT.
exports.ornaments_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: Ornament update PUT' + req.params.id);
};


exports.ornaments_list = async function(req, res) {
    try{
    theornaments = await ornaments.find();
    res.send(theornaments);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
    

    // VIEWS
// Handle a show all view
exports.ornaments_view_all_Page = async function(req, res) {
try{
theornaments = await ornaments.find();
res.render('ornaments', { title: 'Ornaments Search Results', results: theornaments });
}
catch(err){
res.status(500);
res.send(`{"error": ${err}}`);
}
};

exports.ornaments_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await ornaments.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
    };
    

// Handle Costume create on POST.
exports.ornaments_create_post = async function(req, res) {
    console.log(req.body)
    let document = new ornaments();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"costume_type":"goat", "cost":12, "size":"large"}
    document.material = req.body.material;
    document.style = req.body.style;
    document.price = req.body.price;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
    
