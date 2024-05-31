const email = document.getElementById("email");
const password = document.getElementById("password");
const loginButton = document.getElementById("sign-in");
const loginInfo = new Map();
loginInfo.set("irwin.jiang@gianteagle.com", "Password");
loginInfo.set("Test@gianteagle.com", "Password1234");

const login = () => {
    const errorMessage = document.getElementById("error-message");
    if(errorMessage){
        errorMessage.parentNode.removeChild(errorMessage);
        
    }
    if(email.value === "" || password.value === ""){
        const HTMLString = `
        <p id="error-message">No login info found</p>
        `
        loginButton.insertAdjacentHTML('afterend', HTMLString);
        return;
    }
    
    if(loginInfo.has(email.value)){
        if(loginInfo.get(email.value) === password.value){
            window.location.href="Home.html";
            return;
        }
    }
    
    const HTMLString = `
    <p id="error-message">Email or password is incorrect</p>
    `
    loginButton.insertAdjacentHTML('afterend', HTMLString);

    email.value = "";
    password.value = "";
}

loginButton.addEventListener("click", login);

