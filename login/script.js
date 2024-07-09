document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const correctUsername = 'xamen_parcial2';
    const correctPassword = 'Voyporel100';

    const messageElement = document.getElementById('message');

    if (username === correctUsername && password === correctPassword) {
        messageElement.textContent = 'Login successful! Redirecting in 5 seconds...';
        messageElement.style.color = 'green';

        // Redirect after 5 seconds
        setTimeout(function() {
            window.location.href = 'https://jca080896.projectsutd.online/project_unidad/';
        }, 5000);
    } else {
        messageElement.textContent = 'Invalid username or password.';
        messageElement.style.color = 'red';
    }
});


