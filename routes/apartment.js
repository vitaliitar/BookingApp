const express = require('express');
const upload = require("../utils/uploadConfig");

const {
  createApartment,
  getAllApartments,
  updateApartment,
  deleteApartment,
} = require('../controllers/apartment');

const router = express.Router();

router.get('/apartments', getAllApartments);
router.post('/apartment', upload.array('imgCollection', 6), createApartment);
router.put('/apartment/:id', updateApartment);
router.delete('/apartment/:id', deleteApartment);

module.exports = router;
