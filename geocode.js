
const request = require ("request")
const geocode = (adress,callback)=>{
    const geocodeurl ="https://api.mapbox.com/geocoding/v5/mapbox.places/"+adress+".json?proximity=-74.70850,40.78375&access_token=pk.eyJ1IjoibWFoYTc3IiwiYSI6ImNsZjJ5dGwwMTAwZ2kzc283N2Fnam1kcjgifQ.JuGRp0fW7oqMW3SBjauCkw"
    request({url :geocodeurl , json:true}, (error,response)=>{

        if(error){
            callback ("ERROR",undefined)
        }else if(response.body.error){
            callback(response.body.error.messege , undefined)
        }else if (response.body.features.length==0){
            callback("ERROR Location",undefined)
        }else{
            callback(undefined,{
                longtitude:response.body.features[0].center[0],
                latitude:response.body.features[0].center[1]
            })
        }

    })
   
}

module.exports = geocode