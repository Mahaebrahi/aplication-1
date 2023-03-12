
const geocode = require("./geocode")
const forcast = require ("./forcast")

const country = process.argv[2];
geocode(country,(error,data)=>{
    console.log("ERROR : ",error);
    console.log("DATA : " ,data);
    if(data){
        forcast(data.longtitude, data.latitude,(error,data)=>{
            console.log("ERROR : ", error);
            console.log("DATA :", data);
        })
    }else{
        console.log("data not found");
    }
   
})

