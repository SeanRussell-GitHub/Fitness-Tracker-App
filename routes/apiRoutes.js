const router = require('express').Router();
const Workout = require('../models/workout.js');

router.post('/api/workouts', (req, res) => {
    Workout.create({})
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.json(err);
      });
  });

// router.get('/api/workouts', (req, res) => {
//     Workout.find()
//     .then(dbWorkouts => {
//         res.json(dbWorkouts);
//     })
//     .catch(err => {
//         res.json(err);
//     });
// });

router.get('/api/workouts', async (req, res) => {
    //await connect;
  
    const aggData = await Workout.aggregate([
      { $addFields: { totalDuration: { $sum: '$exercises.duration' } } },
    ]);
  
    res.status(200).json(aggData);
  });

router.delete('/api/workouts', ({ body }, res) => {
    Workout.findByIdAndDelete(body.id)
    .then(() => {
        res.json(true);
    })
    .catch(err => {
        res.json(err);
    });
});

// router.get('/api/workouts/range', (req, res) => {
//     Workout.find({})
//     .then(dbWorkouts => {
//         console.log(dbWorkouts)
//         res.json(dbWorkouts);
//     })
//     .catch(err => {
//         res.json(err);
//     });
// });

router.get('/api/workouts/range', async (req, res) => {
    const weekAgo = new Date();
    weekAgo.setDate(weekAgo.getDate() - 7);
  
    const aggData = await Workout.aggregate([
      { $match: { day: { $gt: weekAgo } } },
      { $addFields: { totalDuration: { $sum: '$exercises.duration' } } },
    ]);
  
    res.status(200).json(aggData);
  });

router.put('/api/workouts/:id', ({ body, params }, res) => {
    Workout.findByIdAndUpdate(
        params,
        { $push: { exercises: body } },
        { new: true, runValidators: true }
    )
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.json(err);
    });
});

module.exports = router;