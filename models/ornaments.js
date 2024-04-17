const mongoose = require("mongoose")
const ornamentsSchema = mongoose.Schema({
    material: {
        type: String,
        required: true,
        match: /^[a-zA-Z]/
      },
    style: String,
    price:{
        type: Number,
        min:1,
        max:50
    } 
})
module.exports = mongoose.model("ornaments",ornamentsSchema)