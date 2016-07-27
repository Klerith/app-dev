// ===============================    
//    Funciones del login unicamente
// ===============================

// Ejecutar la funcion del posteo
$("#frmLogin").on('submit', function(event) {
  event.preventDefault();

  $("input").attr("disabled","disabled");
  $("#iconLoadin")
    .removeClass('fa-arrow-right')
    .addClass('fa-spin fa-refresh');

  setTimeout(function() {
    window.location = "../";
  }, 700);

});


// Funciones del reloj
$(document).ready(function($) {

  var timer = setInterval(function() {
    tic();
  }, 1000);

});


function tic() {

  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  // add a zero in front of numbers<10
  m = checkTime(m);
  s = checkTime(s);
  $('#time').html(h + ":" + m + ":" + s);
  
}

function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}
