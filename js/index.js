const toggler = document.querySelector(".toggler");
const menu = document.querySelector("#menu");
const navbarbrand = document.querySelector(".navbar-brand")
const navbarnav = document.querySelector(".navbar-nav")
const navs = document.querySelectorAll(".nav ul li:nth-child(n)")

toggler.addEventListener("click", () => {
  if(toggler.checked == true){
    navbarbrand.classList.toggle("disable");
    navbarnav.classList.toggle("disable");
    console.log("checked");
    menu.classList.toggle("active");
    navs.forEach((item) => {
      if(item.classList.contains("slide-out-blurred-right")){
        item.classList.remove("slide-out-blurred-right")
      }
      item.classList.toggle("slide-in-blurred-left")
    });
  }
  else{
    console.log("unchecked");
    navs.forEach((item) => {
      item.classList.replace("slide-in-blurred-left","slide-out-blurred-right")
    });
    setTimeout(() => {
      navbarbrand.classList.toggle("disable");
      navbarnav.classList.toggle("disable");
      menu.classList.toggle("active");
    }, 2000);
  }
});
