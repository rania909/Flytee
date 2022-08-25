const mongoose =require("mongoose");

const utilisateurs = require( '../models/utilisateur.js');



 const getUtilisateurs = async (req, res) => { 
    try {
        const utilisateur = await utilisateurs.find();
                
        res.status(200).json(utilisateur);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

 const getUtilisateur = async (req, res) => { 
    const { id } = req.params;

    try {
        const utilisateur = await utilisateurs.findById(id);
        
        res.status(200).json(utilisateur);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

 const createUtilisateur = async (req, res) => {
    const { nom, prenom , date_naissance,email,telephone } = req.body;
 
    const newutilisateur = new utilisateurs({ nom, prenom , date_naissance,email,telephone})

    try {
        await newutilisateur.save();

        res.status(201).json(newutilisateur );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

 const updateUtilisateur = async (req, res) => {
    const { id } = req.params;
    const { nom, prenom , date_naissance,email,telephone } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    const updateUtilisateur = { nom, prenom , date_naissance,email,telephone , _id: id };

    await dentistes.findByIdAndUpdate(id, updateUtilisateur, { new: true });

    res.json(updateUtilisateur);
}

 const deleteUtilisateur = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No event with id: ${id}`);

    await dentistes.findByIdAndRemove(id);

    res.json({ message: "user deleted successfully." });
}
module.exports = {
    getUtilisateurs,
    getUtilisateur,
    createUtilisateur,
    updateUtilisateur,
    deleteUtilisateur,
   
  };