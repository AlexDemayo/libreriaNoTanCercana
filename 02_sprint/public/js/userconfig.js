window.addEventListener('load', function() {
    let userform = document.querySelector("form.userform-js")

    userform.addEventListener("submit", function(event){

        let erroresCf =[];

        /*validacion de user */

        let userconfig = document.querySelector("input.user-cf");

        if(userconfig.value == ""){
               erroresCf.push("El campo de usuario no puede estar vacio");
               let bordercrl = document.querySelector("#userName");
               let hiddenicon = document.querySelector("i.fa-exclamation-circle");

               bordercrl.style.border = "2px solid #e74c3c" ;
               hiddenicon.style.visibility = "visible";
        }else if (userconfig.value.length < 5 ){
                erroresCf.push("El campo debe tener almenos 5 caracteres");
    
                let bordercrl = document.querySelector("#userName");
                let hiddenicon = document.querySelector("i.fa-exclamation-circle");
    
                bordercrl.style.border = "2px solid #e74c3c" ;
                hiddenicon.style.visibility = "visible";
        }else if (userconfig.value){
                let bordercrl = document.querySelector("#userName");
                let hiddenicon = document.querySelector("i.fa-check-circle");
    
                bordercrl.style.border = "2px solid green" ;
                hiddenicon.style.visibility = "visible";
        };
        /* FALTA VALIDAR QUE EL USUARIO A CAMBIAR NO ESTE EXISTENTE YA EN LA BASE DE DATOS EN EL BACKEND */
        

        /* Validacion de email */
        let emailconfig = document.querySelector("input.email-cf");
        

        if(emailconfig.value == ""){
            erroresCf.push("El campo de email no puede estar vacio");
            let bordercrl = document.querySelector("#email");
            let hiddenicon = document.querySelector("i.fa-exclamation-circle");

            bordercrl.style.border = "2px solid #e74c3c" ;
            hiddenicon.style.visibility = "visible";

        }else if(!emailconfig.value.includes("@")){
            erroresCf.push("El dato ingresado no es valido ");
            let bordercrl = document.querySelector("#email");
            let hiddenicon = document.querySelector("i.fa-exclamation-circle");

            bordercrl.style.border = "2px solid #e74c3c" ;
            hiddenicon.style.visibility = "visible";
        }else if(emailconfig.value.includes("@")){
            let bordercrl = document.querySelector("#email");
            let hiddenicon = document.querySelector("i.fa-check-circle");

            bordercrl.style.border = "2px solid green" ;
            hiddenicon.style.visibility = "visible";
        
        };







        
        /* FALTA VALIDACION DEL BACK END QUE LA PASSWORD INGRESADA SEA 
        LA MISMA QUE LA DE LA BASE DE DATOS */
             









        /* validacion de  New password */
       

        /*     COMENTADO
        let passwordconfig = document.querySelector("input.newpassword-cf");

        if(passwordconfig.value == ""){
            erroresCf.push("El campo de contraseña no puede estar vacio");

            let bordercrl = document.querySelector("#newPassword");
            let hiddenicon = document.querySelector("i.fa-exclamation-circle");

            bordercrl.style.border = "2px solid #e74c3c" ;
            hiddenicon.style.visibility = "visible";

        }else if (passwordconfig.value.length < 8){
            erroresCf.push("El campo debe tener al menos 8 caracteres");
            let bordercrl = document.querySelector("#newPassword");
            let hiddenicon = document.querySelector("i.fa-exclamation-circle");

            bordercrl.style.border = "2px solid #e74c3c" ;
            hiddenicon.style.visibility = "visible";
        }else if(passwordconfig.value){
            let bordercrl = document.querySelector("#newPassword");
            let hiddenicon = document.querySelector("i.fa-check-circle");

            bordercrl.style.border = "2px solid green" ;
            hiddenicon.style.visibility = "visible";
        };
        */





        /* validaciones de New Repassword */
        // let passwordconfig = document.querySelector("input.newpassword-cf");
        // let passwordreconfig = document.querySelector("input.repassword-cf");
          /*
        if(passwordreconfig.value == ""){
            erroresCf.push("El campo de repetir contraseña no puede estar vacio");

            let bordercrl = document.querySelector("#confirmNewPassword");
            let hiddenicon = document.querySelector("i.fa-exclamation-circle");

            bordercrl.style.border = "2px solid #e74c3c" ;
            hiddenicon.style.visibility = "visible";

*/
        //  if (passwordconfig.value != passwordreconfig.value){
        //     erroresCf.push("Las contraseñas no coinciden");
        //     let bordercrl = document.querySelector("#confirmNewPassword");
        //     let hiddenicon = document.querySelector("i.fa-exclamation-circle");

        //     bordercrl.style.border = "2px solid #e74c3c" ;
        //     hiddenicon.style.visibility = "visible";

        // }else if (passwordreconfig.value){
        //     let bordercrl = document.querySelector("#confirmNewPassword");
        //     let hiddenicon = document.querySelector("i.fa-check-circle");

        //     bordercrl.style.border = "2px solid green" ;
        //     hiddenicon.style.visibility = "visible";
        // };

        if (erroresCf.length > 0) {
            event.preventDefault();

            let ulErrores = document.querySelector("div.erroresCf ul");

            ulErrores.innerHTML = "";

            for(let i = 0; i < erroresCf.length; i++) {

                ulErrores.innerHTML += "<li>" + erroresCf[i] + "</li>"
            }

        }
       
    })
});