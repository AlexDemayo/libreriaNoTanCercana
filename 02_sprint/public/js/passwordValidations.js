/* FORM DE PASSWORD CONFIG */
window.addEventListener('load', function() {

let passwordform = document.querySelector("form.passwordform-js")


passwordform.addEventListener("submit", function(event){

    let erroresPcf =[];


    /* Validacion de old Password */

 let oldpasswordconfig = document.querySelector("form.passwordform-js input.password-cf");

 if(oldpasswordconfig.value == ""){
    erroresPcf.push("El campo de contraseña no puede estar vacio");

    let bordercrl = document.querySelector("form.passwordform-js #password");
    let hiddenicon = document.querySelector("form.passwordform-js i.fa-exclamation-circle");

    bordercrl.style.border = "2px solid #e74c3c" ;
    hiddenicon.style.visibility = "visible";
}else if(oldpasswordconfig.value){
    let bordercrl = document.querySelector("form.passwordform-js #password");
    let hiddenicon = document.querySelector("form.passwordform-js i.fa-check-circle");

    bordercrl.style.border = "2px solid green" ;
    hiddenicon.style.visibility = "visible";
};

  
      /* Validacion de new Password */

let passwordconfig = document.querySelector("form.passwordform-js input.newpassword-cf");

if(passwordconfig.value == ""){
    erroresPcf.push("El campo de contraseña no puede estar vacio");

    let bordercrl = document.querySelector("form.passwordform-js #newPassword");
    let hiddenicon = document.querySelector("form.passwordform-js i.fa-exclamation-circle");

    bordercrl.style.border = "2px solid #e74c3c" ;
    hiddenicon.style.visibility = "visible";

}else if (passwordconfig.value.length < 8){
    erroresPcf.push("El campo debe tener al menos 8 caracteres");
    let bordercrl = document.querySelector("form.passwordform-js #newPassword");
    let hiddenicon = document.querySelector("form.passwordform-js i.fa-exclamation-circle");

    bordercrl.style.border = "2px solid #e74c3c" ;
    hiddenicon.style.visibility = "visible";
}else if(passwordconfig.value){
    let bordercrl = document.querySelector("form.passwordform-js #newPassword");
    let hiddenicon = document.querySelector("form.passwordform-js i.fa-check-circle");

    bordercrl.style.border = "2px solid green" ;
    hiddenicon.style.visibility = "visible";
};






       /* Validacion de repeat New Password */
 
 let passwordreconfig = document.querySelector("form.passwordform-js input.repassword-cf");
  
if(passwordreconfig.value == ""){
    erroresPcf.push("El campo de repetir contraseña no puede estar vacio");

    let bordercrl = document.querySelector("form.passwordform-js #confirmNewPassword");
    let hiddenicon = document.querySelector("form.passwordform-js i.fa-exclamation-circle");

    bordercrl.style.border = "2px solid #e74c3c" ;
    hiddenicon.style.visibility = "visible";


}else if (passwordconfig.value != passwordreconfig.value){
    erroresPcf.push("Las contraseñas no coinciden");
     let bordercrl = document.querySelector("form.passwordform-js #confirmNewPassword");
    let hiddenicon = document.querySelector("form.passwordform-js i.fa-exclamation-circle");

     bordercrl.style.border = "2px solid #e74c3c" ;
    hiddenicon.style.visibility = "visible";

 }else if (passwordreconfig.value){
     let bordercrl = document.querySelector("form.passwordform-js #confirmNewPassword");
     let hiddenicon = document.querySelector("form.passwordform-js i.fa-check-circle");

     bordercrl.style.border = "2px solid green" ;
     hiddenicon.style.visibility = "visible";
 };

if (erroresPcf.length > 0) {
    event.preventDefault();

    let ulErrores = document.querySelector("div.erroresPcf ul");

    ulErrores.innerHTML = "";

    for(let i = 0; i < erroresPcf.length; i++) {

        ulErrores.innerHTML += "<li>" + erroresPcf[i] + "</li>"
    }
  }

 });


})