window.addEventListener('load', function() {
	let configButton = document.querySelector('.js-a');
	let userform = document.querySelector('.user-info');
	let userCompleto = document.querySelector('.user-info-completo');
	
	configButton.addEventListener('click', function() {
		
		
			if (userCompleto.style.display === "none") {
				userCompleto.style.display = "block";
			  userform.style.display = "none"
			} else {
				userCompleto.style.display = "none";
			  userform.style.display = "block"
			}
		
			
		
		});
});
