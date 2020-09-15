const UserServices = require("../services/user.js");

module.exports = {
	signUp: async (req, res, next) => {
		try {
			const newUser = req.body;
			const savedUser = await UserServices.createUser(newUser);

			res.status(200).json({
				data: savedUser,
			});
		} catch (error) {
			console.log(error);
			res.status(500).json({
				error: error.message
			})
		}
	},
	signIn: async (req, res, next) => {
		try {
			const payload = req.body;
			const token = await UserServices.signInUser(payload);
			res.status(200).json({
				token: token,
			});
		} catch (error) {
			console.log(error);
			res.status(500).json({
				error: error.message
			})
		}
	}
}