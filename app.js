const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const authRouter = require('./routes/auth');
const apartmentRouter = require('./routes/apartment');
require('dotenv').config();

//  END OF IMPORTS
mongoose.connect(
  process.env.MONGO_PRODUCTION,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
  },
).then(() => console.log('Mongoose Is Connected'));

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cors({
    origin: 'http://localhost:3000', // <-- location of the react app
    credentials: true,
  }),
);

//  END OF MIDDLEWARE

app.use(express.json());
app.use('/', authRouter);
app.use('/', apartmentRouter);
app.use('/upload', express.static('upload'));

// Serve static assets if in production

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}
app.listen(process.env.PORT, () => {
  console.log('Server started on 4000');
});
