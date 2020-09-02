window.addEventListener('load', function() {
    const form = document.getElementById('loginForm-js');
    const email = document.getElementById('email-L');
    const password = document.getElementById('password-L');
   
    
    form.addEventListener('submit', e => {

        /*if (small.length !== ""){
            e.preventDefault()*/
        if(!checkInputs()){
            e.preventDefault();
        }
       
        
    });
    
    function checkInputs() {
      
       
        const emailValue = email.value.trim();
        const passwordValue = password.value.trim();
       
        
        let contador = 0;
        
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
            contador ++
        } else {
            setSuccessFor(password);
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