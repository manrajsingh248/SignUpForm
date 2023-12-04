const phone = document.querySelector('#phone');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const confirmPass = document.querySelector('#confirm-pass');
const errorMessage = document.querySelector(".errorMessage");
const image = document.querySelector('.image');


function sidebar() {
    image.classList.toggle('show');
}

window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
        sidebar.classList.remove('show');
    }
});


const inputs = [email, phone, password, confirmPass];

inputs.forEach(item => {
    item.addEventListener('focusin', () => {
        errorMessage.textContent = ""
        item.classList.remove("error")
        if(item = password || item == confirmPass) {
            password.classList.remove("error")
            confirmPass.classList.remove("error")
        }
    });
});

const submit = (e) => {
    e.preventDefault();
    if(password.value != confirmPass.value) {
        password.classList.add("error")
        confirmPass.classList.add("error")
        errorMessage.textContent = "Passwords don't match"
    return
    }

    if (!phone.value.match (
        /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/
    )) {
        phone.classList.add("error")
        errorMessage.textContent = "Please enter a 10 digit phone number"
        return
    }

    if(password.value.length < 8) {
        password.classList.add("error")
        errorMessage.textContent = "Password must be at least 8 characters long"
        return
    }

    if(!password.value.match(/[a-z]/)) {
        password.classList.add("error")
        errorMessage.textContent = "Password must have at least 1 lowercase letter"
        return
    }

    if(!password.value.match(/[A-Z]/)) {
        password.classList.add("error")
        errorMessage.textContent = "Password must have at least 1 uppercase letter"
        return
    }

    if(!password.value.match(/[0-9]/)) {
        password.classList.add("error")
        errorMessage.textContent = "Password must have at least 1 number"
        return
    }

    errorMessage.textContent = "Account sucessfully created";
};

const form = document.querySelector("form");


form.addEventListener("submit", submit);