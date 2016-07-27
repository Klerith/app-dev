/*
 * Enrutador de la aplicación
 *
 *
 */

hazskApp.config(function($urlRouterProvider, $stateProvider) {

  $urlRouterProvider
        .otherwise('/');

  $stateProvider
  	.state('dashboard',{
		    url:'/',
		    // template: '<h1> <i clas="fa fa-edit"></i> Bienvenidos</h1>'
		    templateUrl: COMPONENTES + 'dashboard/view.html'
		    // controller:'helloController',
		})
  	.state('blog',{
		    url:'/blog/:blogID',
		    templateUrl: COMPONENTES + 'blog/view.html',
		    controller:'blogCtrl'
		})	
  	.state('blog.detalle',{
		    url:'/blog/:blogID',
		    templateUrl: COMPONENTES + 'blog/blog.detalle.html',
		    // controller:'blogCtrl'
		})



});
