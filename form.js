import {setFormValue, submitSignUpForm, validateEmail, getValidationStatus} from "/utils.js"

const first_name_id = 'first_name'
const last_name_id = 'last_name'
const email_id = 'email'



const first_name = document.getElementById(first_name_id);
first_name.oninput = (e) => setFormValue(first_name_id, e.target.value)  // Установить значение без валидации

const last_name = document.getElementById(last_name_id);
last_name.oninput = (e) => setFormValue(last_name_id, e.target.value)

const email = document.getElementById(email_id);
email.oninput = (e) => setFormValue(email_id, e.target, validateEmail) // Установить значение с валидацией

/*const password = document.getElementById(password_id);
password.oninput = (e) => setFormValue('password', e.target, validatePassword) // Установить значение с валидацией

const repeat_password = document.getElementById(repeat_password_id);
repeat_password.oninput = (e) => setFormValue('repeat_password', e.target, validateRepeatPassword)*/ // Установить значение с валидацией

const sign_in_page_btn = document.getElementById('sign_in_page_btn');
sign_in_page_btn.addEventListener('click', () => {
    window.location.href = 'sign_in.html';
});
// Добавляем обработчики событий для всех полей ввода
/*const switch_to_sign_in = document.getElementById(sign_in_link_id);
switch_to_sign_in.onclick = (e) => {
    document.getElementById(sign_up_form_id).style.display = "none";
    document.getElementById(sign_in_form_id).style.display = "";


}*/
