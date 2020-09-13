const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const passport = require("passport");
const passportLocal = require("passport-local").Strategy;
const cookieParser = require("cookie-parser");
const bcrypt = require("bcryptjs");
const session = require("express-session");
const bodyParser = require("body-parser");
const app = express();
const User = require("./models/User");
const authRouter = require("./routes/auth")


//----------------------------------------- END OF IMPORTS---------------------------------------------------
mongoose.connect(
	"mongodb://localhost:27017/BookingAppDevelopment",
	{
		useNewUrlParser: true,
		useUnifiedTopology: true,
	},
	() => {
		console.log("Mongoose Is Connected");
	}
);

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
	cors({
		origin: "http://localhost:3000", // <-- location of the react app were connecting to
		credentials: true,
	})
);
// app.use(
// 	session({
// 		secret: "secretcode",
// 		resave: true,
// 		saveUninitialized: true,
// 	})
// );
// app.use(cookieParser("secretcode"));
// app.use(passport.initialize());
// app.use(passport.session());
// require("./passportConfig")(passport);

//----------------------------------------- END OF MIDDLEWARE---------------------------------------------------


app.use(express.json());
app.use("/", authRouter);

app.listen(4000, () => {
	console.log(`Server started on 4000`);
});
