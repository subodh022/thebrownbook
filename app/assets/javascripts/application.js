// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require_tree .
//= stub modernizr.custom
//= stub imagesloaded.pkgd.min
//= stub masonry.pkgd.min
//= stub classie
//= stub cbpGridGallery

jQuery(function(){
	jQuery('.mid-icon').bind('click', showAnimate);
	jQuery('.transparent-box').mouseenter(menuAnimate);
	jQuery('.transparent-box').mouseleave(menuRestore);

	jQuery("a.x").click(function(){
	  jQuery(this).toggleClass("open");
	});
});

var showAnimate = function() {
	jQuery('.mid-icon').animate({color:'white'},{duration:200, easing: "easeOutExpo"});
	jQuery('.info-box').animate({color:'#8A0808'},{duration:200, easing: "easeOutExpo"});
	jQuery('.mid-icon').animate({backgroundColor:'#8A0808'},{duration:500, easing: "easeOutExpo"});
	jQuery('.info-box').animate({backgroundColor:'white'},{duration:500, easing: "easeOutExpo"});
	jQuery('.mid-icon').unbind('click');
	jQuery('.mid-icon').bind('click', stopAnimate);
};

var stopAnimate = function() {
	jQuery('.mid-icon').animate({color:'#8A0808'},{duration:200, easing: "easeOutExpo"});
	jQuery('.info-box').animate({color:'white'},{duration:200, easing: "easeOutExpo"});
	jQuery('.mid-icon').animate({backgroundColor:'white'},{duration:500, easing: "easeOutExpo"});
	jQuery('.info-box').animate({backgroundColor:'#8A0808'},{duration:500, easing: "easeOutExpo"});
	jQuery('.mid-icon').unbind('click');
	jQuery('.mid-icon').bind('click', showAnimate);
};

var menuAnimate = function() {
	up_val = jQuery(this).find('.img-div').attr('data-up');
	jQuery(this).find('.img-div').animate({top : "-"+up_val+"px" }, {duration:500, easing: "easeOutBack"});
	jQuery(this).animate({backgroundColor:'#8A0808'},{duration:500, easing: "easeOutExpo"});
};

var menuRestore = function() {
	jQuery(this).find('.img-div').animate({top : "0" }, {duration:500, easing: "easeOutBack"});
	jQuery(this).animate({backgroundColor:'white'},{duration:500, easing: "easeOutExpo"});
};