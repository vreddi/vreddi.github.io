var isShowing = true;
var i1 = 0;
var i2 = 0;
var i3 = 0;



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

//Changes circular_images every 4s
setInterval(function(){
	
	if(i1 == 0)
	{
		$('#circular_image1').css("background","url(http://i1197.photobucket.com/albums/aa426/Jastner/dp.png)");
		circular_image1.style.backgroundPosition = "-50px 0px";
		circular_image1.style.backgroundSize = "150%";
		i1++;
	}

	else if(i1 == 1)
	{
		$('#circular_image1').css("background","url(http://i1197.photobucket.com/albums/aa426/Jastner/childhood.jpg)");
		circular_image1.style.backgroundPosition = "-250px -200px";
		circular_image1.style.backgroundSize = "300%";
		i1++;

	}

	else if(i1 == 2)
	{
		$('#circular_image1').css("background","url(http://i1197.photobucket.com/albums/aa426/Jastner/karate.jpg)");
		circular_image1.style.backgroundPosition = "-250px -150px";
		circular_image1.style.backgroundSize = "300%";
		i1++;

	}
	
	else
	{
		$('#circular_image1').css("background","url(http://i1197.photobucket.com/albums/aa426/Jastner/jam_night.jpg)");
		circular_image1.style.backgroundPosition = "0px -45px";
	    circular_image1.style.backgroundSize = "120%";
		i1 = 0;
	}

}, 4000);

//Changes circular_images every 4s
setInterval(function(){
	
	if(i2 == 0)
	{
		$('#circular_image2').css("background","url(http://i1197.photobucket.com/albums/aa426/Jastner/OrientationICAS.jpg)");
		circular_image2.style.backgroundPosition = "-200px 0px";
		circular_image2.style.backgroundSize = "300%";
		i2++;
	}

	else if(i2 == 1)
	{
		$('#circular_image2').css("background","url(http://i1197.photobucket.com/albums/aa426/Jastner/friends.jpg)");
		circular_image2.style.backgroundPosition = "0px 0px";
		circular_image2.style.backgroundSize = "200%";
		i2++;

	}

	else if(i2 == 2)
	{
		$('#circular_image2').css("background","url(http://i1197.photobucket.com/albums/aa426/Jastner/AnnualDayICAS2.jpg)");
		circular_image2.style.backgroundPosition = "-50px -100px";
		circular_image2.style.backgroundSize = "300%";
		i2++;

	}
	
	else
	{
		$('#circular_image2').css("background","url(http://i1197.photobucket.com/albums/aa426/Jastner/Holi.jpg)");
		circular_image2.style.backgroundPosition = "-450px -200px";
	    circular_image2.style.backgroundSize = "400%";
		i2 = 0;
	}

}, 4000);


//Changes circular_images every 4s
setInterval(function(){
	
	if(i3 == 0)
	{
		$('#circular_image3').css("background","url(http://i1197.photobucket.com/albums/aa426/Jastner/Orientationperformance.jpg)");
		circular_image3.style.backgroundPosition = "-800px -150px";
		circular_image3.style.backgroundSize = "500%";
		i3++;
	}

	else if(i3 == 1)
	{
		$('#circular_image3').css("background","url(http://i1197.photobucket.com/albums/aa426/Jastner/ModernSchoolConcert.jpg)");
		circular_image3.style.backgroundPosition = "-280px -170px";
		circular_image3.style.backgroundSize = "500%";
		i3++;
	}

	else if(i3 == 2)
	{
		$('#circular_image3').css("background","url(http://i1197.photobucket.com/albums/aa426/Jastner/AnnualDayICAS.jpg)");
		circular_image3.style.backgroundPosition = "-200px -20px";
		circular_image3.style.backgroundSize = "300%";
		i3++;

	}
	
	else
	{
		$('#circular_image3').css("background","url(http://i1197.photobucket.com/albums/aa426/Jastner/paintball.jpg)");
		circular_image3.style.backgroundPosition = "-430px -100px";
	    circular_image3.style.backgroundSize = "450%";
		i3 = 0;
	}

}, 4000);
