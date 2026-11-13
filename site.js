/* Shared page behaviour: theme switch, mobile menu, gentle reveal-on-scroll, contact form. */
(function () {
  "use strict";
  var $ = function (s) { return document.querySelector(s); };
  var t = $("#themeToggle");
  if (t) t.addEventListener("click", function () {
    var next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try { localStorage.setItem("hadtah-theme", next); } catch (e) {}
  });
  var nav = $("#nav"), mb = $("#menuBtn");
  if (mb && nav) {
    mb.addEventListener("click", function () { var o = nav.classList.toggle("open"); mb.setAttribute("aria-expanded", String(o)); });
    nav.addEventListener("click", function (e) { if (e.target.closest("a")) { nav.classList.remove("open"); mb.setAttribute("aria-expanded", "false"); } });
  }
  function reveal() {
    var els = document.querySelectorAll(".reveal:not(.in)");
    if (!("IntersectionObserver" in window)) { els.forEach(function (e) { e.classList.add("in"); }); return; }
    var io = new IntersectionObserver(function (es) { es.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } }); }, { rootMargin: "0px 0px -8% 0px" });
    els.forEach(function (e) { io.observe(e); });
  }
  window.HadtahReveal = reveal; reveal();
  var f = $("#contactForm");
  if (f) f.addEventListener("submit", function (e) {
    e.preventDefault();
    var to = ($("#contactEmail") || {}).textContent || "support@hadtah.com";
    var subject = "Message from " + f.name.value + " (Hadtah website)";
    var text = f.message.value + "\n\nFrom: " + f.name.value + " <" + f.email.value + ">";
    location.href = "mailto:" + to.trim() + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(text);
  });
})();
