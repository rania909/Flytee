const mongoose =require("mongoose");

const agencevoyage = require( '../models/agencevoyage.js');


const createAgenceVoyage = async (req, res) => {
  const { nom, adresse  , contacte } = req.body;

  const newagencevoyage = new agencevoyage({ nom, adresse  , contacte  })

  try {
      await newagencevoyage.save();

      res.status(201).json(newagencevoyage );
  } catch (error) {
      res.status(409).json({ message: error.message });
  }
}

 const getAgenceVoyages = async (req, res) => { 
    try {
        const agencevoyage = await agencevoyage.find();
                
        res.status(200).json(agencevoyage);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

 const getAgenceVoyage = async (req, res) => { 
    const { id } = req.params;

    try {
        const agencevoyage = await agencevoyage.findById(id);
        
        res.status(200).json(agencevoyage);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}



 const updateAgenceVoyage = async (req, res) => {
    const { id } = req.params;
    const {nom, adresse  , contacte   } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    const updateAgenceVoyage = { nom, adresse  , contacte ,  _id: id };

    await agencevoyage.findByIdAndUpdate(id, updateAgenceVoyage, { new: true });

    res.json(updateAgenceVoyage);
}

 const deleteAgenceVoyage= async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No event with id: ${id}`);

    await agencevoyage.findByIdAndRemove(id);

    res.json({ message: "agence deleted successfully." });
}
module.exports = {
    getAgenceVoyages,
    getAgenceVoyage,
    createAgenceVoyage,
    updateAgenceVoyage,
    deleteAgenceVoyage,
   
  };