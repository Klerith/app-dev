/*
 * Este archivo contiene funciones y constantes personalizadas 
 * para el buen funcionamiento de la aplicacion
 * y no son explicitamente de Angular
 */


//  ====================
//       CONSTANTES
//  ====================
const COMPONENTES = "app/componentes/";






//  ====================
//       Funciones
//  ====================

// Esta funcion es utilizada para 
// inicializar los plugins de jquery 
function init_scripts(){

	$(document).ready(function($) {
		
		if ($.fn.dcAccordion) {
            $('#nav-accordion').dcAccordion({
                eventType: 'click',
                autoClose: true,
                saveState: true,
                disableLink: true,
                speed: 'slow',
                showCount: false,
                autoExpand: true,
                classExpand: 'dcjq-current-parent'
            });
        }

        $('.sidebar-toggle-box .fa-bars').click(function (e) {

            $(".leftside-navigation").niceScroll({
                cursorcolor: "#1FB5AD",
                cursorborder: "0px solid #fff",
                cursorborderradius: "0px",
                cursorwidth: "3px"
            });

            $('#sidebar').toggleClass('hide-left-bar');
            
            if ($('#sidebar').hasClass('hide-left-bar')) {
                $(".leftside-navigation").getNiceScroll().hide();
            }
            
            $(".leftside-navigation").getNiceScroll().show();
            $('.main-content').toggleClass('merge-left');
            
            e.stopPropagation();

            if ($('#container').hasClass('open-right-panel')) {
                $('#container').removeClass('open-right-panel')
            }
            if ($('.right-sidebar').hasClass('open-right-bar')) {
                $('.right-sidebar').removeClass('open-right-bar')
            }

            if ($('.header').hasClass('merge-header')) {
                $('.header').removeClass('merge-header')
            }


        });


        /*==Nice Scroll ==*/
        if ($.fn.niceScroll) {

            $(".leftside-navigation").niceScroll({
                cursorcolor: "#1FB5AD",
                cursorborder: "0px solid #fff",
                cursorborderradius: "0px",
                cursorwidth: "3px"
            });

            $(".leftside-navigation").getNiceScroll().resize();
            if ($('#sidebar').hasClass('hide-left-bar')) {
                $(".leftside-navigation").getNiceScroll().hide();
            }
            $(".leftside-navigation").getNiceScroll().show();

        }

	});


}