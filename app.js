const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const authRouter = require("./routes/auth");
const apartmentRouter = require('./routes/apartment');


//----------------------------------------- END OF IMPORTS---------------------------------------------------
mongoose.connect(
	"mongodb://localhost:27017/BookingAppDevelopment",
	{
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useFindAndModify: true
	},
).then(() => console.log("Mongoose Is Connected"));

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
	cors({
		origin: "http://localhost:3000", // <-- location of the react app were connecting to
		credentials: true,
	})
);

//----------------------------------------- END OF MIDDLEWARE---------------------------------------------------


app.use(express.json());
app.use("/", authRouter);
app.use("/", apartmentRouter);

app.listen(4000, () => {
	console.log(`Server started on 4000`);
});
