const express = require("express") ;
const jwt = require("jsonwebtoken") ;
const bcrypt = require("bcrypt") ;
require("dotenv").config() ;
const userRoute = express.Router() ;
const { UserModel } = require("../models/userModel") ;

//signing in user 
userRoute.post("/register" , async (req , res )=>{
     
    const { name , email , password } = req.body ;
    const user = await UserModel.findOne({email}) ;

    //checking email is exist already or not 
    if( user ){
        res.send( {"msg" : "Already Signed please Login"}) ;
    }else {
            try{
                //ecrypting the password using bcrypt
                bcrypt.hash( password , 3 , async (err , password)=>{
                    if( err ){
                    res.send( {"msg" : "Error in ecrypting the data"} ) ;
                    }else {
                    // saving user data at database 
                        const payload = new UserModel({name , email , password }) ;
                        await payload.save() ;
                        res.send( {"msg" : `${name} signed successfully`} ) ;
                    }
                } )
            }catch(err){
                res.send({"error from register" : err }) ;
            }
        
    }

})


//login user 
userRoute.post("/login" , async (req , res)=>{

      const {email , password } = req.body ;
      const user = await UserModel.findOne({email}) ;
      
      //checking user is exist or not 
      if( user ){   
                     //comparing the both password ( User_DB and req_User )
                     try{
                            bcrypt.compare(password , user.password ,  (err , result)=>{
                                if(result){
                                        const token = jwt.sign( { userID : user._id } , process.env.key ) ;
                                      
                                        res.send( {"msg" : "Logged in Successfully" , "token"  : token} ) ;
                                }else {
                                        
                                        res.send({"msg" : "Incorrect password"}) ;
                                }
                            })
                     }catch(err){
                            res.send({"error from login" : err }) ;
                     }
        


      }else {
        res.send({"msg" : "Please first register the email"}) ;

      }
})



module.exports = { userRoute } ;