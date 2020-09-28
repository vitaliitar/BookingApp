const UserServices = require('../services/user.js');

module.exports = {
  signUp: async (req, res) => {
    try {
      const newUser = req.body;
      const savedUser = await UserServices.createUser(newUser);

      res.status(200).json({
        data: savedUser,
      });
    } catch (error) {
      res.status(400).json({
        error: error.message,
      });
    }
  },
  signIn: async (req, res) => {
    try {
      const payload = req.body;
      const token = await UserServices.signInUser(payload);
      res.status(200).json({
        token,
      });
    } catch (error) {
      res.status(400).json({
        error: error.message,
      });
    }
  },
};
