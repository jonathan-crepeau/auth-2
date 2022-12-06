console.log('signup.js reporting for duty..');

const form = document.getElementById('signup-form');

const subFirstName = document.getElementById('first-name');
const subLastName = document.getElementById('last-name');
const subEmail = document.getElementById('email');
const subPassword = document.getElementById('password');

const handleSubmitClick = (event) => {
    const userData = {};
    event.preventDefault();
    console.log('Submit button has been clicked!');

    const formInputs = [...form.elements];
    // console.log(formInputs);
    // console.log(typeof formInputs);

    formInputs.forEach((input) => {
        userData[input.name] = input.value;
    })

    fetch('http://localhost:4002/api/v1/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    })
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((error) => console.log(error));


    // const newUser = {
    //     firstName: subFirstName.value,
    //     lastName: subLastName.value,
    //     email: subEmail.value,
    //     password: subPassword.value
    // };

    // console.log('New User ========');
    // console.log(newUser);
}

form.addEventListener('submit', handleSubmitClick);