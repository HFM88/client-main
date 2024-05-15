const switch_form_button = document.getElementById('switch-form');
const login_button = document.getElementById('login-button');
const signup_button = document.getElementById('signup-button');
const login_form = document.getElementById('login-form');
const signup_form = document.getElementById('signup-form');

function updateFormsBasedOnHash() {
    if (window.location.hash === '#login') {
        switch_form_button.setAttribute('href', '#register');
        login_form.style.display = 'block';
        switch_form_button.innerText = "Login here"
        signup_form.style.display = 'none';
    } else if (window.location.hash === '#register') {
        switch_form_button.setAttribute('href', '#login');
        login_form.style.display = 'none';
        switch_form_button.innerText = "Register here"
        signup_form.style.display = 'block';
    }
}

// Listen for hash changes to update forms
window.addEventListener('hashchange', updateFormsBasedOnHash);

// Switch form button click event
switch_form_button.addEventListener('click', function(e) {
    e.preventDefault();
    if (window.location.hash === '#login') {
        window.location.hash = '#register';
    } else if (window.location.hash === '#register') {
        window.location.hash = '#login';
    }
});

document.addEventListener("DOMContentLoaded" , function(){
    if (window.location.hash == ""){
        window.location.hash = '#login';
    }
    updateFormsBasedOnHash();
});