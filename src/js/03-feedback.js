import throttle from "lodash.throttle";

const STORAGE_KEY = "feedback-form-state";
let formObject = {};

const refs = {
    form: document.querySelector('.feedback-form'),
    textarea: document.querySelector('.feedback-form textarea'),
    input: document.querySelector('.feedback-form input'),
}

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onInput, 500));

getValue();

function onFormSubmit(evt) {
    evt.preventDefault();

    if (!formObject[refs.input.name] || !formObject[refs.textarea.name]){
        alert('All fields must be filled');
    } else {
        console.log(formObject);
        evt.currentTarget.reset();
        localStorage.removeItem(STORAGE_KEY);

        formObject[refs.input.name] = '';
        formObject[refs.textarea.name] = '';
    }

};

function onInput(evt) {
    // console.log(evt.target.name);
    // console.log(evt.target.value);
    formObject[evt.target.name] = evt.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formObject));
};

function getValue() {
    const savedMessage = localStorage.getItem(STORAGE_KEY);
    const parsedMessage = JSON.parse(savedMessage);

    if (parsedMessage) {

        refs.input.value = parsedMessage.email;
        formObject.email = refs.input.value;

        refs.textarea.value = parsedMessage.message;
        formObject.message = refs.textarea.value;
    }

}
