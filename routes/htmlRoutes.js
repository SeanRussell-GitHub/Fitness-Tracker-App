const router = require("express").Router();
const path = require('path');
// const indexHTML = path.join(__dirname, '../public/index.html');
// const statsHTML = path.join(__dirname, '../public/stats.html');
// const exerciseHTML = path.join(__dirname, '../public/exercise.html');


router.get('/', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '../public/index.html'));
});

router.get('/stats', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '../public/stats.html'));
});

router.get('/exercise', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '../public/exercise.html'));
});

module.exports = router;