

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
    

// rendering the categorize data 
let categorizeProduct =  async (query)=>{
    try {
        //fetching data from backend
        let response = await fetch(`https://wild-pink-ray-gown.cyclic.app/products?category=${query}` , {
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
    





//sorting data in ascending/decending order
let asc_dec_Product =  async (order)=>{

    try {
        //fetching data from backend
        let response = await fetch(`https://wild-pink-ray-gown.cyclic.app/products/${order}` , {
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



    let displayItem  =  document.querySelector("#show-product") ;

    // display function
    function showme( data ){
        displayItem.innerHTML = "" ;
      data.forEach( (element) => {
    
            let divu = document.createElement("div") ;
            
            let img =  document.createElement("img") ;
            img.src = element.img ;

            let title =  document.createElement("h3") ;
            title.innerText = element.title ;

            let price =  document.createElement("p") ;
            price.style.color = "red" ;
            price.innerText = `Price: ${element.price}` ;

            let desrip =  document.createElement("p") ;
            desrip.innerText = element.description ;

            let button = document.createElement("button") ;
            button.innerText = "ADD TO CART"  ;

             divu.append( img , title , price , desrip ,button) ;
             displayItem.append(divu) ;
    }) ;
    
}



// event listener for Asc/dec the data 
const sorting = document.getElementById("filter-price") ;

sorting.addEventListener("change" , ()=>{
    const orderValue = sorting.value ;
    asc_dec_Product(orderValue)
})

// event listener for category 
const categorize = document.getElementById("filter-category") ;

categorize.addEventListener("change" , ()=>{

    const queryValue = categorize.value ;
    categorizeProduct(queryValue) ;
})
