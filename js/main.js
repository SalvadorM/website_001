
$(document).ready(function () {

	//window.addEventListener('DOMContentLoaded', scrollAni, false);
	//variables for parallax
	var topDIV = document.querySelector(".wrapper-text");
	var bottDIV = document.querySelector(".wrapper-text2");
	var backImg = document.querySelector(".wrapper-main");
	var scrolledT = 0;

	window.setTimeout(slide, 1000);

	$(window).scroll(scrollNav);

	function scrollNav(){

		var curr = $(this).scrollTop();

		if (scrolledT > curr){
			//show the menu
			$('.menuTop').css('top','0');
			$('.menuTop').addClass('drop');
		} else {
			//hide the Menu
			$('.menuTop').css('top','-100%');

		}
		scrolledT = curr ;
	}
	//Parallax animation
	function scrollAni(){

		var yScroll = $(this).scrollTop();
			setCor(0, yScroll * .3, topDIV);
			setCor(0, yScroll * .3, bottDIV);
			setCor(0, yScroll * -.1, backImg);

			requestAnimationFrame(scrollAni);
	}

	//Setting translate variables
	function setCor(x, y, el) {
		el.style.transform = "translate3d(" + x + "," + y + "px, 0";
	}

	//Starting animation in index.html
	function slide(){
		$(".top-section").addClass('active');
		$(".bottom-section").addClass('active');
		$(".wrapper-text").addClass('addColor');
		$(".wrapper-text2").addClass('navDisplay')
	}

	scrollAni();
});
//adding events
	$(".mainNav").click(closeAni);
	$(".menu-box").click(closeAni);
	//toggle the navigation menu
	function closeAni() {
			$(".icon").toggleClass('menuAni');
			$(".mainNav").toggleClass('navDisplay');
	}
