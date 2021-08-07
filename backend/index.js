const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const sgMail = require('@sendgrid/mail');
const morgan = require('morgan');
require('dotenv').config();
// const {sslcommerzSetup} = require('./middlewares/sscommerz');


const app = express();
app.use(express.json())

// send grid code
const API_KEYS ="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";
sgMail.setApiKey(API_KEYS)
const message ={
   // to :'rajd@gmail.com',
   
   //from:'abubakarsiddik652@gmail.com',
   to:['rajdev@gmail.com','yourstruly2607@gmail.com'],
   from:{
       name:'Ashik',
       email:'abubakarsiddik652@gmail.com'
   },
   subject:'Hello from sendgrid',
    text:'hello from sendgrid',
    html:'<h1> hello from sendgrid</h1>'
}
sgMail.send(message)
 .then(response => console.log('Email sent ...') )
 .catch((error) => console.log(error.message));


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

// sslcommerz setup
// app.use('/ssl-request', sslcommerzSetup);


const port = process.env.PORT
app.listen(port, ()=>{
    console.log(`listening on port ${port}`)
})