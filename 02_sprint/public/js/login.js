window.addEventListener('load', function() {
    let formulariolog = document.querySelector("form.formulario-js")

    formulariolog.addEventListener("submit", function(event){
         let errores = [];

        let emaillog = document.querySelector("input.log-email");
        

        if(emaillog.value == ""){
            errores.push("El campo de email no puede estar vacio");
            
        }/* else if   falta validar que sea un email existente en la base de datos;*/
    

        let passwordlog = document.querySelector("input.log-pass");

        if(passwordlog.value == ""){
            errores.push("El campo de contraseña no puede estar vacio");
        } /* else if   falta validar que la contraseña matchee con usuario en la base de datos;*/




        if (errores.length > 0) {
            event.preventDefault();

            let ulErrores = document.querySelector("div.errores ul");

            for(let i = 0; i < errores.length; i++) {

                ulErrores.innerHTML += "<li>" + errores[i] + "</li>"
            }

        }
    });
});