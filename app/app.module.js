/*
 * Modulo y controlador principal del proyecto
 *
 *
 */

var hazskApp = angular.module('hazskApp', ['ui.router']);

hazskApp.controller('mainCtrl', ['$scope','$http', function($scope,$http){
	
	// ========= Declaracion de variables
	// $scope.info: Contiene toda la informacion del archivo de configuracion
	// que se encuentra en la raiz del proyecto ( config.json )
	$scope.info = {};
	$scope.enLogin = false;


	// Funcion muestra el login
	$scope.loginScreen = function( block = false ){
		
		if( !block ){
			
			$scope.enLogin = false;
			$("body").removeClass('lock-screen');
			$("#main-content").addClass('main-content');
			$("#main-wraper").addClass('wrapper');

		}else{
			$scope.enLogin = true;
			$("body").addClass('lock-screen');
			$("#main-content,#main-wraper").removeClass();
		}
	}


	// Cargar el archivo de configuracion al ejecutar el Controlador principal
	$http.get("config.json")
		.success(function(data){
			$scope.info = data;
			console.log(data);
		});


	// Ejecutar la inicializacion de plugins
	init_scripts();


}]);