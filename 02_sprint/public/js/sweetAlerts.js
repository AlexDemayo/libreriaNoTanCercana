window.addEventListener("load", function(){
    
   const enviarButton = document.querySelector(".js-alert");
   const registerButton = document.querySelector(".js-registerEvent");
   const buyButton = document.querySelector(".js-buyEvent");
   
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



   registerButton.addEventListener("click", function(e){

  // PREGUNTAR SI TENES ERRORES ANTES DE DISPARAR EL SWEET ALERT
  // guar
     swal({
         title: "Tu cuenta ha sido creada con exito!",
         text: "",
         type: "success",
         showConfirmButton: false,
         confirmButtonText: "Ok",
         timer: 4000
     });
 

  });

/* ARREGLAR, NO HACE EL PREVENT DEFAULT */
   buyButton.addEventListener("click", function(e){ 
    e.preventDefault();
 
    swal({
        title: "Tu compra se añadio al carrito",
        text: "sdsadsda",
        type: "success",
        showConfirmButton: false,
        confirmButtonText: "Ok",
        timer: 4000
    });

    
  });





});
