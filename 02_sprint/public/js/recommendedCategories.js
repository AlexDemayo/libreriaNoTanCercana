window.addEventListener('load', function() {
	let updateButton = document.querySelector('.js-d');
	
	
	let userform = document.querySelector('.user-info');
	let passwordForm = document.querySelector(".user-password-config");
	let userCompleto = document.querySelector('.user-info-config');
	let monthlyAuthor = document.querySelector('.monthy-author-div');
	let recommendedCategories = document.querySelector('.recommended-categories-div');
	
	updateButton.addEventListener('click', function() {
		if (recommendedCategories.style.display === 'none') {
			monthlyAuthor.style.display = 'none';
			userform.style.display = 'none';
			userCompleto.style.display = 'none';
			passwordForm.style.display = "none";
			recommendedCategories.style.display = 'block';
			
		} else {
			monthlyAuthor.style.display = 'none';
			userform.style.display = 'block';
			userCompleto.style.display = 'none';
			passwordForm.style.display = "none";
			recommendedCategories.style.display = 'none';
			
		}
	});
	
	let aprofile = document.querySelector('.a-profile');
	aprofile.classList.add('marginpf');
	


   /* limit checkers del front */


    limit = 3; //set limit

checkboxes = document.querySelectorAll('.checkboxdiv input[type="checkbox"]'); //selecciona todos los checkboxs
 small =  document.getElementById("frontMsg");

var contadorAux = 0;
function checker(elem) {
   
  if (elem.checked) {
     //si estan chequeados, incrementa el contador
    limit++;
    
   
  } else {
    limit--; //sino, le resta al contador
  }  

  for (i = 0; i < checkboxes.length; i++) { // itera los inputs

    if (limit > 3) {
       /*if(checkboxes[i].checked){
        checkboxes[i].disabled = true;
       }*/
       if(contadorAux<1){                
                //si limit es mayor a 3, y si el contador auxiliar es mayor a 1, la primera iteracion de los inputs que este chequeada me la desabilitas 
       checkboxes[i].checked = false;        
       contadorAux++;
      }
      if (!checkboxes[i].checked) {          //si limit es mayor a 3. cada input que no esta tickeado me los deshabilitas y me mostras el mensaje 
        checkboxes[i].disabled = true; // desabilita todos los inputs que estan unchecked
        small.style.display = "block";
          
    }

   
      
    } else {

      if (!checkboxes[i].checked) {
    
        checkboxes[i].disabled = false;       // si limite es menor a 3, habilitame los inputs que no estan chequeados;
        small.style.display = "none";
         
      }
      
    }
  }

};




for (i = 0; i < checkboxes.length; i++) {
    
    // hace un loop de todos los inputs y a cada uno de los inputs cuando le hagas onclick ejecuta checker enviandole
  checkboxes[i].onclick = function() { //le hagas onclick ejecuta checker enviandole el elemento/input actual como parametro
    checker(this);
    
  }
}




    
}); 
