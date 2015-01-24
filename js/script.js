var pagetop, menu, yPos;

/*
Name: yScroll()
Description: Handles the thought_menu bar to go away and reduction of size of the
			 pagetop depending on the scroll-bar's position.
*/
function yScroll(){
	pagetop = document.getElementById('pagetop');
	menu = document.getElementById('thought_menu');
	yPos = window.pageYOffset;
	
	if(yPos > 150){
	
			pagetop.style.height = "36px";
			pagetop.style.paddingTop = "8px";
			pagetop.style.paddingBottom = "8px";
			menu.style.height = "0px";


			$("#social_id li:eq(0) i").attr('class', 'fa fa-twitter-square fa-black');
			$("#social_id li:eq(1) i").attr('class', 'fa fa-facebook-square fa-black');
			$("#social_id li:eq(2) i").attr('class', 'fa fa-google-plus-square fa-black');
			$("#social_id li:eq(3) i").attr('class', 'fa fa-linkedin-square fa-black');
			$("#social_id li:eq(4) i").attr('class', 'fa fa-github-square fa-black');
			$("#social_id li:eq(5) i").attr('class', 'fa fa-twitch fa-black');
	} 

	else {
		
		pagetop.style.height = "120px";
		pagetop.style.paddingTop = "8px";
		pagetop.style.paddingBottom = "50px";
		menu.style.height = "60px";


		$("#social_id li:eq(0) i").attr('class', 'fa fa-twitter-square fa-2x fa-black');
		$("#social_id li:eq(1) i").attr('class', 'fa fa-facebook-square fa-2x fa-black');
		$("#social_id li:eq(2) i").attr('class', 'fa fa-google-plus-square fa-2x fa-black');
		$("#social_id li:eq(3) i").attr('class', 'fa fa-linkedin-square fa-2x fa-black');
		$("#social_id li:eq(4) i").attr('class', 'fa fa-github-square fa-2x fa-black');
		$("#social_id li:eq(5) i").attr('class', 'fa fa-twitch fa-2x fa-black');
	}
		
}
		
window.addEventListener("scroll", yScroll);



/*
This JS file is used for the 'home page'.
The 'other pages' like experience page, contact page, resume page,
is governed by header_title.js and not this file even though some functions
are repeated in both of the files.
*/

var isShowing = true;
var i1 = 0;
var i2 = 0;
var i3 = 0;

	
var arr = new Array();

			arr[0] = '"Quick....whats my favourite desert?...Jello!!!!!!!"<div style="font-size: 12px">-Phil Dunphy</div>';


			arr[1] = '"There are no secrets in life... just hidden truths that lie beneath the surface."<br><div style="font-size: 12px"> - Dexter</div>'; 


			arr[2] = '"Nothing is particularly hard if you divide it into small jobs."<br><div style="font-size: 12px"> - Henry Ford</div>';


			arr[3] = '"Computer science is no more about computers than astronomy is about telescopes."<br><div style="font-size: 12px"> - Edsger Dijkstra</div>';


			arr[4] = '"When nine hundred years old you reach, look as good you will not."<br><div style="font-size: 12px">- Master Yoda</div>';


			arr[5] = '"There is us and the dead. We survive this by pulling together, not apart."<br><div style="font-size: 12px">- Rick Grimes</div>';


			arr[6] = '"Those who cannot remember the past are doomed to repeat it."<br><div style="font-size: 12px">- George Santayana</div>';

$(function(){

	yPos = window.pageYOffset;

	var size = arr.length;
	//0 -> min value
	//size - 1 -> max value
	var rand = Math.floor(Math.random() * ((size - 1) - 0 + 1)) + 0;;
	$("#thought").append(arr[rand]);

	//TWITTER COLOR CHANGE
	$("#social_id li:eq(0)").hover(
	function(){
		if(yPos > 150)
			$("#social_id li:eq(0) i").attr('class', 'fa fa-twitter-square fa-twitter-color');
		else
			$("#social_id li:eq(0) i").attr('class', 'fa fa-twitter-square fa-2x fa-twitter-color');
	},

	function(){
		if(yPos > 150)
			$("#social_id li:eq(0) i").attr('class', 'fa fa-twitter-square fa-black');
		else
			$("#social_id li:eq(0) i").attr('class', 'fa fa-twitter-square fa-2x fa-black');
	}

	);

	//FACEBOOK COLOR CHANGE
	$("#social_id li:eq(1)").hover(
	function(){
		if(yPos > 150)
			$("#social_id li:eq(1) i").attr('class', 'fa fa-facebook-square fa-facebook-color');
		else
			$("#social_id li:eq(1) i").attr('class', 'fa fa-facebook-square fa-2x fa-facebook-color');
	},

	function(){
		if(yPos > 150)
			$("#social_id li:eq(1) i").attr('class', 'fa fa-facebook-square fa-black');
		else
			$("#social_id li:eq(1) i").attr('class', 'fa fa-facebook-square fa-2x fa-black');
	}

	);

	//GOOGLE+ COLOR CHANGE
	$("#social_id li:eq(2)").hover(
	function(){
		if(yPos > 150)
			$("#social_id li:eq(2) i").attr('class', 'fa fa-google-plus-square fa-google-plus-color');
		else
			$("#social_id li:eq(2) i").attr('class', 'fa fa-google-plus-square fa-2x fa-google-plus-color');
	},

	function(){
		if(yPos > 150)
			$("#social_id li:eq(2) i").attr('class', 'fa fa-google-plus-square fa-black');
		else
			$("#social_id li:eq(2) i").attr('class', 'fa fa-google-plus-square fa-2x fa-black');
	}

	);

	//LINKEDIN COLOR CHANGE
	$("#social_id li:eq(3)").hover(
	function(){
		if(yPos > 150)
			$("#social_id li:eq(3) i").attr('class', 'fa fa-linkedin-square fa-linkedin-color');
		else
			$("#social_id li:eq(3) i").attr('class', 'fa fa-linkedin-square fa-2x fa-linkedin-color');
	},

	function(){
		if(yPos > 150)
			$("#social_id li:eq(3) i").attr('class', 'fa fa-linkedin-square fa-black');
		else
			$("#social_id li:eq(3) i").attr('class', 'fa fa-linkedin-square fa-2x fa-black');
	}

	);

	//GITHUB COLOR CHANGE
	$("#social_id li:eq(4)").hover(
	function(){
		if(yPos > 150)
			$("#social_id li:eq(4) i").attr('class', 'fa fa-github-square fa-github-color');
		else
			$("#social_id li:eq(4) i").attr('class', 'fa fa-github-square fa-2x fa-github-color');
	},

	function(){
		if(yPos > 150)
			$("#social_id li:eq(4) i").attr('class', 'fa fa-github-square fa-black');
		else
			$("#social_id li:eq(4) i").attr('class', 'fa fa-github-square fa-2x fa-black');
	}

	);

	//TWITCH COLOR CHANGE
	$("#social_id li:eq(5)").hover(
	function(){
		if(yPos > 150)
			$("#social_id li:eq(5) i").attr('class', 'fa fa-twitch fa-twitch-color');
		else
			$("#social_id li:eq(5) i").attr('class', 'fa fa-twitch fa-2x fa-twitch-color');
	},

	function(){
		if(yPos > 150)
			$("#social_id li:eq(5) i").attr('class', 'fa fa-twitch fa-black');
		else
			$("#social_id li:eq(5) i").attr('class', 'fa fa-twitch fa-2x fa-black');
	}
	
	);

})();



