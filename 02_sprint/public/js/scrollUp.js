  

// si el usuario pasa los 1700px se activa scrollfunction que hace visible el boton

window.onscroll = function() {scrollFunction()};

mybutton = document.getElementById("scrollButton");

function scrollFunction() {
  if (document.documentElement.scrollTop > 1700) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// cuando el usuario hace click sube a la parte de arriba del documento
function topFunction() {
  document.documentElement.scrollTop = 0; 
}

