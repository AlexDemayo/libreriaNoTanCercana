window.addEventListener('load', function() {
    const form = document.getElementById('passwordForm-js');
    const password = document.getElementById('password-P');
    const newPassword = document.getElementById('newPassword-P');
    const newPassword2 = document.getElementById('newPassword2-P');
  
 
    
   
    
    form.addEventListener('submit', e => {


        if(!checkInputs()){
            e.preventDefault();
        }

    });
    
    function checkInputs() {
      
        const passwordValue = password.value.trim();
        const password2Value = newPassword.value.trim();
        const repassword2Value = newPassword2.value.trim();
	    
        let contador = 0;



        if(passwordValue === '') {
            setErrorFor(password, 'El campo de contraseña no puede estar vacio');
            contador ++;
        } else if (passwordValue.length < 8){
            setErrorFor(password, 'El campo de contraseña debe tener almenos 8 caracteres');
            contador ++;
        }else{    
            setSuccessFor(password);
        }


        if(password2Value === '') {
            setErrorFor(newPassword, 'El campo de contraseña no puede estar vacio');
            contador ++;
        } else if (password2Value.length < 8){
            setErrorFor(newPassword, 'El campo de contraseña debe tener almenos 8 caracteres');
            contador ++;
        } else{
            setSuccessFor(newPassword);
        }

        if(repassword2Value === '') {
            setErrorFor(newPassword2, 'Repetir contraseña no puede estar vacio');
            contador ++;
        } else if(password2Value !== repassword2Value) {
            setErrorFor(newPassword2, 'Las contraseñas no coinciden');
            contador ++;
        } else{
            setSuccessFor(newPassword2);
        }
        
        if (contador < 1){
            return true
        }else return false
        
        
       
    }
    
    function setErrorFor(input, message) {
        const formControl = input.parentElement;
        const small = formControl.querySelector('small');
        formControl.className = 'user-div form-C error';
        small.innerText = message;
    }
    
    function setSuccessFor(input) {
        const formControl = input.parentElement;
        formControl.className = 'user-div form-C success';
    }
        
    
    
});