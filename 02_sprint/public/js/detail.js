window.addEventListener('load', function(){

    // let button= document.querySelector('.no-loggued-button')
    // button.addEventListener('click', function(){
    //     alert('Debés estar logueado para comprar')
    // })

    let message = document.querySelector('.js-message')
    let button = document.querySelector('.no-loggued-button')

    button.addEventListener('click', function(){
        message.innerHTML = "Debés estar logueado para comprar"
    })

});