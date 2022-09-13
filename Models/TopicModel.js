const mongoose=require("mongoose")
require("dotenv").config()

const connection=mongoose.connect(process.env.MONGO_URL)

const topicSchema=new mongoose.Schema({
    topic_name:String,
})

const TopicModel=mongoose.model("topic",topicSchema)

module.exports={
    TopicModel
}