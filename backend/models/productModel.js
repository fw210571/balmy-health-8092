const mongoose = require("mongoose") ;

const productSchema = mongoose.Schema({
    title : String ,
    img : String ,
    price : Number ,
    category : String ,
    location : String  
}) ;

const ProductModel = mongoose.model("productsCollection" , productSchema ) ;

module.exports = { ProductModel } ;