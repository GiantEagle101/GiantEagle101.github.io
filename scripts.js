const userLogin = (username, password) => {
    try{ // catch errors for username and password during login 
            let inputElement= document.getElementById('username-input');
            let inputValue= inputElement.value;
            let newMessage= document.createElement("div");
            newMessage.textContent= inputValue;
            console.log(newMessage.textContent);
            const userName= username;
            const passWord= password;
            const errorMessage = error-message;
        } catch (error){
            console.log("wrong username or password, try again!", error.message);
        }
        const userName= username.value;
        const passWord= password.value;

        if (username==="user" && password=== "password"){
            message("You are logged in");
            location.reload;}

        else {
            errorMessage.style.opacity=1;
        }
}

loginButton.addEventListener("click", userLogin);

    

    


