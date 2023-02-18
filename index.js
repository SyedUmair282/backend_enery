const express = require('express')
const app = express()
const port = 5000;
const dotenv = require("dotenv");
const mongoose = require('mongoose');
const usersRoute=require('./routes/usersRoute');
const userBillRoute=require('./routes/userBillRoute');
var cors = require('cors');
app.use(cors())

//env
dotenv.config();
const MONGO_URI="mongodb+srv://dbUmair:umairsyed9453@cluster0.qihnkdc.mongodb.net/energy_consumer_db?retryWrites=true&w=majority"
//mongodb connetcion
mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log("Connection successful");
}).catch((err) => {
    console.log("Connection not successfull", err);
});


//middleware
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use('/api/user/',usersRoute);
app.use('/api/bill/',userBillRoute);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
