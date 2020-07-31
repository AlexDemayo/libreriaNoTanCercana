window.addEventListener('load', function() {
	let configButton = document.querySelector('.js-a');
	let userform = document.querySelector('.user-info');
	let x = document.querySelector('.user-info-completo');
	x.style.display = "none";
	configButton.addEventListener('click', function() {
		
		
			if (x.style.display === "none") {
			  x.style.display = "block";
			  userform.style.display = "none"
			} else {
			  x.style.display = "none";
			  userform.style.display = "block"
			}
		
			
		
		});
});
