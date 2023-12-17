document.addEventListener('DOMContentLoaded', function () {
    const registrationButton = document.getElementById('registrationButton');

    if (registrationButton) {
        registrationButton.addEventListener('click', showRegistrationForm);
    } else {
        console.error('Элемент не найден.');
    }

    function showRegistrationForm() {
        Swal.fire({ // вызов окна
            title: 'Регистрация',
            html:
                '<label for="swal_username">Имя пользователя:</label>' +
                '<input id="swal_username" class="swal2-input" required>' +
                '<label for="swal_password">Пароль:</label>' +
                '<input id="swal_password" class="swal2-input" type="password" required>',
            focusConfirm: false,

            preConfirm: () => {  // выполняется перед закрытием окна
                const swalUsername = Swal.getPopup().querySelector('#swal_username').value; //возвращает DOM-элемент, представляющий всплывающее окно SweetAlert2.
                const swalPassword = Swal.getPopup().querySelector('#swal_password').value;

                if (swalUsername === "" || swalUsername.length < 4) {
                    Swal.showValidationMessage('Введите корректное имя пользователя');
                    return false;
                }

                if (swalPassword === "" || swalPassword.length < 4) {
                    Swal.showValidationMessage('Этот пароль недостающей длинны!');
                    return false;
                }

                console.log('Имя пользователя:', swalUsername);
                console.log('Пароль:', swalPassword);
            },
        });
    }
});