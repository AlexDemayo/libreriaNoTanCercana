window.addEventListener('load', function() {
	let configButton = document.querySelector('.js-a');
	let userform = document.querySelector('.user-info');
    let userCompleto = document.querySelector('.user-info-config');
	let passwordForm = document.querySelector(".user-password-config");
	let monthlyAuthor = document.querySelector('.monthy-author-div');
	let recommendedCategories = document.querySelector('.recommended-categories-div')

	configButton.addEventListener('click', function() {
		if (userCompleto.style.display === 'none') {
			userCompleto.style.display = 'block';
            userform.style.display = 'none';
			passwordForm.style.display = 'none';
			monthlyAuthor.style.display = 'none';
			recommendedCategories.style.display = 'none';
            
		} else {
			userCompleto.style.display = 'none';
            userform.style.display = 'block';
			passwordForm.style.display = 'none';
			monthlyAuthor.style.display = 'none';
			recommendedCategories.style.display = 'none';
		}
	});


	let aprofile = document.querySelector('.a-profile');
	aprofile.classList.add('marginpf');

	// document.getElementById('myfilefield').onchange = function() {
	// 	this.form.submit();
	// };


});
