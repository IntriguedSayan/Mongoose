const express=require("express")
const {connection,}=require("./Config/dbone")
const TopicModel=require("./Models/TopicModel")
const IaModel=require("./Models/iamodel")
const {topicController}=require("./Routes/topic.Routes")

const app=express()
app.use(express.json())

app.get("/",(req,res)=>{
    res.send("Homepage")
})
app.use("/topics",topicController)

app.listen(7100,async()=>{
    try{
        await connection
        console.log("Listening on port 71000")
    }catch(err){
        console.log("Failed to connect to DB");
        console.log(err)
    }
    
})