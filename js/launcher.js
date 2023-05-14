'use strict'

const logout = document.querySelector('.logout');
const radianite = document.querySelector('.coins');
const rightsidebar = document.querySelector('.right-side-bar');
const addfriends = document.querySelector('.addfriends');



logout.addEventListener('click', function () {
    window.location.href = "../index.html";
})

radianite.addEventListener('mouseover', function () {
    radianite.style.opacity = 0.5;
})
radianite.addEventListener('mouseout', function () {
    radianite.style.opacity = 1;
})
