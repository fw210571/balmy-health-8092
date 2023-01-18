let register_button = document.getElementById("register-button") 

register_button.addEventListener("click" , async (event)=>{
        event.preventDefault() ;

        //catching data from inputs
    let name = document.getElementById("name").value ;
    let email = document.getElementById("email").value ;
    let password = document.getElementById("password").value ;
    let city = document.getElementById("city").value  ;

    let userObj = { name , email , password , city } ;

    if( name && email && password ){
        try{
            const response = await fetch( "" , {
                method: "POST" ,
                headers:{
                    "Content-Type" : "application/json" 
                } ,
                body : JSON.parse(userObj) 
            }) ;
            let result = response.json() ;
            console.log(result) ;
    
        }catch(err){
            alert("404_not_found") ;
        }
        

    }else {
        alert("please fill the details first")

    }
    


} )