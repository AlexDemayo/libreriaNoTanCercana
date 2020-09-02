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
	
	let category = document.querySelectorAll('.category-input')


	function chkcontrol(j) {
		var total=0;
		for(var i=0; i < document.form1.ckb.length; i++){
		if(document.form1.ckb[i].checked){
		total =total +1;}
		if(total > 3){
		alert("Please Select only three") 
		document.form1.ckb[j].checked = false ;
		return false;
	
	
});
