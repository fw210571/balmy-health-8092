const express = require("express") ;
const productRoute = express.Router() ;
const { ProductModel } = require("../models/productModel") ;

// productRoute.get("/" , async (req , res)=>{
    
//     try{

//     }catch(err){

//     }
// }) ;


productRoute.get("/" , async (req , res)=>{

    const search = req.query ;
   // res.send(search)
    
    try{
        const product = await ProductModel.find({search}) ;

        if(product){
            res.send(product) ;
        }else{
            res.send({"msg" : "product not found"})
        }


    }catch(err){
            res.send({"msg" : err})
    }
}) ;



module.exports = { productRoute } ;