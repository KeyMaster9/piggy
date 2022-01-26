import $ from 'jquery';

function passwordValidation() {
    const $pass = $('#old-password').val();
    const $pass2 = $('#new-password').val();
    const $pass3 = $('#new-password-confirm').val();
    console.log($pass, $pass2, $pass3);
    var truthly = false;
    if ($pass.length >= 8 && $pass2.length >= 8 && $pass3.length >= 8) {
        if ($pass2 === $pass3) {
            truthly = true;
        } else {
            truthly = false;
        }
    } else {
        truthly = false;
    }
    return truthly;
}

function emailValidation() {
    var truthly = false;
    const $email = $('#email');
    if ($email.val().length >= 5) {
        truthly = true;
    }
    return truthly;
}

function disableRegisterButton() {
    $('#reset-btn').attr('disabled', '1');
}
function enableRegisterButton() {
    $('#reset-btn').removeAttr('disabled');
}

function resetButtonAllowed() {
    var emailAddress = emailValidation();
    var passwordValidated = passwordValidation();

    if (emailAddress === true && passwordValidated === true) {
        enableRegisterButton();
    } else {
        disableRegisterButton();
    }
}

// const $reset = $('#reset-btn');
// $(() => {
//     if ($reset.length > 0) {
//         const $resetForm = $('#user-reset-form');
//         $resetForm.keyup(() => registerButtonAllowed())
//     }
// })