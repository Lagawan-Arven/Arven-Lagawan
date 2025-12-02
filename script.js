

/* hamburger*/
const hamburger = document.querySelector(".hamburger");
const nav_Links = document.querySelector(".nav-links");

hamburger.addEventListener("click",()=>{
   nav_Links.classList.toggle("active");
});

/* Connect with me*/
document.getElementById("connect-button").addEventListener("click" , function(){
    window.location.href = "#Contact";
});


