//first form select korlam
const form = document.getElementById("form");

//2nd username input ta select korlam
 const username = document.getElementById("username");

 //3th email input ta select korlam
 const email = document.getElementById("email");

 //4th password input ta select korlam
 const password = document.getElementById("password");

//5ft password2 input ta select korlam
 const password2 = document.getElementById("password2");

 // Show error message
function showError(input, message){
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

//Show Success Outline
function showSuccess(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
  
}

//Email validation
function isValidEmail(email){
    const re =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  return re.test(String(email).toLocaleLowerCase());
}


 //Event Listeners used korlam
 form.addEventListener('submit', function(e){
 
    e.preventDefault();
   //username ar jonno if ,else 
    if(username.value === ``){
        showError(username, 'username is required');
    }
    else{
        showSuccess(username);
    } 
    
    //email ar jonno if ,else 
    if(email.value === ``){
        showError(email, 'Email is required');
    }else if(!isValidEmail(email.value)){
        showError(email, 'Email is not valid');
    }
    else{
        showSuccess(email);
    } 

   //password ar jonno if ,else 
    if(password.value === ``){
        showError(password, 'Password is required');
    }
    else{
        showSuccess(password);
    }
    
    //password2 ar jonno if ,else 
    if(password2.value === ``){
        showError(password2, 'Conformation of password  is required');
    }
    else{
        showSuccess(password2);
    } 
 } )