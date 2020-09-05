window.addEventListener('load', function() {
    const form = document.getElementById('configForm-js');
    const username = document.getElementById('user-C');
    const email = document.getElementById('email-C');
    const password = document.getElementById('password-C');
    const image = document.querySelector("form.img-js input.img-cf");
 
    
   
    
    form.addEventListener('submit', e => {
        
        if(!checkInputs()){
            e.preventDefault();
        }
    });
    
    function checkInputs() {
      
       
        const usernameValue = username.value.trim();
	    const emailValue = email.value.trim();
	    const passwordValue = password.value.trim();
	    
       
        let contador = 0;
        
        
        if(usernameValue === '') {
            setErrorFor(username, 'El campo de usuario no puede estar vacio');
            contador ++;
        } else if(usernameValue.length < 5) {
            setErrorFor(username, 'El campo de usuario debe tener almenos 5 caracteres');
            contador ++;
        } else {
            setSuccessFor(username);
        }
        
        if(emailValue === '') {
            setErrorFor(email, 'El campo email no puede estar vacio');
            contador ++;
        } else if (!isEmail(emailValue)) {
            setErrorFor(email, 'Email invalido');
            contador ++;
        } else {
            setSuccessFor(email);
        }
        
        if(passwordValue === '') {
            setErrorFor(password, 'El campo de contraseña no puede estar vacio');
            contador ++;
        } else{    
            setSuccessFor(password);
        }
        
        if(image.value == "") {
            setErrorFor(image, 'Imagen obligatoria');
            contador ++;
        } else{
            setSuccessFor(image);
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
        
    function isEmail(email) {
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
    }
    
});