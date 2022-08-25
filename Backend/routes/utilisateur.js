const  express = require('express');
const { getUtilisateurs ,getUtilisateur, createUtilisateur, updateUtilisateur, deleteUtilisateur} = require( '../controllers/utilisateurConntroller.js');

const router = express.Router();


router.get('/', getUtilisateurs);
router.post('/', createUtilisateur);
router.get('/:id', getUtilisateur);
router.patch('/:id', updateUtilisateur);
router.delete('/:id', deleteUtilisateur);

module.exports= router
 