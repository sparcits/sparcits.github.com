/*---------------------------------------------------------------------
	File Name: custom.js
---------------------------------------------------------------------*/

$(function () {

	"use strict";

	/*===============================================================
	  Preloader
	===============================================================*/

	setTimeout(function () {
		$('.loader_bg').fadeToggle();
	}, 1500);

	/*===============================================================
	  Load Header
	===============================================================*/
	$("#header-box").load("includes/header.html");

	/*===============================================================
	  Load Footer
	===============================================================*/
	$("#footer-box").load("includes/footer.html");

	/*===============================================================
	  Toggle sidebar
	===============================================================*/
	$(document).ready(function () {
		$('#sidebarCollapse').on('click', function () {
			$('#sidebar').toggleClass('active');
			$(this).toggleClass('active');
		});
	});

	/*===============================================================
		Horizontal Scroll
	===============================================================*/
	//Selecting Elements
	let sticky = document.querySelector('.journey-item');
	let stickyParent = document.querySelector('.journey-container');
	let scrollWidth = sticky.scrollWidth;
	let verticalScrollHeight = stickyParent.getBoundingClientRect().height - sticky.getBoundingClientRect().height;

	$(document).on('scroll', function () {
		let stickyPosition = sticky.getBoundingClientRect().top;
		/* console.log(stickyPosition) */
		if (stickyPosition > 130) {
			return;
		} else {
			let scrolled = stickyParent.getBoundingClientRect().top; //how much is scrolled?
			sticky.scrollLeft = (scrollWidth / verticalScrollHeight) * (-scrolled) * 0.85;
		}
	});

});




