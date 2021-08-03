const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
require('dotenv').config();

const app = express();
app.use(express.json())


// Database connection
mongoose.connect(process.env.MONGO_CONNECTION_STRING,{
    useNewUrlParser : true,
    useUnifiedTopology : true,
    useFindAndModify:false,
    useCreateIndex: true,
})
.then(()=> console.log('Database connection established'))
.catch(err => console.log(err))


// import routes
const authRoutes = require('./routers/authRouter')

//app middleware
app.use(morgan('dev'))
app.use(cors())
app.use(bodyParser.json())

//middleware
app.use('/api', authRoutes)


const port = process.env.PORT
app.listen(port, ()=>{
    console.log(`listening on port ${port}`)
})