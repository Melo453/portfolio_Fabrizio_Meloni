const list=document.querySelectorAll(".navigation__list");function activeLink(){list.forEach((e=>e.classList.remove("active"))),this.classList.add("active")}list.forEach((e=>e.addEventListener("click",activeLink)));const text=document.querySelector(".inicio__move"),textLoad=()=>{setTimeout((()=>{text.textContent="Web developer"}),0),setTimeout((()=>{text.textContent="Freelancer"}),4015),setTimeout((()=>{text.textContent="Certified tech developer"}),8e3)};textLoad(),setInterval(textLoad,12e3),document.querySelector(".menu--mobile").addEventListener("click",animateBars);var line1=document.querySelector(".menu__bars1"),line2=document.querySelector(".menu__bars2"),line3=document.querySelector(".menu__bars3"),menu=document.querySelector(".navigation--mobile__nav");function animateBars(){line1.classList.toggle("activemenu__bars1"),line2.classList.toggle("activemenu__bars2"),line3.classList.toggle("activemenu__bars3"),menu.classList.toggle("active__menu")}const menuLinks=document.querySelectorAll('.navigation--mobile__list a[href^="#"]');function scrollUp(){const e=document.getElementById("scroll-up");this.scrollY>=560?e.classList.add("show-scroll"):e.classList.remove("show-scroll")}menuLinks.forEach((e=>{e.addEventListener("click",(function(){line1.classList.remove("activemenu__bars1"),line2.classList.remove("activemenu__bars2"),line3.classList.remove("activemenu__bars3"),menu.classList.remove("active__menu")}))})),window.addEventListener("scroll",scrollUp);const sections=document.querySelectorAll("section"),navLi=document.querySelectorAll(".navigation__nav ul li");window.addEventListener("scroll",(()=>{let e="";sections.forEach((t=>{const s=t.offsetTop,n=t.clientHeight;pageYOffset>=s-n/3.5&&(e=t.getAttribute("id"))})),navLi.forEach((t=>{t.classList.remove("active"),t.classList.contains(e)&&t.classList.add("active")}))}));