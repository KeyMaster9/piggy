import $ from 'jquery';

function isUserNamePresent() {
    let truthly = false;
    const $userName = $('#userName');
    if ($userName.val().length >= 6) {
        truthly = true;
    }
    return truthly;
}

function isPasswordPresent() {
    const $pass = $('#password').val();
    let truthly = false;
    if ($pass.length >= 8) {
        truthly = true;
    } else {
        truthly = false;
    }
    return truthly;
}

function disableRegisterButton() {
    $('#login-btn').attr('disabled', '1');
}
function enableRegisterButton() {
    $('#login-btn').removeAttr('disabled');
}

function loginButtonAllowed() {
    const userName = isUserNamePresent();
    const passwordValidated = isPasswordPresent();

    if (userName === true && passwordValidated === true) {
        enableRegisterButton();
    } else {
        disableRegisterButton();
    }
}

const $loginBtn = $('#login-btn');
$(() => {
    if ($loginBtn.length > 0) {
        const $registrationForm = $('#user-login-form');
        $registrationForm.keyup(() => loginButtonAllowed());
    }
});
