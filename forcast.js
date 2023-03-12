const request = require("request")
const forcast = (longtitude,latitude ,callback)=>{
    const forcasturl ="http://api.weatherapi.com/v1/current.json?key=3878f9db95844dbe8db172140230803&q="+longtitude +","+latitude
    request({url:forcasturl , json:true},(error,response)=>{
        if(error){
            callback("ERROR",undefined)
        }else if(response.body.error){
            callback(response.body.error.massege , undefined)
        }else{
            callback(undefined, response.body.location.name + " it's " + response.body.current.condition.text)
        }
    })
}



module.exports= forcast