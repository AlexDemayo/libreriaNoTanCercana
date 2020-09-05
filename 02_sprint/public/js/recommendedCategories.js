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
console.log(small);
var contadorAux = 0;
function checker(elem) {

  if (elem.checked) {
     //si estan chequeados, incrementa el contador
    limit++;
    console.log(limit)
   
  } else {
    limit--; //sino, le resta al contador
  }  

  for (i = 0; i < checkboxes.length; i++) { // le hace un loop a todos los inputs

    if (limit > 3) {
       /*if(checkboxes[i].checked){
        checkboxes[i].disabled = true;
       }*/
       if(contadorAux<1){
        console.log(checkboxes[i])
       checkboxes[i].checked = false;
       contadorAux++;
      }
      if (!checkboxes[i].checked) {
        checkboxes[i].disabled = true; // desabilita todos los inputs que estan unchecked
        small.style.display = "block";
          
    }

    /*small.style.display = block;*/
      
    } else { // si limite es menor a dos 

      if (!checkboxes[i].checked) {
    
        checkboxes[i].disabled = false;       // habilita los inputs que estan unchecked
        small.style.display = "none";
         
      }
      /*small.style.visibility = hidden;  */
    }
  }

}

for (i = 0; i < checkboxes.length; i++) {
    



    // hace un loop de todos los inputs y a cada uno de los inputs cuando le hagas onclick ejecuta checker enviandole
  checkboxes[i].onclick = function() { //le hagas onclick ejecuta checker enviandole el elemento actual como parametro
    checker(this);
    console.log("este es this" + this.id);
  }
}




    
}); 
