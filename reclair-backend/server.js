import express from 'express';
import cors from 'cors';
import connectDB from './config/db.js';
import projectRoute from './routes/projectRoute.js'

const app = express();

app.use(cors())
app.use(express.json())

connectDB();

app.get('/', async(req,res)=>{
    res.send("sustiknow server running")
})

app.use('/api/project', projectRoute)



const port = process.env.PORT || 5000;

app.listen(port,()=>{
    console.log(`the server running port 5000 ${port}`)
})
