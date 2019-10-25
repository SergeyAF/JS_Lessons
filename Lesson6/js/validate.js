//У вас на странице есть три инпута, чекбокс(галочка) и кнопка "отправить" (итого: пять элементов).

//Ваша задача - написать валидацию. То есть, пользователь заполняет все поля, нажимает на кнопку "Отправить", а вы проверяете все ли поля заполнены корректно.

//Результат вывести в консоль (все хорошо/всё плохо).

//Список полей:
//Имя (больше 2-х символов и меньше - 40)
//Логин (должен быть заполнен/не пустой)
//Пароль (больше 8-ми символов, должна быть цифра, буква, большая буква)
//Галочка - "Прочитал условия" (должна быть включена)
//Если хоть одно из условий не совпадает, то форма не валидна.

const inputName = document.querySelector('input[name="nameInput"]');
const inputLogin = document.querySelector('input[name="loginInput"]');
const inputPass = document.querySelector('input[name="passInput"]');
const checkbox = document.querySelector('input[type="checkbox"]');
const btn = document.querySelector('.btn_validate');

btn.addEventListener('click', () => {
    if ((inputName.value.length < 3) || (inputName.value.length > 40)) {
        return console.log('Введите Имя от 3 до 39 символов');
    };
    if (inputLogin.value === ''){ 
        return console.log('Поле Login не должно быть пустым')
    };

    if ((inputPass.value.length < 9)||(!inputPass.value.match(/[A-ZА-Я]/))||(!inputPass.value.match(/[a-zа-я]/))||!inputPass.value.match( /\d/ )){
        return console.log('Введен неподходящий пароль. Пароль должен соответствовать критериям: больше 8-ми символов, должна быть цифра, буква, большая буква')
    };
    if (!checkbox.checked) {
        return console.log('Не приняты Условия соглашения');
    };
    return console.log('Все Хорошо');
})

