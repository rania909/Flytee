const mongoose =require("mongoose");

const agencetransport = require( '../models/agencetransport.js');


const createAgenceTransport = async (req, res) => {
  const { nom, adresse  , contacte } = req.body;

  const newagencetransport = new agencetransport({ nom, adresse  , contacte  })

  try {
      await newagencetransport.save();

      res.status(201).json(newagencetransport );
  } catch (error) {
      res.status(409).json({ message: error.message });
  }
}

 const getAgenceTransports = async (req, res) => { 
    try {
        const agencetransport = await agencetransport.find();
                
        res.status(200).json(agencetransport);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

 const getAgenceTransport = async (req, res) => { 
    const { id } = req.params;

    try {
        const agencetransport = await agencetransport.findById(id);
        
        res.status(200).json(agencetransport);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}



 const updateAgenceTransport = async (req, res) => {
    const { id } = req.params;
    const {nom, adresse  , contacte   } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    const updateAgenceTransport = { nom, adresse  , contacte ,  _id: id };

    await agencetransport.findByIdAndUpdate(id, updateAgenceTransport, { new: true });

    res.json(updateAgenceTransport);
}

 const deleteAgenceTransport= async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No event with id: ${id}`);

    await agencetransport.findByIdAndRemove(id);

    res.json({ message: "agence deleted successfully." });
}
module.exports = {
    getAgenceTransports,
    getAgenceTransport,
    createAgenceTransport,
    updateAgenceTransport,
    deleteAgenceTransport,
   
  };