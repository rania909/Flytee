const  express = require('express');
const { getListRendezVous ,getUnRendezVous, createUnRendezVous, updateUnRendezVous, deleteUnRendezVous} = require( '../controllers/rendezvousController.js');

const router = express.Router();


router.get('/', getListRendezVous);
router.post('/add', createUnRendezVous);
router.get('/:id', getUnRendezVous);
router.patch('/:id', updateUnRendezVous);
router.delete('/:id', deleteUnRendezVous);

module.exports= router
 