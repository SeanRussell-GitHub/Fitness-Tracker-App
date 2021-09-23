const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const Workout = require('./models/workout');

const PORT = process.env.PORT || 3000;

const User = require("./models/userModel");
const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/fitness-tracker-app", { useNewUrlParser: true });

app.post('/api/workouts', async (req, res) => {
  Workout.create(req.body)
    .then(dbUser => {
      res.json(dbUser);
    })
    .catch(err => {
      res.json(err);
    });
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
