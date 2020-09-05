window.addEventListener('load', function() {
    const form = document.getElementById('registerForm-js');
    const username = document.getElementById('user-R');
    const email = document.getElementById('email-R');
    const password = document.getElementById('password-R');
    const password2 = document.getElementById('password2-R');
    const image = document.querySelector("form.regformulario-js input.reg-img");
    
    
   
    
    form.addEventListener('submit', e => {
       
        
        if(checkInputs()){
            swal({
                title: "Tu cuenta ha sido creada con exito!",
                text: "",
                type: "success",
                showConfirmButton: false,
                confirmButtonText: "Ok",
                timer: 5000
            });
            
        }else {
            swal({
                title: "Algo sucedio con los campos!",
                text: "Verificar campos",
                type: "error",
                showConfirmButton: false,
                confirmButtonText: "Ok",
                timer: 4000
            });
            
            e.preventDefault();
        }
            
            
     

    });
    
    function checkInputs() {
      
       
        const usernameValue = username.value.trim();
	    const emailValue = email.value.trim();
	    const passwordValue = password.value.trim();
        const password2Value = password2.value.trim();
       
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
        } else if (passwordValue.length < 8){
            setErrorFor(password, 'El campo de contraseña debe tener almenos 8 caracteres');
            contador ++;
        } else{    
            setSuccessFor(password);
        }
        
        if(password2Value === '') {
            setErrorFor(password2, 'Repetir contraseña no puede estar vacio');
            contador ++;
        } else if(passwordValue !== password2Value) {
            setErrorFor(password2, 'Las contraseñas no coinciden');
            contador ++;
        } else{
            setSuccessFor(password2);
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
        formControl.className = 'form-L error';
        small.innerText = message;
    }
    
    function setSuccessFor(input) {
        const formControl = input.parentElement;
        formControl.className = 'form-L success';
    }
        
    function isEmail(email) {
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
    }


   




    
});