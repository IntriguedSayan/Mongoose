const express=require("express")
const {connecttion,MarksModel}=require("./Config/db")

const app=express()
app.use(express.json())

app.get("/",(req,res)=>{
    res.send("Homepage")
})

app.get("/marks",async(req,res)=>{

    const results=await MarksModel.find()
    res.send(results)
})
app.post("/addmarks",async(req,res)=>{
    const {mark1,mark2,remarks}=req.body
    const newMark=new MarksModel({
        mark1,mark2,remarks
    })
    await newMark.save()
    res.send("YOUR Data has been added")
})


app.listen(8080,async()=>{
    try{
        await connecttion
        console.log("Connected to DB Successfully")
    }catch(err){
        console.log(err)
    }
   
    console.log("Listening on 8080")
})