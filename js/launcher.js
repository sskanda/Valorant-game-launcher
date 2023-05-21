'use strict'

const logout = document.querySelector('.logout');
const radianite = document.querySelector('.coins');
const rightsidebar = document.querySelector('.right-side-bar');
const addfriends = document.querySelector('.addfriends');
const profilename = document.querySelector('#name1');


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
        window.location.href = "/";
    }

}
logout.addEventListener('click', function () {
    window.location.href = "/";
    sessionStorage.removeItem("profilename");
})

radianite.addEventListener('mouseover', function () {
    radianite.style.opacity = 0.5;
})
radianite.addEventListener('mouseout', function () {
    radianite.style.opacity = 1;
})

onload();
