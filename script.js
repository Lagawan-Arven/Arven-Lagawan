
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

/* PROJECTS SECTION*/
/* Demo Button*/
document.getElementById("demo1").addEventListener("click",function(){
    window.open("https://lagawan-arven.github.io/Arven-Lagawan", "_blank");
});
document.getElementById("demo2").addEventListener("click",function(){
    window.open("https://fastapi-ecommerce-api-19f7.onrender.com/docs#", "_blank");
});
/* Codes Button*/
document.getElementById("codes1").addEventListener("click",function(){
    window.open("https://github.com/Lagawan-Arven/Arven-Lagawan", "_blank");
});
document.getElementById("codes2").addEventListener("click",function(){
    window.open("https://github.com/Lagawan-Arven/FastAPI-core-ecommerce-api", "_blank");
});

/* Send a message from the form */
API_URL = "https://connection-messagees-api.onrender.com";

async function send_message(){
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const content = document.getElementById("content").value;

    const message = {name,email,content};

    await fetch(`${API_URL}/message`,{
        method: "POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify(message)
    });
}
/* Form submit button */
document.getElementById("submit").addEventListener("click",send_message);