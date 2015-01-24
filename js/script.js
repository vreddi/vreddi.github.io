var pagetop, menu, yPos;
		

function yScroll(){
	pagetop = document.getElementById('pagetop');
	menu = document.getElementById('thought_menu');
	yPos = window.pageYOffset;
	
	if(yPos > 150){
	
			pagetop.style.height = "36px";
			pagetop.style.paddingTop = "8px";
			menu.style.height = "0px";

			$("#social_id li:eq(0) i").attr('class', 'fa fa-twitter-square');
			$("#social_id li:eq(1) i").attr('class', 'fa fa-facebook-square');
			$("#social_id li:eq(2) i").attr('class', 'fa fa-google-plus-square');
			$("#social_id li:eq(3) i").attr('class', 'fa fa-linkedin-square');
			$("#social_id li:eq(4) i").attr('class', 'fa fa-github-square');
			$("#social_id li:eq(5) i").attr('class', 'fa fa-twitch');
	} 

	else {
		
		pagetop.style.height = "120px";
		pagetop.style.paddingTop = "50px";
		menu.style.height = "50px";

		$("#social_id li:eq(0) i").attr('class', 'fa fa-twitter-square fa-2x');
			$("#social_id li:eq(1) i").attr('class', 'fa fa-facebook-square fa-2x');
			$("#social_id li:eq(2) i").attr('class', 'fa fa-google-plus-square fa-2x');
			$("#social_id li:eq(3) i").attr('class', 'fa fa-linkedin-square fa-2x');
			$("#social_id li:eq(4) i").attr('class', 'fa fa-github-square fa-2x');
			$("#social_id li:eq(5) i").attr('class', 'fa fa-twitch fa-2x');
	}
		
}
		
window.addEventListener("scroll", yScroll);