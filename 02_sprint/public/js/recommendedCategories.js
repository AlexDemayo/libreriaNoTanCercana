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
	



    
    let checkEvent = document.querySelector(".category-input");

    checkEvent.addEventListener("click", function(){
        chkcontrol(i);
    })

	function chkcontrol(j) {
		var total=0;
		for(var i=0; i < document.form1.categoria.length; i++){
		if(document.form1.categoria[i].checked){
		total =total ++;}
		if(total > 3){
		alert("Please Select only three") 
		document.form1.categoria[j].checked = false ;
		return false;
	    }
      }
    }	

    
}); 
