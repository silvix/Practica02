//JavaScript
	
$(document).ready(function(e){	
	document.addEventListener("deviceready",function(){
    $('#beep').tap(function(){
		Navigator.notificacion.beep(1);
	}); // tap Beep
	
	$('#vibrar').tap(function(){
		Navigator.notificacion.vibrate(1000);
	}
	);// tap Vibrar
	},false); //deviceready
});//ready