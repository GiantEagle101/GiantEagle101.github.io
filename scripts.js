function userLogin(){
    let inputElement= document.getElementById('username-input');
    let inputValue= inputElement.value;
    let newMessage= document.createElement("div");
    newMessage.textContent= inputValue;
    console.log(newMessage.textContent);
}

function newItem(){
    
}