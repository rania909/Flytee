const mongoose = require('mongoose');


const dentisteSchema = mongoose.Schema({
    nom_dentiste: { type: String, required:  true },
    adresse: { type: String, required:  true },
    specialite: { type: String, required:  true },
    description: { type: String, required:  true },
   
    
});

module.exports=mongoose.model("dentiste",dentisteSchema);

