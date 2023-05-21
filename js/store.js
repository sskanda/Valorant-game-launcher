'use strict'
// const rightsidebar = document.querySelector('.right-side-bar');
// const addfriends = document.querySelector('.addfriends');
// const profilename = document.querySelector('#name1');
const paybutton = document.querySelectorAll('.btn-pay');
const backbutton = document.querySelector('.goback');
const payment = document.querySelectorAll('.payment');

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
    window.location.href = "/views/launcher";
})


//paypal
for (let i = 1; i <= payment.length; i++) {
    paypal.Buttons({
        // Order is created on the server and the order id is returned
        createOrder: function (data, actions) {
            return actions.order.create({
                purchase_units: [{
                    amount: {
                        value: '1'
                    }
                }]
            })
        },
        onApprove: function (data, actions) {
            return actions.order.capture().then(function (details) {
                alert("Payment Successful");
            })
        },
        onError: function (err) {
            alert("OOPs!! Something went wrong");
        }
    }).render(`#btn-${i}`);



}


