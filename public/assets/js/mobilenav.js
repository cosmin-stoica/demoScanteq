/* =====================================
All JavaScript fuctions Start
======================================*/

(function ($) {
	
    'use strict';
	
	mobile_nav();

	//________Nav submenu show hide on mobile by = custom.js________//	
	 function mobile_nav(){
		jQuery(".sub-menu, .mega-menu").parent('li').addClass('has-child');

		if(jQuery("#arrowId").length){
			//---
		} else {
			jQuery("<div id='arrowId' class='fa fa-angle-right submenu-toogle'></div>").insertAfter(".has-child > a");
		}

		jQuery('.has-child a+.submenu-toogle').unbind('click').click(function(ev) {

			jQuery(this).parent().siblings(".has-child ").children(".sub-menu, .mega-menu").slideUp(500, function(){
				jQuery(this).parent().removeClass('nav-active');
			});

			jQuery(this).next(jQuery('.sub-menu, .mega-menu ')).slideToggle(500, function(){
				jQuery(this).parent().toggleClass('nav-active');
			});

			ev.stopPropagation();
		});

	}

})(jQuery);
