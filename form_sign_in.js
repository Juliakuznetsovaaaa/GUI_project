import {setFormValue, validateEmail} from "/utils.js"



const email_login = document.getElementById('email_login');
email_login.oninput = (e) => setFormValue('email_login', e.target, validateEmail);

/*const password_login = document.getElementById('password_login');
password_login.oninput = (e) => setFormValue('password_login', e.target, validatePassword);*/


const sign_up_page_btn = document.getElementById('sign_up_page_btn');

sign_up_page_btn.addEventListener('click', () => {
    window.location.href = 'sign_up.html';
});
