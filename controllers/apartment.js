const ApartmentServices = require('../services/apartment');
const { formatPath } = require('../services/image');

module.exports = {
  getAllApartments: async (req, res) => {
    const apartments = await ApartmentServices.getAllApartments();

    res.status(200).json({
      data: apartments,
    });
  },
  createApartment: async (req, res) => {
    try {
      const { files, body, hostname, protocol } = req;
      const savedApartment = await ApartmentServices.createApartment(
        body,
        formatPath(protocol, hostname, files),
      );

      res.status(201).json({
        data: savedApartment,
      });
    } catch (error) {
      res.status(400).json({
        error: error.message,
      });
    }
  },
  updateApartment: async (req, res) => {
    try {
      const data = req.body;
      const updatedApartment = await ApartmentServices.updateApartment(req.params.id, data);

      res.status(200).json({
        data: updatedApartment,
      });
    } catch (error) {
      res.status(400).json({
        error: error.message,
      });
    }
  },
  deleteApartment: async (req, res) => {
    try {
      const _id = req.params.id;
      await ApartmentServices.deleteApartment(_id);

      res.status(204).json({
        data: 'Deleted successfully',
      });
    } catch (error) {
      res.status(400).json({
        error: error.message,
      });
    }
  },
};
