window.addEventListener('load', function() {
    const form = document.getElementById('configForm-js');
    const username = document.getElementById('user-C');
    const email = document.getElementById('email-C');
    const password = document.getElementById('password-C');
    const image = document.querySelector("form.img-js input.img-cf");
 
    
   
    
    form.addEventListener('submit', e => {
        e.preventDefault();
        
        checkInputs();
    });
    
    function checkInputs() {
      
       
        const usernameValue = username.value.trim();
	    const emailValue = email.value.trim();
	    const passwordValue = password.value.trim();
	    
       
        
        
        
        if(usernameValue === '') {
            setErrorFor(username, 'El campo de usuario no puede estar vacio');
        } else if(usernameValue.length < 5) {
            setErrorFor(username, 'El campo de usuario debe tener almenos 5 caracteres');
        } else {
            setSuccessFor(username);
        }
        
        if(emailValue === '') {
            setErrorFor(email, 'El campo email no puede estar vacio');
        } else if (!isEmail(emailValue)) {
            setErrorFor(email, 'Email invalido');
        } else {
            setSuccessFor(email);
        }
        
        if(passwordValue === '') {
            setErrorFor(password, 'El campo de contraseña no puede estar vacio');
        } else{    
            setSuccessFor(password);
        }
        
        if(image.value == "") {
            setErrorFor(image, 'Imagen obligatoria');
        } else{
            setSuccessFor(image);
        }
        
        
       
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