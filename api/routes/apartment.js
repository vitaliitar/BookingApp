const express = require('express');

const {
  createApartment,
  getAllApartments,
  updateApartment,
  deleteApartment,
} = require('../controllers/apartment');

const router = express.Router();

router.get('/apartments', getAllApartments);
router.post('/apartment', createApartment);
router.put('/apartment/:id', updateApartment);
router.delete('/apartment/:id', deleteApartment);

module.exports = router;
