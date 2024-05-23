<<<<<<< HEAD
//function userLogin(username, password)
    //try{ // catch errors for username and password during login 
//function userLogin(username, password){
   // try{ // catch errors for username and password during login 
            //let inputElement= document.getElementById('username-input');
            //let inputValue= inputElement.value;
            //let newMessage= document.createElement("div");
            //newMessage.textContent= inputValue;
            //console.log(newMessage.textContent);
            //const login= new userLogin();
            //login.username= "username";
            //login.password= "password";
            //login.errorMessage= "error-message";
        //} catch (error){
            //console.log("wrong username or password, try again!", error.message);
       // }
           // console.log(newMessage.textContent);
            //const login= new userLogin();
            //login.username= "username";
           // login.password= "password";
            //login.errorMessage= "error-message";
       // } catch (error){
            //console.log("wrong username or password, try again!", error.message);
       // }
//loginButton.addEventListener("click");{
  //  const userName= username.value;
    //const passWord= password.value;
=======
>>>>>>> e2a02acd10dc35f2b04e744fe7aa4b97b812a893
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

}

loginButton.addEventListener("click", login);

