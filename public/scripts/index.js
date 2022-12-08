console.log('index.js reporting for duty..');

const logout = document.getElementById('logout');

const handleLogoutClick = (event) => {
    event.preventDefault();
    fetch('http://localhost:4002/api/v1/logout', {
        method: 'DELETE'
    })
        .then((response) => response.json())
        .then((data) => window.location = '/login')
        .catch((error) => console.log(error));
}

logout.addEventListener('click', handleLogoutClick);