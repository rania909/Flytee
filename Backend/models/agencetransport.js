const mongoose = require('mongoose');


const agencetransportSchema = mongoose.Schema({
    nom: { type: String, required:  true },
    adresse: { type: String, required:  true },
    contacte: { type: String, required:  true },
   
    
});

module.exports=mongoose.model("agencetransport",agencetransportSchema);

