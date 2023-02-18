// document.getElementById('btn-submit').addEventListener('click', function () {
//     const emailField = document.getElementById('user-email');
//     const email = emailField.value;
//     // get user password
//     const passwordField = document.getElementById('user-password');
//     const password = passwordField.value;
//     // check email and password
//     console.log(email, password);

//     //DO NOT VERIFY email and password on this client side
//     if (email === 'ares@gmail.com' && password === '123456') {
//         window.location.href = 'bank.html';
//     }
//     else {
//         alert('Invalid user');
//     }
// });

document.getElementById('btn-submit').addEventListener('click', function () {
    // get user email
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    // get user password
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    // check email and password
    //DO NOT VERIFY email and password on this client side
    if (email == 'ares@gmail.com' || password == '123456') {
        window.location.href = 'bank.html';
    }
    else {
        alert('Invalid user');
    }
});