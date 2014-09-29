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
		$('#circular_image1').css("background","url(./images/my_pics/dp.png)");
		circular_image1.style.backgroundPosition = "-50px 0px";
		circular_image1.style.backgroundSize = "150%";
		i1++;
	}

	else if(i1 == 1)
	{
		$('#circular_image1').css("background","url(./images/my_pics/childhood.jpg)");
		circular_image1.style.backgroundPosition = "-250px -200px";
		circular_image1.style.backgroundSize = "300%";
		i1++;

	}
	
	else
	{
		$('#circular_image1').css("background","url(./images/my_pics/jam_night.jpg)");
		circular_image1.style.backgroundPosition = "0px -45px";
	    circular_image1.style.backgroundSize = "120%";
		i1 = 0;
	}

}, 4000);

//Initial delay of 1s
//Changes circular_images every 4s
setTimeout(
setInterval(function(){
	
	if(i2 == 0)
	{
		$('#circular_image2').css("background","url(./images/my_pics/dp.png)");
		circular_image2.style.backgroundPosition = "-50px 0px";
		circular_image2.style.backgroundSize = "150%";
		i2++;
	}

	else if(i2 == 1)
	{
		$('#circular_image2').css("background","url(./images/my_pics/childhood.jpg)");
		circular_image2.style.backgroundPosition = "-250px -200px";
		circular_image2.style.backgroundSize = "300%";
		i2++;

	}
	
	else
	{
		$('#circular_image2').css("background","url(./images/my_pics/jam_night.jpg)");
		circular_image2.style.backgroundPosition = "0px -45px";
	    circular_image2.style.backgroundSize = "120%";
		i2 = 0;
	}

}, 4000), 1000);


//Initial delay of 1s
//Changes circular_images every 4s
setTimeout(
setInterval(function(){
	
	if(i3 == 0)
	{
		$('#circular_image3').css("background","url(./images/my_pics/dp.png)");
		circular_image3.style.backgroundPosition = "-50px 0px";
		circular_image3.style.backgroundSize = "150%";
		i3++;
	}

	else if(i3 == 1)
	{
		$('#circular_image3').css("background","url(./images/my_pics/childhood.jpg)");
		circular_image3.style.backgroundPosition = "-250px -200px";
		circular_image3.style.backgroundSize = "300%";
		i3++;

	}
	
	else
	{
		$('#circular_image3').css("background","url(./images/my_pics/jam_night.jpg)");
		circular_image3.style.backgroundPosition = "0px -45px";
	    circular_image3.style.backgroundSize = "120%";
		i3 = 0;
	}

}, 4000), 2000);
