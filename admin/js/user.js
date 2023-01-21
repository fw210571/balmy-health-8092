

// rendering the user data using below function
 let render =  async ()=>{

    try {
        //fetching data from backend
        let response = await fetch("http://localhost:9090/users/" , {
            method : "GET" ,
            headers:{
                "Content-Type" : "application/json"
            }
        }) ;
       
        let data = await response.json() ;
    
        //calling the display function
        showme(data) ;
        
    }catch(error){
    alert(error) ;
    console.log(error)
    }
    } ;
    render() ;
    


    let displayItem  =  document.querySelector("#users-div") ;
    let userNum  =  document.querySelector("#users_num") ;
    // display function
    function showme( data ){
        displayItem.innerHTML = "" ;
      data.forEach( (element) => {
    
        
            let divcard = document.createElement("div") ;
            
            let id =  document.createElement("p") ;
            id.innerText = `ID : ${element._id}`  ;
    
            let name =  document.createElement("p") ;
            name.innerText =   `Name : ${element.name}` ;
    
            let email =  document.createElement("p") ;
            email.innerText = `Email : ${element.email}`  ;
    
            let password =  document.createElement("p") ;
            password.innerText = `Password : ${element.password}` ;
    
            let city =  document.createElement("p") ;
            city.innerText = `City : ${element.city}`  ;
    
             divcard.append( id , name , email , password  , city ) ;
             displayItem.append(divcard) ;
        
    }) ;
    userNum.innerHTML = data.length ;

}

//delete function 
let delete_button = document.getElementById("delete") ;

delete_button.addEventListener("click" , async ()=>{

    let ID = document.getElementById("delete-id").value ;

    if( ID ){
        try{
            const response = await fetch(`http://localhost:9090/users/delete/${ID}` , {
                method : "DELETE" ,
                headers:{
                        "Content-Type" : "application/json"
                } 
            }) ;
            const result = await response.json() ;
           // console.log(result) ;
            if(result.msg = "user deleted") {

                render() ;
                alert("user deleted") ;


            }else{
                console.log(result) ;
                alert(result.msg) ;
            }

        }catch(err){
            console.log({"msg":err , "solution":"restart the server and please enter the correct ID"}) ;
        }

    }else{
        alert("Please enter ID first") ;
    }

}) ;