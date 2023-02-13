

const express = require('express')
const cors = require('cors')
const app = express()
const { MongoClient, ServerApiVersion } = require('mongodb');
const port = process.env.PORT || 5000;

app.use(cors())
app.use(express.json())

const uri = "mongodb+srv://reclair:byI95MK0lRkneSLZ@reclair.ekmf628.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
console.log(uri);


async function run(){
    try{

    }



    finally{

    }
}


run().catch(console.log())

app.get('/', async(req,res)=>{
    res.send("sustiknow server test running")
})

app.listen(port,()=>{
    console.log(`the server running port 5000 ${port}`)
})
