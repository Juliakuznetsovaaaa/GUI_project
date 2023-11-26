const first_name_id = 'first_name'
const last_name_id = 'last_name'
const password_id = 'password'
const email_id = 'email'
const repeat_password_id = 'repeat_password'

const sign_in_link_id = 'sign_in_link'
const sign_up_form_id = 'sign_up_form'
const sign_in_form_id = 'sign_in_form'
const sign_up_btn_id='sign_up_btn_id'
const formValues = {}
const formValidation = {}
const getValidationStatus = () => {
    return Object.values(formValidation).every((validationStatus) => !!validationStatus)
}
const setFormValue = (valueKey, target, validator ) => {
    formValues[valueKey] = target.value
    if (validator) {
        formValidation[valueKey] = validator(target.value);
        target.classList.remove('invalid', 'valid')
        target.classList.add(formValidation[valueKey] ? 'valid' : 'invalid')
    }
}
const validatePassword = (password) => {
    console.log("valide  password")

    const regExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{3,}$/
    return String(password)
        .match(regExp);
}
const validateRepeatPassword = (repeatPassword) => {
    console.log("valide repeat password")

    console.log(formValues.password)
    return repeatPassword === formValues.password;
}



const validateEmail = (email) => {
    const regExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    console.log("valide email")

    return String(email)
        .toLowerCase()
        .match(regExp);
}

const first_name = document.getElementById(first_name_id);
first_name.oninput = (e) => setFormValue(first_name_id, e.target.value)

const last_name = document.getElementById(last_name_id);
last_name.oninput = (e) => setFormValue(last_name_id, e.target.value)

const email = document.getElementById(email_id);
email.oninput = (e) => setFormValue(email_id, e.target, validateEmail)

const password = document.getElementById(password_id);
password.oninput = (e) => setFormValue(password_id, e.target, validatePassword)

const repeat_password = document.getElementById(repeat_password_id);
repeat_password.oninput = (e) => setFormValue(repeat_password_id, e.target, validateRepeatPassword)

const email_login = document.getElementById('email_login');
email_login.oninput = (e) => setFormValue('email_login', e.target, validateEmail);

const password_login = document.getElementById('password_login');
password_login.oninput = (e) => setFormValue('password_login', e.target, validatePassword);

const submitSignUpForm = () => {
    if (!getValidationStatus()) {
        console.log("FORM IS INCORRECT")
        return false
    }
    console.log("FORM IS FINE")
    console.log(formValues)
    return true
}
const sign_up_btn = document.getElementById(sign_up_btn_id);
sign_up_btn.onclick = (e) => {
    e.preventDefault()
    submitSignUpForm()
}