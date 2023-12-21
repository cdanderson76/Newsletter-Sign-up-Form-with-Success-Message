// Ensures 

document.addEventListener('DOMContentLoaded', function () {
    
    const form = document.querySelector('form');
    const email = form.querySelector('input[type="email"]');
    const inputField = document.querySelector('input');
    const invalidRd = document.querySelector('.invalid');
    
    // console.log(form);
    // console.log(email);
    
    form.addEventListener('submit', function (event) {
    event.preventDefault();

    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if ( ! validEmail.test(email.value)) {
        form.classList.add('invalid');
    } else {
        form.classList.remove('invalid')
        form.submit()
    }
    
    })
});