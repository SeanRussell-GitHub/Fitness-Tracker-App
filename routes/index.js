const express = require('express');
const router = express.Router();
// const apiRoutes = require('./apiRoutes');
// const htmlRoutes = require('./htmlRoutes');

// router.use('/api', apiRoutes);
// router.use('/');
router.get("/", async (req, res) => {
    const result = await Post.find();
    res.status(200).json({
      message: "Some Data",
    });
  });
module.exports=router;