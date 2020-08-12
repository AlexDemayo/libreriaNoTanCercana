window.addEventListener('load', function() {
    let formularioreg = document.querySelector("form.regformulario-js")

    formularioreg.addEventListener("submit", function(event){
         let erroresR = [];


        let userreg = document.querySelector("input.reg-user");

        if(userreg.value == ""){
            erroresR.push("El campo de usuario no puede estar vacio");
        }else if (userreg.value.length < 5 ){
            erroresR.push("El campo debe tener almenos 5 caracteres");
        }




        let emailreg = document.querySelector("input.reg-email");
        

        if(emailreg.value == ""){
            erroresR.push("El campo de email no puede estar vacio");
        }  /* else if   falta validar que sea un dato tipo email  y falta validar que no sea un email existente ya en la base de datos
                                 Y EN LAS VALIDACIONES DEL BACK TAMBIEN FALTA*/





        let passwordreg = document.querySelector("input.reg-pass");

        if(passwordreg.value == ""){
            erroresR.push("El campo de contraseña no puede estar vacio");
        }else if (passwordreg.value.length < 8){
            erroresR.push("El campo debe tener almenos 8 caracteres");
        }





        let passwordrereg = document.querySelector("input.reg-repass");

        if(passwordrereg.value == ""){
            erroresR.push("El campo de repetir contraseña no puede estar vacio");
        }else if (passwordreg.value != passwordrereg.value){
            erroresR.push("Las contraseñas no coinciden");
        }





        let imagereg = document.querySelector("input.reg-img");

        if(imagereg.value == ""){
            erroresR.push("Imagen de perfil obligatoria ");
        }/* else if   falta chequear que la imagen sea de una extension valida 
            Y VALIDAR EN EL BACK Y FRONT QUE NO SOBREPASE CIERTO TAMAÑO*/





        if (erroresR.length > 0) {
            event.preventDefault();

            let ulErrores = document.querySelector("div.erroresR ul");

            for(let i = 0; i < erroresR.length; i++) {

                ulErrores.innerHTML += "<li>" + erroresR[i] + "</li>"
            }

        }
    });
});