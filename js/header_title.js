/*
This JS file is used for the 'other pages' like the experience page, contact page..etc
The home page is governed by script.js and not this file even though some functions
are repeated in both of the files.
*/

var isShowing = true;



setTimeout(function(){
		header_slider.style.marginLeft = "0%";
}, 0);

setTimeout(function(){
		header_slidercr.style.marginLeft = "0%";
}, 0);

//Used to Show the footer when the scroll reaches the bottom of the page
$(window).scroll(function() {
    if ($(window).scrollTop() + $(window).height() === $(document).height()) {
        isShowing = true;
        footer.style.display = "block";
        bottom_shadow.style.display = "block";

    } 

    else if (isShowing === true && $(window).scrollTop() + $(window).height() <= $(document).height() * 0.9) {
        isShowing = false;
        footer.style.display = "none";
  		bottom_shadow.style.display = "none";
    }
}); 