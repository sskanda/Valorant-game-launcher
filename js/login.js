'use strict'
// new swup = new Swup();
class Login {
    constructor(form, fields) {
        this.form = form;
        this.fields = fields;
        this.validateonSubmit();
    }
    validateonSubmit() {
        this.form.addEventListener('submit', (e) => {
            e.preventDefault();
            var baseurl = window.location.href;
            console.log("inside class");
            // add any authentication logic here
            if (usernameinput.value == "valorant" && passinput.value == "valorant123") {
                this.form.submit();
                submitbutton.style.background = "red";
                window.location.href = baseurl + "views/loading.html";  //temp fix to encode urls
            }

            else
                alert("Wrong Credentials");

        })
    }

}

const eye = document.querySelector('.fa-eye-slash');
const usernameinput = document.querySelector('.usernameinput');
const passinput = document.querySelector('.passinput');
const fbbutton = document.querySelector('.fb');
const submitbutton = document.querySelector('.submit');
const loginform = document.querySelector('.loginform');
const user = document.querySelectorAll('.user');


console.log(window.location.href);
// // eye icon functionality
eye.addEventListener('click', function (e) {
    e.preventDefault();

    console.log("clicked")
    if (passinput.type == 'password') {
        passinput.type = "text";
        eye.classList.remove('fa-eye-slash');
        eye.classList.add('fa-eye');
    }
    else {
        passinput.type = "password";
        eye.classList.remove('fa-eye');
        eye.classList.add('fa-eye-slash');
    }
    if (document.hasFocus())
        eye.style.opacity = 1;
    else
        eye.style.opacity = 0;
})

// login functionality
if (loginform) {
    const fields = ["username", "password"];
    const validator = new Login(loginform, fields);
}

