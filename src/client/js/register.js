import $ from 'jquery';

console.log('register script loaded')

const $password = $('#password');
const $passwordConfirm = $('#password-confirm');

function clientPasswordValidation() {

    console.log
    if ($password.val() >= 8) {
        if ($password.val() === $passwordConfirm.val()) {
            $('#register').removeAttr('disabled');
            console.log('password matches')
        } else {
            $('#register').attr('disabled', '1')
            console.log('password does not match');
        }
    } else {
        $('#register').attr('disabled', '1')
        console.log('password does not match');
    }
}
const $register = $('#register')
$(() => {
    if ($register.length > 0) {
        $('#password-confirm').on('input', clientPasswordValidation());
        $('#password').on('input', clientPasswordValidation());
    }
})