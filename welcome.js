const signUpPageButton = document.getElementById('sign_up_page_btn');
signUpPageButton.addEventListener('click', () => {
    window.location.href = "sign_up.html";
});

const signInPageButton = document.getElementById('sign_in_page_btn');
signInPageButton.addEventListener('click', () => {
    console.log("sign in...")
    window.location.href = "sign_in.html";
});