// Ensures 

document.addEventListener('DOMContentLoaded', function () {
    
    const form = document.querySelector('form');
    const email = form.querySelector('input[type="email"]');
    
    // console.log(form);
    // console.log(email);
    
    form.addEventListener('submit', function (event) {
    event.preventDefault();
    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if ( ! validEmail.test( email.value ) ) {
        form.classList.add( 'invalid' );
    } else {
        form.classList.remove('invalid')
        form.submit()
    }
    
    })
});