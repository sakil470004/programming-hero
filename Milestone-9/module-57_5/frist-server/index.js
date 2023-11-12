const express =require('express');
const jobs=require('./application.json');
const cors=require('cors');
const app=express();
app.use(cors())
const port=5000;
app.get('/',(req,res)=>{
    res.send('Hi server is running fine');
})
app.get('/jobs',(req,res)=>{
    res.send(jobs)
})
app.get('/job/:id',(req,res)=>{
    const id=parseInt(req.params.id);
    const findJob=jobs.find(job=>job.id===id) || {};
    res.send(findJob)
})

app.listen(port,()=>{
    console.log(`App is running port ${port}`)
})