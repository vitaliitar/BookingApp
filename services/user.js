const bcrypt = require('bcryptjs');

const User = require('../models/User');
const getSignedToken = require('../utils/signedToken');

module.exports = {
  createUser: async (payload) => User.find({ email: payload.email })
    .exec()
    .then((user) => {
      if (user.length > 0) {
        throw new Error('User already exist');
      }
      return bcrypt
        .hash(payload.password, 10)
        .then((hashed) => {
          const newUser = new User({
            email: payload.email,
            password: hashed,
          });
          return newUser.save();
        })
        .catch(() => {
          throw new Error('All field required');
        });
    }),
  signInUser: (payload) => User.findOne({ email: payload.email })
    .exec()
    .then((user) => {
      if (!user) {
        throw new Error('Please enter email or password');
      } else {
        return bcrypt
          .compare(payload.password, user.password)
          .then((res) => {
            if (res) {
              const token = getSignedToken(user._id);
              return token;
            }
            throw new Error('Incorrect password or email, try again');
          })
          .catch(() => {
            throw new Error('All field required');
          });
      }
    }),
};
