const mongoose =require("mongoose");

const dentistes = require( '../models/dentiste.js');



 const getDentistes = async (req, res) => { 
    try {
        const dentiste = await dentistes.find();
                
        res.status(200).json(dentiste);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

 const getDentiste = async (req, res) => { 
    const { id } = req.params;

    try {
        const dentiste = await dentistes.findById(id);
        
        res.status(200).json(dentiste);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

 const createDentiste = async (req, res) => {
    const { nom_dentiste, adresse  , specialite , description } = req.body;
 
    const newdentiste = new dentistes({ nom_dentiste, adresse , specialite , description  })

    try {
        await newdentiste.save();

        res.status(201).json(newdentiste );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

 const updateDentiste = async (req, res) => {
    const { id } = req.params;
    const { nom_dentiste, adresse , specialite , description  } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    const updateDentiste = { nom_dentiste, adresse , specialite , description  , _id: id };

    await dentistes.findByIdAndUpdate(id, updateDentiste, { new: true });

    res.json(updateDentiste);
}

 const deleteDentiste = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No event with id: ${id}`);

    await dentistes.findByIdAndRemove(id);

    res.json({ message: "Banking deleted successfully." });
}
module.exports = {
    getDentistes,
    getDentiste,
    createDentiste,
    updateDentiste,
    deleteDentiste,
   
  };