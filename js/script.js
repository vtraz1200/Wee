// NAV TEMPLATE — extracted from js/script.js

const headerEl = document.querySelector(".header");
const btnNavEl = document.querySelector(".btn-mobile-nav");

// Mobile navigation: toggles .nav-open on the header
// (style .nav-open in your media rules when you add them)
btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

// Sticky navigation: header becomes fixed once this element scrolls out of view.
// Change the selector to your hero/first section.
const stickyTriggerEl = document.querySelector(".demo-hero");

if (stickyTriggerEl) {
  const obs = new IntersectionObserver(
    function (entries) {
      document.body.classList.toggle("sticky", !entries[0].isIntersecting);
    },
    { root: null, threshold: 0, rootMargin: "-80px" },
  );
  obs.observe(stickyTriggerEl);
}

//////////////////////////////////////////////////////////
// FLEXBOX GAP SAFARI FIX

function checkFlexGap() {
  const flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  const isSupported = flex.scrollHeight === 1;
  flex.remove();

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}

checkFlexGap();
