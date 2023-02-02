import express from 'express'
import dotenv from 'dotenv'

dotenv.config()

const app = express()


app.get('/', (req,res)=>{
    res.send('hello')
})


const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`server is running at port ${PORT}`));