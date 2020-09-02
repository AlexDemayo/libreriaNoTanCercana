window.addEventListener('load', function() {
	let passwordButton = document.querySelector('.js-b');
    let userform = document.querySelector('.user-info');
    let userCompleto = document.querySelector('.user-info-config');
    let passwordForm = document.querySelector(".user-password-config");
	let monthlyAuthor = document.querySelector('.monthy-author-div');
	let recommendedCategories = document.querySelector('.recommended-categories-div')
	
	passwordButton.addEventListener('click', function() {
		if (passwordForm.style.display === 'none') {
			passwordForm.style.display = 'block';
            userform.style.display = 'none';
			userCompleto.style.display = 'none';
			monthlyAuthor.style.display = 'none';
			recommendedCategories.style.display = 'none';
		
		} else {
			passwordForm.style.display = 'none';
            userform.style.display = 'block';
			userCompleto.style.display = 'none';
			monthlyAuthor.style.display = 'none';
			recommendedCategories.style.display = 'none';
		}
    });
    
    let aprofile = document.querySelector('.a-profile');
	aprofile.classList.add('marginpf');



});
