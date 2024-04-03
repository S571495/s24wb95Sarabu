const mongoose = require("mongoose")
const ornamentsSchema = mongoose.Schema({
    material: String,
    style: String,
    price: Number
})
module.exports = mongoose.model("ornaments",ornamentsSchema)