const  express = require('express');
const { getAgenceVoyages ,getAgenceVoyage, createAgenceVoyage  , updateAgenceVoyage, deleteAgenceVoyage} = require( '../controllers/agenceVoyageController');

const router = express.Router();


router.get('/', getAgenceVoyages);
router.post('/add', createAgenceVoyage);
router.get('/:id', getAgenceVoyage);
router.patch('/:id', updateAgenceVoyage);
router.delete('/:id', deleteAgenceVoyage);

module.exports= router
 