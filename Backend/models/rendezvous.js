const mongoose = require('mongoose');


const rendezvousSchema = mongoose.Schema({
    traitement_dentaire:{type: String, required:  true },
    dentiste:{type: String, required:  true },
    date_arrive:{type: String, required:  true },
    date_consultation:{type: String, required:  true },
    nom_patient: { type: String, required:  true },
    prenom_patient: { type: String, required:  true },
    telephone: { type: String, required:  true },
    email: { type: String, required:  true },
    message: { type: String, required:  true },
    
});

module.exports=mongoose.model("rendezvous",rendezvousSchema);

