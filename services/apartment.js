const Apartment = require('../models/Apartment');
const User = require('../models/User');

module.exports = {
  getAllApartments: async () => Apartment.find({}),
  createApartment: async (payload) => {
    const { ownerId } = payload;
    User.findById(ownerId, (err) => {
      if (err) {
        throw new Error(err.message);
      }
    });

    const apartment = new Apartment(payload);

    return apartment.save();
  },
  updateApartment: async (id, payload) => Apartment.findByIdAndUpdate(
    id,
    payload,
    { new: true },

    (err) => {
      if (err) throw new Error(err.message);
    },
  ),
  deleteApartment: async (id) => Apartment.findByIdAndRemove(id, (err) => {
    if (err) throw new Error(err.message);
  }),
};
