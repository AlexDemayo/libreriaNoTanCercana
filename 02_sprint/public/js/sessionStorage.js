window.addEventListener("load", function(){
    

      /* guarda en locals */

     let loginform = document.querySelector("form.session-save");

     if(loginform){
          loginform.addEventListener("submit", function(e) {
             
               localStorage.setItem("userName", "Smith")
     
          });
     }

    
     /* borra locals */

     let logoutButton = document.querySelectorAll("form.clear-storage")
     
     for (const elem of logoutButton) {
          elem.addEventListener("submit", function(e){
               
               localStorage.clear()
               
            })
     }





})