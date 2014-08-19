//JavaScript
	
$(document).ready(function(e){	
	document.addEventListener("deviceready",function(){
    $('#beep').tap(function(){
		navigator.notification.beep(1);
	}); // tap Beep
	
	$('#vibrar').tap(function(){
		navigator.notification.vibrate(1000);
	}
	);// tap Vibrar
	},false); //deviceready
});//ready