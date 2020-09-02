
window.addEventListener("load", function(){
    

        if(localStorage.length == 0){
            UIkit.util.on('#js-modal-alert', 'click', function (e) {
     
                e.preventDefault();
                e.target.blur();
                UIkit.modal.alert('Logueate para comprar').then(function () {
                    
                    console.log('Alert closed.')
                });
            });
        }
    });




