const express=require("express");
const testArr = require("./testArr");
const app=express();
const cors = require('cors');

const corsOptions = {
    origin: '*', // Allow all origins
  };
  
  app.use(cors(corsOptions));
const PORT =process.env.PORT ||3001;
if(!PORT){
throw Error("PORT is not Defiend!")

}

app.get("/data",async(req,res)=> {

try{
return res.send(testArr.data)
}catch(error){
return res.send(error)


}
}
)

app.listen(PORT,()=>{
console.log("app listining on port --=>",PORT)

})