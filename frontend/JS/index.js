
let nav_acc_button = document.getElementById("account") ;
let refresher = document.getElementById("logo-div") ;

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


//  Slider js
 let imgmidSlideShow = [  
        "https://cdn.plotch.io/image/upload/C/V/1671110178_SG9tZWRlY29yLnBuZw==.png" ,
        "https://cdn.plotch.io/image/upload/C/V/1671110161_Mi5wbmc=.png" ,
        "https://cdn.plotch.io/image/upload/C/V/1671110155_NC5wbmc=.png"
     ] ;

    //    let countMID = 1 ;
    //    let imageMID = document.getElementById("showImgmid") ;
    //    let slide_show_mid = ()=>{
    //    imageMID.src = imgmidSlideShow[countMID] ;
    //    countMID++ ;
    //    if(countMID==4){
    //       countMID = 0 ;
    //    }
       
    // } 
    // setInterval( slide_show_mid , 4500 ) ;