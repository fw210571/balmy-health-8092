let login_button = document.getElementById("login-button") 

login_button.addEventListener("click" , async (event)=>{
        event.preventDefault() ;

        //catching data from inputs
    let email = document.getElementById("email").value ;
    let password = document.getElementById("password").value ;
   
    let userObj = { email , password } ;

    if( email && password ){
        try{
            //requesting the backend to get response 
            const response = await fetch( "https://wild-pink-ray-gown.cyclic.app/users/login" , {
                method: "POST" ,
                headers:{
                    "Content-Type" : "application/json" 
                } ,
                body : JSON.stringify(userObj) 
            }) ;
            let result = await response.json() ;

            if(  result.token  ){

             
                 console.log( result.token ) ; 

                 //giving token in session storage for access the product
                 sessionStorage.setItem("token" , result.token )
                 alert(result.msg) ;
                 window.location.href = "index.html" ;
            
            }else if( result.msg == "Please first register the email" ){
                console.log( result.msg ) ; 
                alert(result.msg) ;
                window.location.href = "register.html" ; 
            }else{
                console.log( result.msg ) ;
                alert(result.msg) ;
            }
    
        }catch(err){
             console.log({"404_not_found" : err} )
             alert({"404_not_found" : err}) ;
        }
    }else {
        alert("please fill the details first")

    }
} )