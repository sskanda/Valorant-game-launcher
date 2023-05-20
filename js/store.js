'use strict'
// const rightsidebar = document.querySelector('.right-side-bar');
// const addfriends = document.querySelector('.addfriends');
// const profilename = document.querySelector('#name1');
const paybutton = document.querySelectorAll('.btn-pay');
const backbutton = document.querySelector('.goback');

onload = () => {
    if (sessionStorage.getItem("profilename") != null) {
        var name = sessionStorage.getItem("profilename")
        if (name != null && name != "")
            profilename.textContent = name;
        else
            profilename.textContent = "Player One";
    }
    else {
        alert("Not an authorized User. Please Sign-In");
        window.location.href = "../index.html";
    }

}

onload();

var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 1
        // slideShadows: true,
    },
    loop: true
});

backbutton.addEventListener('click', function () {
    console.log("clicked?");
    window.location.href = "../views/launcher.html";
})