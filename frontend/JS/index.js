
let nav_acc_button = document.getElementById("account") ;
let refresher = document.getElementById("logo-div") ;
let productPage1 = document.getElementById("decoration") ;
let productPage2 = document.getElementById("nearme") ;
let productPage3 = document.getElementById("decoration_") ;
let productPage4 = document.getElementById("bag") ;
let productPage5 = document.getElementById("kitchen") ;
let productPage6 = document.getElementById("mug") ;
let productPage7 = document.getElementById("idol") ;

//sigin/login button
if( nav_acc_button ){
    nav_acc_button.addEventListener("click" , ()=>{
        window.location.href = "register.html";
    }) ;
}

//refesh page or re directing to Home page
if( refresher ){
    refresher.addEventListener("click" , ()=>{
        window.location.href = "index.html";
    }) ;
}


    //   Event listents for product page
    if(productPage1){
        productPage1.addEventListener("click" , ()=>{
            window.location.href = "product.html" ;
        
        }) ;
    }
    
    if(productPage2){
        productPage2.addEventListener("click" , ()=>{
            window.location.href = "product.html" ;
        
        }) ;
    }
   
    if(productPage3){
        productPage3.addEventListener("click" , ()=>{
            window.location.href = "product.html" ;
        
        }) ;
    }
    
    if(productPage4){
        productPage4.addEventListener("click" , ()=>{
            window.location.href = "product.html" ;
        
        }) ;
    }
    
    if(productPage5){
        productPage5.addEventListener("click" , ()=>{
            window.location.href = "product.html" ;
        
        }) ;
    }
   
    if(productPage6){
        productPage6.addEventListener("click" , ()=>{
            window.location.href = "product.html" ;
        
        }) ;
    }
   
    if(productPage7){
        productPage7.addEventListener("click" , ()=>{
            window.location.href = "product.html" ;
        
        }) ; 
    }
    




//  Interval image js
 let imgmidSlideShow = [  
        "https://cdn.plotch.io/image/upload/C/V/1671110178_SG9tZWRlY29yLnBuZw==.png" ,
        "https://cdn.plotch.io/image/upload/C/V/1671110161_Mi5wbmc=.png" ,
        "https://cdn.plotch.io/image/upload/C/V/1671110155_NC5wbmc=.png"
     ] ;

       let countMID = 1 ;
       let imageMID = document.getElementById("interval") ;

       if(imageMID ){
        let slide_show_mid = ()=>{
            imageMID.src = imgmidSlideShow[countMID] ;
            countMID++ ;
            if(countMID==3){
               countMID = 0 ;
            }
            
         } 
         setInterval( slide_show_mid , 4500 ) ;
       }
      