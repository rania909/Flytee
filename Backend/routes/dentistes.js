const  express = require('express');
const { getDentiste ,getDentistes, createDentiste  , updateDentiste, deleteDentiste} = require( '../controllers/dentistesController');

const router = express.Router();


router.get('/', getDentistes);
router.post('/', createDentiste);
router.get('/:id', getDentiste);
router.patch('/:id', updateDentiste);
router.delete('/:id', deleteDentiste);

module.exports= router
 