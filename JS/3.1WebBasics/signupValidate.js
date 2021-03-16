let myValidation = () => {
    document.querySelector('.signupForm').addEventListener('submit', (event) => {

        event.preventDefault();

        let name = event.target.name.value;
        let email = event.target.email.value;
        let pass = event.target.pass.value;
        let repass = event.target.repass.value;

        function customElementText(customText) {
            document.querySelector('.signupForm').appendChild(document.createElement('p')).textContent = customText;
        }

        if (pass == repass) {
            customElementText(`Your name is ${name} and email is ${email}.`);
        } else {
            customElementText('Pass confirmation failed.');
        }

        event.target.name.value = '';
        event.target.email.value = '';
        event.target.pass.value = '';
        event.target.repass.value = '';
    });
};