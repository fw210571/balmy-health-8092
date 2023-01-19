let register_button = document.getElementById("register-button") 

register_button.addEventListener("click" , async (event)=>{
        event.preventDefault() ;
console.log( "here ")
        //catching data from inputs
    let name = document.getElementById("name").value ;
    let email = document.getElementById("email").value ;
    let password = document.getElementById("password").value ;
    let city = document.getElementById("city").value  ;

    let userObj = { name , email , password , city } ;

    if( name && email && password ){
        try{
            const response = await fetch( "http://localhost:9090/users/register" , {
                method: "POST" ,
                headers:{
                    "Content-Type" : "application/json" 
                } ,
                body : JSON.stringify(userObj) 
            }) ;
            let result = await response.json() ;
            //console.log(result.msg) ;
            alert(result.msg) ;
            if(result.msg == `${name} signed successfully` ){
                window.location.href = "login.html" ;
            }
            

    
        }catch(err){
             console.log({"404_not_found" : err} )
             alert({"404_not_found" : err}) ;
        }
    }else {
        alert("please fill the details first")

    }
} )