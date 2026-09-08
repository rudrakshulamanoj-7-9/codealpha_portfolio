const menuBtn=document.getElementById("menuBtn");
const navLinks=document.getElementById("navLinks");

menuBtn.addEventListener("click",()=>{
    navLinks.classList.toggle("show");
    const icon=menuBtn.querySelector("i");
    icon.classList.toggle("fa-bars");
    icon.classList.toggle("fa-xmark");
});

document.querySelectorAll(".nav-links a").forEach(link=>{
    link.addEventListener("click",()=>{
        navLinks.classList.remove("show");
        const icon=menuBtn.querySelector("i");
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    });
});

const sections=document.querySelectorAll("section[id]");
const navItems=document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{
    let current="";
    sections.forEach(section=>{
        if(window.scrollY>=section.offsetTop-150){
            current=section.getAttribute("id");
        }
    });
    navItems.forEach(link=>{
        link.classList.toggle("active",link.getAttribute("href")==="#"+current);
    });
});

const topBtn=document.getElementById("topBtn");

window.addEventListener("scroll",()=>{
    topBtn.style.display=window.scrollY>500?"flex":"none";
});

topBtn.addEventListener("click",()=>{
    window.scrollTo({top:0,behavior:"smooth"});
});