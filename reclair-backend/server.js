import express from 'express';
import cors from 'cors';
import connectDB from './config/db.js';
import projectRoute from './routes/projectRoute.js'
import userRoute from './routes/userRoute.js'



// trying to update for git

const app = express();

app.use(cors())
app.use(express.json())

const uri = "mongodb+srv://reclair:byI95MK0lRkneSLZ@reclair.ekmf628.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
console.log(uri);


async function run(){
    try{
<<<<<<< HEAD

=======

        const usersCollections = client.db('reclair').collection('allusers');

        app.post('/allusers', async(req,res)=>{
            const user = req.body;
            const result = await usersCollections.insertOne(user)
            res.send(result)
        })

        


>>>>>>> 653b6558b7063d78479e07c55bf36a4a89a03793
    }



    finally{

    }
}


run().catch(console.log())

app.get('/', async(req,res)=>{
    res.send("sustiknow server test running")
<<<<<<< HEAD
=======

>>>>>>> 653b6558b7063d78479e07c55bf36a4a89a03793
})





app.use('/api/project', projectRoute);

app.use('/api/user', userRoute);

const port = process.env.PORT || 5000;

app.listen(port,()=>{
    console.log(`the server running port 5000 ${port}`)
})
