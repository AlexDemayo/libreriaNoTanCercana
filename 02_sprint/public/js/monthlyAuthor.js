window.addEventListener('load', function() {
	let updateButton = document.querySelector('.js-c');
	let userform = document.querySelector('.user-info');
    let passwordForm = document.querySelector(".user-password-config");
	let userCompleto = document.querySelector('.user-info-config');
	let monthlyAuthor = document.querySelector('.monthy-author-div');

	updateButton.addEventListener('click', function() {
		if (passwordForm.style.display === 'none') {
			passwordForm.style.display = 'block';
            userform.style.display = 'none';
			userCompleto.style.display = 'none';
			monthlyAuthor.style.display = 'none';
		} else {
			passwordForm.style.display = 'none';
            userform.style.display = 'none';
			userCompleto.style.display = 'none';
			monthlyAuthor.style.display = 'block';
		}
    });
    
    let aprofile = document.querySelector('.a-profile');
	aprofile.classList.add('marginpf');



});
