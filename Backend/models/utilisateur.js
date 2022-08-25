const mongoose = require('mongoose');


const utilisateurSchema = mongoose.Schema({
    nom: { type: String, required:  true },
    prenom: { type: String, required:  true },
    date_naissance: { type: String, required:  true },
    email: { type: String, required:  true },
    telephone: { type: String, required:  true },
    role:{
        type:String,
        enum:["admin" , "dentiste","utilisateur"],
        default:"utilisateur"
    }
    
});

module.exports=mongoose.model("utilisateur",utilisateurSchema);

