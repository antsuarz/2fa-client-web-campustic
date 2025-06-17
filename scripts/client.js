const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const loginRequest = {
        username: username,
        password: password
    };

    console.log(loginRequest);

    if((password === "18436572" && username === "chevy") || 
            (password === "kenobi" && username === "ben") || 
            (password === "hansolo" && username === "leia") || 
            (password === "maggie" && username === "matt") || 
            (password === "gandalf" && username === "baggins") || 
            (password === "qwerty" && username === "sholes")){
                window.location.href = '2fa.html';
        }
        console.error('Error:', error);
        const errorMessage = document.getElementById('errorMessage');
        errorMessage.style.display = 'block';
        errorMessage.textContent = error.message;
   ;
});
