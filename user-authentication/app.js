function validateLogin() {
    let username = document.getElementById("username").value.trim();
    let password = document.getElementById("password").value.trim();
    let result = document.getElementById("output");
    
    if (!username || !password) {
        output.innerText = "Validation Error";
        return;
    }
    
    if (username === "username" && password === "password") {
        result.innerText = `Hello ${username}, your password is correct`;
    } else if (username === "user") {
        result.innerText = "Incorrect password";
    } else {
        result.innerText = "Incorrect username";
    }
}