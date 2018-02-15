'use strict';
var firstHref = $('a[href^="http"]').eq(0).attr('href');

//Ocultamos banner cookies
$('#sliding-popup').hide();

//Direnciamos visualmente los hosts.
var host = window.location.host;
if(host === 'www.isdi.education' || host === 'www.isdi.education'){
  $('.msg-fijo').append($('<div>PRODUCCION</div>').css('background-color','#ff0000'));
}

if(host === 'isdi.docker' ){
  $('.msg-fijo').append($('<div>DOCKER</div>').css('background-color','#00FF00'));
}
