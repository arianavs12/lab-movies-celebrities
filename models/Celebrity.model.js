//  Add your code here
//  Add your code here

const { Schema, model } = require("mongoose")

const CelebritySchema = new Schema({
    name: String,
    occupation: String,
    catchPhrase: String
}, { timestamps: true })


const modelo = model("Celebrity", CelebritySchema);
module.exports = modelo;

//Lo de encima es lo mismo que  module.exports = model("Celebrity", CelebritySchema);