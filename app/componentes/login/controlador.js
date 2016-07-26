// Controlador del login

hazskApp.controller('loginCtrl', ['$scope', function($scope){

	// ===============================	
	//    Declaracion de variables
	// ===============================
	$scope.loginFrm = {
		user:"",
		pass: ""
	}

	var intervalo = setInterval(function(){startTime()}, 500);

	$scope.hora = startTime();

	// Llamar la funcion del login Screen
	$scope.loginScreen(true);


	$scope.login = function( loginFrm ){

		console.log( loginFrm );
		$scope.loginScreen();
		clearInterval(intervalo);
		window.location = "#/";
		
	}

	function startTime(){

        var today=new Date();
        var h=today.getHours();
        var m=today.getMinutes();
        var s=today.getSeconds();
        
        // add a zero in front of numbers<10
        m=checkTime(m);
        s=checkTime(s);
        
        // t=setTimeout(function(){startTime()},500);
        
        document.getElementById('time').innerHTML=h+":"+m+":"+s;
        return h+":"+m+":"+s;
    }

    function checkTime(i)
    {
        if (i<10)
        {
            i="0" + i;
        }
        return i;
    }


}]);