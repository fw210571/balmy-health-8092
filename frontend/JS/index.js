
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







