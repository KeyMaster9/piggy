import $ from 'jquery';

function isForenamePresent() {
    let truthly = false;
    const $forename = $('#forename');
    if ($forename.val().length >= 1) {
        truthly = true;
    }
    return truthly;
}
function isSurnamePresent() {
    let truthly = false;
    const $surname = $('#surname');
    if ($surname.val().length >= 1) {
        truthly = true;
    }
    return truthly;
}
function isUserNamePresent() {
    let truthly = false;
    const $userName = $('#userName');
    if ($userName.val().length >= 6) {
        truthly = true;
    }
    return truthly;
}

function passwordValidation() {
    const $pass = $('#password').val();
    const $pass2 = $('#password-confirm').val();
    let truthly = false;
    if ($pass.length >= 8) {
        if ($pass === $pass2) {
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
    let truthly = false;
    const $email = $('#email');
    if ($email.val().length >= 5) {
        truthly = true;
    }
    return truthly;
}

function disableRegisterButton() {
    $('#register').attr('disabled', '1');
}
function enableRegisterButton() {
    $('#register').removeAttr('disabled');
}

function registerButtonAllowed() {
    const forename = isForenamePresent();
    const surname = isSurnamePresent();
    const emailAddress = emailValidation();
    const userName = isUserNamePresent();
    const passwordValidated = passwordValidation();

    if (forename === true
    && surname === true
    && emailAddress === true
    && userName === true
    && passwordValidated === true) {
        enableRegisterButton();
    } else {
        disableRegisterButton();
    }
}

const $register = $('#register');
$(() => {
    if ($register.length > 0) {
        const $registrationForm = $('#user-registration-form');
        $registrationForm.keyup(() => registerButtonAllowed());
    }
});
