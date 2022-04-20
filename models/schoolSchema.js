const mongoose=require("mongoose")
const schoolSchema=new mongoose.schema({
name:{
    type:String,
    require:true
},
level:{
    type:String,
    require:true
},
category:{
    type:String,
    require:true
},
numOfStudents:{
    type:String,
    require:true
},
location:{
    type:String,
    require:true
},
address:{gps:string,
      box:string
},
contact:{
    phone:string,
    fax:string
}


},{
    timestamps:true
})
const school=mongoose.model("school",schoolschema)
module.exports=school;