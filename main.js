import express from 'express';
import servicesRouter from './routes/services.route.js';
import contactRouter from './routes/contact.route.js';
import connect from './library/db.js';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

const PORT = 3000



// connect db
connect()
dotenv.config()

// express
const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello World!', {message : "Hello All"})
    // res.json({message : "Hello All"})
})

app.get('/about', (req, res) => {
    // res.send('Hello World!')
    res.json({message : "Hello All"})
})

app.use('/services', servicesRouter)
app.use('/contact', contactRouter)

app.listen(PORT, ()=>{
    console.log(`Server is running on http://localhost:${PORT}`)
})