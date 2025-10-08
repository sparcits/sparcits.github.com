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
	  Toggle sidebar
	===============================================================*/
	$(document).ready(function () {
		$('#sidebarCollapse').on('click', function () {
			$('#sidebar').toggleClass('active');
			$(this).toggleClass('active');
		});
	});

});




//Load header and footer:
function getPathPrefix() {
  const segments = location.pathname
    .split("/")
    .filter(part => part && !part.endsWith(".html")); // Remove empty + .html

  return "../".repeat(segments.length);
}

async function loadComponent(id, filePath) {
  const prefix = getPathPrefix();
  const fullPath = prefix + filePath;
  console.log(fullPath)
  /* try {
    const res = await fetch(fullPath);
    if (!res.ok) throw new Error(`Failed to load ${filePath}`);
    const html = await res.text();
    document.getElementById(id).innerHTML = html;

    document.querySelectorAll(`#${id} [data-href]`).forEach(link => {
      link.setAttribute("href", prefix + link.getAttribute("data-href"));
    });
  } catch (err) {
    console.error(`Error loading ${filePath}:`, err);
  } */
}
// Load shared components
loadComponent("header", "includes/header.html");
loadComponent("footer", "includes/footer.html");

