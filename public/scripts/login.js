console.log('login.js reporting for duty..');

const form = document.getElementById('login-form');

const handleSubmitClick = (event) => {
    let formIsValid = true;
    const userData = {};
    event.preventDefault();
    console.log('Sign in button was clicked');

    const formInputs = [...form.elements];
    formInputs.forEach((input) => {
        if (input.type !== 'submit' && input.value === '') {
            formIsValid = false;
        } else if (input.type === 'password' && input.value.length < 4) {
            formIsValid = false;
        }

        if (formIsValid) {
            userData[input.name] = input.value;
        }
    });

    if (formIsValid) {
        console.log('Submitting user data..');
        fetch('http://localhost:4002/api/v1/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'credentials': 'include',
            },
            body: JSON.stringify(userData)
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.status === 200) {
                    window.location = '/profile'
                }
                console.log(data);
            })
            .catch((error) => console.log(error));
    }
}

form.addEventListener('submit', handleSubmitClick);