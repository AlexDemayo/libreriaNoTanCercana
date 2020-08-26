window.addEventListener('load', function() {
    let formularioreg = document.querySelector("form.regformulario-js")

    formularioreg.addEventListener("submit", function(event){
         let erroresR = [];


        /* validacion de user*/
        let userreg = document.querySelector("form.regformulario-js input.reg-user");
        
        if(userreg.value == ""){
            erroresR.push("El campo de usuario no puede estar vacio");

            let bordercrl = document.querySelector("form.regformulario-js #userReg");
            let hiddenicon = document.querySelector("form.regformulario-js i.fa-exclamation-circle");

            bordercrl.style.border = "2px solid #e74c3c" ;
            hiddenicon.style.visibility = "visible";


        }else if (userreg.value.length < 5 ){
            erroresR.push("El campo debe tener almenos 5 caracteres");

            let bordercrl = document.querySelector("form.regformulario-js #userReg");
            let hiddenicon = document.querySelector("form.regformulario-js  i.fa-exclamation-circle");

            bordercrl.style.border = "2px solid #e74c3c" ;
            hiddenicon.style.visibility = "visible";
        }else if (userreg.value){
            let bordercrl = document.querySelector("form.regformulario-js #userReg");
            let hiddenicon = document.querySelector("form.regformulario-js i.fa-check-circle");

            bordercrl.style.border = "2px solid green" ;
            hiddenicon.style.visibility = "visible";
        };

         /* validacion de email*/

        let emailreg = document.querySelector("form.regformulario-js input.reg-email");
        

        if(emailreg.value == ""){
            erroresR.push("El campo de email no puede estar vacio");
            let bordercrl = document.querySelector("form.regformulario-js #emailReg");
            let hiddenicon = document.querySelector("form.regformulario-js i.fa-exclamation-circle");

            bordercrl.style.border = "2px solid #e74c3c" ;
            hiddenicon.style.visibility = "visible";

        }else if(emailreg.value.includes("@")){
            let bordercrl = document.querySelector("form.regformulario-js #emailReg");
            let hiddenicon = document.querySelector("form.regformulario-js i.fa-check-circle");

            bordercrl.style.border = "2px solid green" ;
            hiddenicon.style.visibility = "visible";
        };



          /* validacion de password*/

        let passwordreg = document.querySelector("form.regformulario-js input.reg-pass");

        if(passwordreg.value == ""){
            erroresR.push("El campo de contraseña no puede estar vacio");

            let bordercrl = document.querySelector("form.regformulario-js #passwordReg");
            let hiddenicon = document.querySelector("form.regformulario-js i.fa-exclamation-circle");

            bordercrl.style.border = "2px solid #e74c3c" ;
            hiddenicon.style.visibility = "visible";

        }else if (passwordreg.value.length < 8){
            erroresR.push("El campo debe tener almenos 8 caracteres");
            let bordercrl = document.querySelector("form.regformulario-js #passwordReg");
            let hiddenicon = document.querySelector("form.regformulario-js i.fa-exclamation-circle");

            bordercrl.style.border = "2px solid #e74c3c" ;
            hiddenicon.style.visibility = "visible";
        }else if(passwordreg.value){
            let bordercrl = document.querySelector("form.regformulario-js #passwordReg");
            let hiddenicon = document.querySelector("form.regformulario-js i.fa-check-circle");

            bordercrl.style.border = "2px solid green" ;
            hiddenicon.style.visibility = "visible";
        };


         /* validacion de repassword*/

        let passwordrereg = document.querySelector("form.regformulario-js input.reg-repass");

        if(passwordrereg.value == ""){
            erroresR.push("El campo de repetir contraseña no puede estar vacio");

            let bordercrl = document.querySelector("form.regformulario-js #rePasswordReg");
            let hiddenicon = document.querySelector("form.regformulario-js i.fa-exclamation-circle");

            bordercrl.style.border = "2px solid #e74c3c" ;
            hiddenicon.style.visibility = "visible";


        }else if (passwordreg.value != passwordrereg.value){
            erroresR.push("Las contraseñas no coinciden");
            let bordercrl = document.querySelector("form.regformulario-js #rePasswordReg");
            let hiddenicon = document.querySelector("form.regformulario-js i.fa-exclamation-circle");

            bordercrl.style.border = "2px solid #e74c3c" ;
            hiddenicon.style.visibility = "visible";

        }else if (passwordrereg.value){
            let bordercrl = document.querySelector("form.regformulario-js #rePasswordReg");
            let hiddenicon = document.querySelector("form.regformulario-js i.fa-check-circle");

            bordercrl.style.border = "2px solid green" ;
            hiddenicon.style.visibility = "visible";
        };





        let imagereg = document.querySelector("form.regformulario-js input.reg-img");

        if(imagereg.value == ""){
            erroresR.push("Imagen de perfil obligatoria ");
        }/* else if   falta chequear que la imagen sea de una extension valida 
            Y VALIDAR EN EL BACK Y FRONT QUE NO SOBREPASE CIERTO TAMAÑO*/





        if (erroresR.length > 0) {
            event.preventDefault();

            let ulErrores = document.querySelector("div.erroresR ul");

            ulErrores.innerHTML = "";
            
            for(let i = 0; i < erroresR.length; i++) {

                ulErrores.innerHTML += "<li>" + erroresR[i] + "</li>"
            }

        }
    });
});