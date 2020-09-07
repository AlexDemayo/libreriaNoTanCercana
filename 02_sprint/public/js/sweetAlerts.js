window.addEventListener("load", function(){
    
   const enviarButton = document.querySelector(".js-alert");

   
   enviarButton.addEventListener("click", function(e){
       e.preventDefault();

    
        swal({
            title: "Gracias por suscribirte",
            text: "Pronto estaras recibiendo las novedades y promociones mas recientes!",
            type: "success",
            showConfirmButton: false,
            confirmButtonText: "Ok",
            timer: 3000
        });
    

   });

});
