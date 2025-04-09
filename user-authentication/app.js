function validateLogin() {
    let username = document.getElementById("username").value.trim();
    let password = document.getElementById("password").value.trim();
    let result = document.getElementById("output");
    
    if (!username || !password) {
        output.innerText = "Validation Error";
        return;
    }
    
    if (username === "Rediska" && password === "123456") {
        result.innerText = `Hello ${username}, your password is correct`;
    } else if (username === "Rediska") {
        result.innerText = "Incorrect password";
    } else if (password === "123456") {
        result.innerText = "Incorrect username";
    }
}