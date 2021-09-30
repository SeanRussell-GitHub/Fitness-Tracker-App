const mongoose = require('mongoose');
const express = require("express");
const logger = require('morgan');
const app = express();
const PORT = process.env.PORT || 80;
require('dotenv').config();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(logger('dev'));
app.use(express.static('public'));

mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://Jump1234:Jump#1234@cluster0.nmdai.mongodb.net/test', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
}).catch( (err) => {
    console.log("Error from moongoose is ", err)
}
);

app.use(require('./routes/apiRoutes'));
app.use(require('./routes/htmlRoutes'));

app.listen(PORT, () => console.log(`App running on http://localhost:${PORT}`));
