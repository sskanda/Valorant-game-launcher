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
            var name = usernameinput.value
            sessionStorage.setItem("profilename", name);
            var baseurl = window.location.href;
            // add any authentication logic here
            if (passinput.value.length < 8) {
                document.querySelector('.passerror').textContent = "Must be at least 8 characters";
                document.querySelector('.passerror').style.color = "red";
                document.querySelector('.passerror').style.visibility = "visible";
                passinput.style.borderColor = "red";
            }
            else if (!specialChars.test(passinput.value)) {
                document.querySelector('.passerror').textContent = "Must contain at least 1 special character";
                document.querySelector('.passerror').style.color = "red";
                document.querySelector('.passerror').style.visibility = "visible";
                passinput.style.borderColor = "red";
            }
            else {
                this.form.submit();
                window.location.href = "views/loading.html";  //temp fix to encode urls
            }


        })
    }

}

const usernameinput = document.querySelector('.usernameinput');
const eye = document.querySelector('.fa-eye-slash');
const passinput = document.querySelector('.passinput');
const fbbutton = document.querySelector('.fb');
const submitbutton = document.querySelector('.submit');
const loginform = document.querySelector('.loginform');
const user = document.querySelectorAll('.user');
const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;


// // eye icon functionality
if (eye != null) {
    eye.addEventListener('click', function (e) {
        if (e != null) {
            e.preventDefault();
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
        }

    })
}


// login functionality
if (loginform) {
    const fields = [usernameinput.value, passinput.value];
    const validator = new Login(loginform, fields);
}

