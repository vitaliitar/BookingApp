const jwt = require("jsonwebtoken");

const getSignedToken = function (id) {
	return jwt.sign({ _id: id }, "SECRET", { expiresIn: "1hr" });
};

module.exports = getSignedToken;