window.addEventListener('load', function() {
    let updateButton = document.querySelector('.js-c');
    

	let userform = document.querySelector('.user-info');
    let passwordForm = document.querySelector(".user-password-config");
	let userCompleto = document.querySelector('.user-info-config');
	let monthlyAuthor = document.querySelector('.monthy-author-div');
	let recommendedCategories = document.querySelector('.recommended-categories-div')

	updateButton.addEventListener('click', function() {
		if (monthlyAuthor.style.display === 'none') {
			monthlyAuthor.style.display = 'block';
            userform.style.display = 'none';
			userCompleto.style.display = 'none';
			passwordForm.style.display = "none";
			recommendedCategories.style.display = 'none';
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



});
