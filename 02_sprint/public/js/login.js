window.addEventListener('load', function() {
    let formulariolog = document.querySelector("form.formulario-js")

    formulariolog.addEventListener("submit", function(event){
         let errores = [];

         /* validacion de email */
        let emaillog = document.querySelector("input.log-email");
        

        if(emaillog.value == ""){
            errores.push("El campo de email no puede estar vacio");
            let bordercrl = document.querySelector("#emailLog input");
            let hiddenicon = document.querySelector("#emailLog i.fa-exclamation-circle");

            bordercrl.style.border = "2px solid #e74c3c" ;
            hiddenicon.style.visibility = "visible";
        }
    

         /* validacion de password */
        let passwordlog = document.querySelector("input.log-pass");

        if(passwordlog.value == ""){
            errores.push("El campo de contraseña no puede estar vacio");
            let bordercrl = document.querySelector("#passwordLog input");
            let hiddenicon = document.querySelector("#passwordLog i.fa-exclamation-circle");
         
            bordercrl.style.border = "2px solid #e74c3c" ;
            hiddenicon.style.visibility = "visible";
        } 




        if (errores.length > 0) {
            event.preventDefault();

            let ulErrores = document.querySelector("div.errores ul");

            ulErrores.innerHTML = "";

            for(let i = 0; i < errores.length; i++) {

                ulErrores.innerHTML += "<li>" + errores[i] + "</li>"
            }

        }
    });
});