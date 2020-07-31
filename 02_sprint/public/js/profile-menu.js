window.addEventListener('load', function() {
	let configButton = document.querySelector('.js-a');

	configButton.addEventListener('click', function() {
		let userform = document.querySelector('.user-info');
		userform.innerHTML =
			'<form class="register" action="update" method="POST" value="update"> <div> <div> <a class="a-profile marginpf">Usuario<a/> <div class="user-div"><div class="user-img"> <i class="fas fa-user"></i></div><input type="text" id="usernameReg" name="usernameReg" " class="user-menu" value=""> <p class="error"></div><div> <a class="a-profile marginpf1">Email</a> <div class="user-div"><div class="user-img"> <i class="fas fa-envelope"></i></div><input type="text" id="emailReg" name="emailReg" class="user-menu" value=""><p class="error"></p></div><div><a class="a-profile marginpf1">Contraseña</a><div class="user-div"><div class="user-img"> <i class="fas fa-key"></i></div><input type="password" id="passwordReg" name="passwordReg" class="user-menu"><p class="error"></p></div><div><a class="a-profile marginpf1">Nueva contraseña</a><div class="user-div"><div class="user-img"><i class="fas fa-key"></i></div><input type="password" id="confirmPasswordReg" name="confirmPasswordReg" class="user-menu" "><p class="error"></p></div><div> <a class="a-profile marginpf1">Repetir nueva contraseña</a><input type="password" id="confirmPasswordReg" name="confirmPasswordReg" class="user-menu" "><p class="error"></p></div><div><button type="submit">Actualizar</button></div></div>';
	});
});
