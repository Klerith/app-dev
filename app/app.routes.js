var myApp = angular.module('helloworld', ['ui.router']);

myApp.config(function($urlRouterProvider, $stateProvider) {

  $urlRouterProvider
        .otherwise('/hello');

  $stateProvider
  	.state('hello',{
		    url:'/hello',
		    templateUrl:'app/componentes/hello/view.html'
		    // controller:'helloController',
		})
  	.state('about',{
		    url:'/about',
		    templateUrl:'app/componentes/about/view.html'
		    // controller:'aboutController',
		})
  	.state('blog',{
		    url:'/blog/:blogID',
		    templateUrl:'app/componentes/blog/view.html',
		    controller:'blogCtrl'
		})	
  	.state('blog.detalle',{
		    url:'/blog/:blogID',
		    templateUrl:'app/componentes/blog/blog.detalle.html',
		    // controller:'blogCtrl'
		})



});
