document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for contacting us! We will get back to you soon.');
    document.getElementById('contact-form').reset();
});

document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === "student" && password === "password123") {
        alert('Login successful! Welcome ' + username);
    } else {
        alert('Invalid username or password. Please try again.');
    }
    document.getElementById('login-form').reset();
});
