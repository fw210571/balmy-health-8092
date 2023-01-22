// rendering the user data using below function
let renderProduct =  async ()=>{
    try {
        //fetching data from backend
        let response = await fetch(`https://wild-pink-ray-gown.cyclic.app/products` , {
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

let add_productButton = document.getElementById("form-product") ;

add_productButton.addEventListener( "submit" , async (event)=>{
      
    event.preventDefault() ;

    
    let title = document.getElementById("title").value ;
    let img = document.getElementById("img").value ;
    let price = document.getElementById("price").value ;
    let category = document.getElementById("category").value ;
    let description = document.getElementById("description").value ;
    let location = document.getElementById("location").value ;

    const payload = {title , img , price , category , description ,location} ;

    //checking details are filled or not 
if(title && img && price && category && description && location){

    try{
        let response = await fetch(`https://wild-pink-ray-gown.cyclic.app/products/add` , {
            method : "POST" ,
            headers:{
                "Content-Type" : "application/json" 
            } ,
            body : JSON.stringify(payload) 
        }) ;
        let data = await response.json() ;

        alert(data.msg) ;


    }catch(err){
        console.log(err) ;
        alert("there is some trouble") ;
    }
}else{
    alert("please fill the data first") ;
}
   
} )
