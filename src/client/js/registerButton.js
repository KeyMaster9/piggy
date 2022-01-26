import $ from 'jquery';

function isForenamePresent() {
    var truthly = false;
    const $forename = $('#forename');
    if ($forename.val().length >= 1) {
        truthly = true;
    }
    return truthly;
}
function isSurnamePresent() {
    var truthly = false;
    const $surname = $('#surname');
    if ($surname.val().length >= 1) {
        truthly = true;
    }
    return truthly;
}
function isUserNamePresent() {
    var truthly = false;
    const $userName = $('#userName');
    if ($userName.val().length >= 6) {
        truthly = true;
    }
    return truthly;
}

function passwordValidation() {
    const $pass = $('#password').val();
    const $pass2 = $('#password-confirm').val();
    var truthly = false;
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
    var truthly = false;
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
    var forename = isForenamePresent();
    var surname = isSurnamePresent();
    var emailAddress = emailValidation();
    var userName = isUserNamePresent();
    var passwordValidated = passwordValidation();

    if (forename === true && surname === true && emailAddress === true && userName === true && passwordValidated === true) {
        enableRegisterButton();
        console.log(
            $('#forename').val(),
            $('#surname').val(),
            $('#email').val(),
            $('#username').val(),
            $('#password').val())
    } else {
        disableRegisterButton();
    }
}

const $register = $('#register');
$(() => {
    if ($register.length > 0) {
        const $registrationForm = $('#user-registration-form');
        $registrationForm.keyup(() => registerButtonAllowed())
    }
})