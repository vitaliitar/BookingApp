const Apartment = require('../models/Apartment');
const User = require('../models/User');

module.exports = {
	getAllApartments: async () => {
		return Apartment.find({});
	},
	createApartment: async (payload) => {
		const { ownerId } = payload;
		User.findById(ownerId, (err, docs) => {
			if (err) {
				throw new Error(err.message);
			}
		});

		const apartment = new Apartment(payload);

		return apartment.save();
	},
	updateApartment: async (id, payload) => {
		return Apartment.findByIdAndUpdate(
			id,
			payload,
			{new: true},

			(err, msg) => {
				if (err) throw new Error(err.message);
			}
		);
	},
	deleteApartment: async (id) => {
		return Apartment.findByIdAndRemove(id, (err, msg) => {
			if (err) throw new Error(err.message);
		})
	}
}