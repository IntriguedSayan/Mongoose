const mongoose=require("mongoose")
const connection= mongoose.connect("mongodb://127.0.0.1:27017/web21")



const marksSchema=mongoose.Schema({

    mark1:Number,
    mark2:Number,
    remarks:{type:String, required:true}

})
const MarksModel = mongoose.model("mark",marksSchema)

// const connectDB=async()=>{
//    const conn=await mongoose.connect("mongodb://127.0.0.1:27017/web21")
   
//    console.log("Connected to database")

//    const result=await MarksModel.find()
//    console.log(result)

    // const new_marks=await MarksModel.insertMany([{mark1:85,
    // mark2:45,remarks:"Excellecnt"}]) 
        // console.log(new_marks)
        const obj=new MarksModel({
            mark1:60,
            mark2:65,
            remarks:"GOOD"
        })
        const new_marks= obj.save()
        console.log(new_marks)


//    conn.disconnect()

// }
module.exports={
    connection,
    MarksModel
}
// connectDB()







