import express from 'express';
import cors from 'cors';
import connectDB from './config/db.js';
import projectRoute from './routes/projectRoute.js'
import userRoute from './routes/userRoute.js'

const app = express();

app.use(cors())
app.use(express.json())

const uri = "mongodb+srv://reclair:byI95MK0lRkneSLZ@reclair.ekmf628.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
console.log(uri);


async function run(){
    try{

        const usersCollections = client.db('reclair').collection('allusers');

        app.post('/allusers', async(req,res)=>{
            const user = req.body;
            const result = await usersCollections.insertOne(user)
            res.send(result)
        })

        


    }



    finally{

    }
}


run().catch(console.log())

app.get('/', async(req,res)=>{
    res.send("sustiknow server test running")
})





app.use('/api/project', projectRoute);

app.use('/api/user', userRoute);

const port = process.env.PORT || 5000;

app.listen(port,()=>{
    console.log(`the server running port 5000 ${port}`)
})
