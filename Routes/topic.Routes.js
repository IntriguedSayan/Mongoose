const {Router}=require("express")
const {TopicModel}=require("../Models/TopicModel")

const topicController=Router()

topicController.get("/",async(req,res)=>{
    const result=await TopicModel.find()
    res.send(result)
})

topicController.post("/addTopic",async(req,res)=>{
    const payload=req.body
    const new_topic=new TopicModel(payload)
    await new_topic.save()
    res.send("Success")
})

module.exports={
    topicController,
}


