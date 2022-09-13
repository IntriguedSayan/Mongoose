const mongoose=require("mongoose")
require("dotenv").config()

const iaSchema=new mongoose.Schema({
    ia_name:String,
    course:String,
    branch:String
})



const IaModel=mongoose.model("ia",iaSchema)

module.exports={
    IaModel
}