const form = document.querySelector('form');
const card_1 = document.querySelector('.card');
const card_2 = document.querySelector('.card-2');
const email = document.querySelector('#email');
const dismiss = document.querySelector('.dismiss');
let userEmail = document.querySelector('.userEmail');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    card_1.classList.add("hide")
    card_2.classList.remove("hide")
    userEmail.innerHTML = email.value
})

dismiss.addEventListener("click",(e) => {
    email.value = "";
    card_1.classList.remove("hide")
    card_2.classList.add("hide")
} )