window.addEventListener("load", function(){
    

      /* guarda en locals */

     let loginform = document.querySelector("form.session-save");

     loginform.addEventListener("submit", function(e) {
        
       
      localStorage.setItem("userName", "Smith")

     });

    
     /* borra locals */
/*
     let logoutButton = document.querySelector("form.clear-storage")
         console.log(logoutButton + "este es el error");

     logoutButton.addEventListener("submit", function(e){
        
        localStorage.clear()

     })

*/


})