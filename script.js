"use strict";

function credits() {
    Swal.fire({
        title:'Website Made by Łukasz Jakubowski',
        text:'Find me Here',
        
        footer:'<a href="https://github.com/ThatLukaszGuy" target="_blank">Github| </a>' + 
        '<a href="https://www.instagram.com/lukasz_jakubowski_29/" target="_blank"> Instagram|</a>'+' lukasz.jakubowski@onet.eu',
        showClass: {
            popup: 'animate__animated animate__fadeInDown'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
          },
        confirmButtonColor: '#d33',
        confirmButtonText: 'Go Back'
    })
}




const header = document.getElementById("navbar");


document.addEventListener("scroll", (e) => {
   let scroll = this.scrollY
   console.log(scroll);


   if (window.scrollY) {
      header.classList.add("farbe");
   }
   if (scroll == 0) {
      header.classList.remove("farbe");
   }
   
   
})
