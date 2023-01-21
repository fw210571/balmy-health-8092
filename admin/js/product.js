// rendering the user data using below function
let renderProduct =  async ()=>{
    try {
        //fetching data from backend
        let response = await fetch(`http://localhost:9090/products` , {
            method : "GET" ,
            headers:{
                "Content-Type" : "application/json" 
            }
        }) ;
       
        let data = await response.json() ;
    
        //calling the display function
        if( data.msg ){

            alert("Please login first") ;
           // window.location.href = "login.html" ;

        }else{
            showme(data) ;
        }

    }catch(error){
        alert(error) ;
        console.log(error)
    }
 } ;
renderProduct() ;



let displayItem  =  document.querySelector("#product-div") ;
// display function
function showme( data ){
    displayItem.innerHTML = "" ;
  data.forEach( (element) => {

        let divu = document.createElement("div") ;

        let ID =  document.createElement("p") ;
        ID.innerHTML = `ID:  ${element._id}` ;
        
        let img =  document.createElement("img") ;
        img.src = element.img ;

        let title =  document.createElement("p") ;
        title.innerText = `Title:  ${element.title}` ;

        let price =  document.createElement("p") ;
        price.style.color = "red" ;
        price.innerText = `Price:  ${element.price}` ;

        let desrip =  document.createElement("p") ;
        desrip.innerText = `Description:  ${element.description}` ;

        divu.append( img , ID ,  title , price , desrip) ;
        displayItem.append(divu) ;

}) ;
} ;

let add_productButton = document.getElementById("product_button") ;

add_productButton.addEventListener("click" , async (event)=>{
      
    event.defaultPrevented() ;
    
    let title = document.getElementById("title").value ;
    let img = document.getElementById("img").value ;
    let price = document.getElementById("price").value ;
    let category = document.getElementById("category").value ;
    let description = document.getElementById("description").value ;

    const payload = {title , img , price , category , description } ;

    try{
        let response = await fetch(`http://localhost:9090/products/add` , {
            method : "GET" ,
            headers:{
                "Content-Type" : "application/json" 
            } ,
            body : JSON.stringify(payload) 
        }) ;
        let data = await response.json() ;
        console.log(data) ;


    }catch(err){
        console.log(err) ;
        
    }
} )
