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

  try {
    const res = await fetch(fullPath);
    if (!res.ok) throw new Error(`Failed to load ${filePath}`);
    const html = await res.text();
    const container = document.getElementById(id);
    container.innerHTML = html;

    // Rewrite common attributes
    rewriteComponentLinks(container, prefix);
  } catch (err) {
    console.error(`Error loading ${filePath}:`, err);
  }
}

function rewriteComponentLinks(container, prefix) {
  // data-href -> href
  container.querySelectorAll("[data-href]").forEach(el => {
    el.setAttribute("href", prefix + el.getAttribute("data-href"));
  });

  // data-src -> src
  container.querySelectorAll("[data-src]").forEach(el => {
    el.setAttribute("src", prefix + el.getAttribute("data-src"));
  });

  // data-action -> action (e.g. for forms)
  container.querySelectorAll("[data-action]").forEach(el => {
    el.setAttribute("action", prefix + el.getAttribute("data-action"));
  });

  // data-script -> load and insert script tag
  container.querySelectorAll("[data-script]").forEach(el => {
    const script = document.createElement("script");
    script.src = prefix + el.getAttribute("data-script");
    document.body.appendChild(script);
  });
}

// Load shared components
loadComponent("header-box", "includes/header.html");
loadComponent("footer-box", "includes/footer.html");

