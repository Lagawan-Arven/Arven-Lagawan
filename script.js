
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

/*form */
document.getElementById("contactForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    const res = await fetch("https://lagawan-arven.github.io/Arven-Lagawan/", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(data)
    });

    document.getElementById("response").innerText = await res.text();
});