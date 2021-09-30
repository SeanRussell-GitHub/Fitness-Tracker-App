const express = require('express');
const router = express.Router();

router.get("/", async (req, res) => {
    const result = await Post.find();
    res.status(200).json({
      message: "Some Data",
    });
  });
module.exports=router;