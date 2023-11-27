const formValues = {}  // Сюда пишутся значения формы (Object как в Java, или dict из Python)
const formValidation = {}  // Сюда пишутся статусы валидации каждого поля. Если поле ни разу не валидировалось,

/*export const validatePassword = (password) => {
  const regExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{3,}$/
  return String(password)
      .match(regExp);
}
export const validateRepeatPassword = (repeatPassword) => {
  return repeatPassword === formValues.password;
}*/

export const validateEmail = (email) => {

  const regExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

  return String(email)
    .toLowerCase()
    .match(regExp);
}


export const getValidationStatus = () => {
  return Object.values(formValidation).every((validationStatus) => !!validationStatus)
}

export const setFormValue = (valueKey, target, validator) => {
  formValues[valueKey] = target.value
  if (validator) {
    formValidation[valueKey] = validator(target.value);
    target.classList.remove('invalid', 'valid')
    target.classList.add(formValidation[valueKey] ? 'valid' : 'invalid')
  }
}
export const submitSignUpForm = () => {
  if (!getValidationStatus()) {
    console.log("FORM IS INCORRECT")
    return false
  }
  console.log("FORM IS FINE")
  console.log(formValues)
  return true
}
