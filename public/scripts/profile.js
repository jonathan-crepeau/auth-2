console.log('profile.js reporting for duty..');

async function isVerified() {
    await fetch('http://localhost:4002/api/v1/verify', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'credentials': 'include'
        }
    })
        .then((response) => response.json())
        .then((data) => {
            if (data.status === 401) {
                window.location = '/login'
            }
            console.log(data);
        })
        .catch((error) => console.log(error));
}

isVerified();