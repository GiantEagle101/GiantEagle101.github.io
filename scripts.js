function userLogin(username, password){
    try{
            let inputElement= document.getElementById('username-input');
            let inputValue= inputElement.value;
            let newMessage= document.createElement("div");
            newMessage.textContent= inputValue;
            console.log(newMessage.textContent);
        } catch (error){
            console.log("wrong username or password, try again!", error.message);
        }

    }
   

function newItem(){
    
}