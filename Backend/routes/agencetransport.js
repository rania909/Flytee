const  express = require('express');
const { getAgenceTransports ,getAgenceTransport, createAgenceTransport  , updateAgenceTransport, deleteAgenceTransport} = require( '../controllers/agenceTranportController');

const router = express.Router();


router.get('/', getAgenceTransports);
router.post('/add', createAgenceTransport);
router.get('/:id', getAgenceTransport);
router.patch('/:id', updateAgenceTransport);
router.delete('/:id', deleteAgenceTransport);

module.exports= router
 