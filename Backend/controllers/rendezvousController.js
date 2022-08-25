const mongoose =require("mongoose");

const rendezvous = require( '../models/rendezvous.js');



 const getListRendezVous = async (req, res) => { 
    try {
        const listrendezvous = await rendezvous.find();
                
        res.status(200).json(listrendezvous);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

 const getUnRendezVous = async (req, res) => { 
    const { id } = req.params;

    try {
        const unrendezvous = await rendezvous.findById(id);
        
        res.status(200).json(unrendezvous);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

 const createUnRendezVous = async (req, res) => {
    const {  dentiste , date_arrive,date_consultation ,traitement_dentaire,nom_patient ,prenom_patient,telephone,email,message } = req.body;
 
    const newrendezvous = new rendezvous({ dentiste , date_arrive,date_consultation ,traitement_dentaire, nom_patient,prenom_patient,telephone,email,message })

    try {
        await newrendezvous.save();

        res.status(201).json(newrendezvous );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

 const updateUnRendezVous = async (req, res) => {
    const { id } = req.params;
    const {  traitement_dentaire, dentiste , date_arrive,date_consultation,nom_patient,prenom_patient,telephone,email,message } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    const updateUnRendezVous = {  traitement_dentaire, dentiste , date_arrive,date_consultation,nom_patient,prenom_patient,telephone,email,message, _id: id };

    await rendezvous.findByIdAndUpdate(id, updateUnRendezVous, { new: true });

    res.json(updateUnRendezVous);
}

 const deleteUnRendezVous = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No event with id: ${id}`);

    await dentistes.findByIdAndRemove(id);

    res.json({ message: "rendezvous deleted successfully." });
}
module.exports = {
    getListRendezVous,
    getUnRendezVous,
    createUnRendezVous,
    updateUnRendezVous,
    deleteUnRendezVous,
   
  };