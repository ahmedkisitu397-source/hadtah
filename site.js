/* Shared page behaviour: theme switch, mobile menu, gentle reveal-on-scroll, contact form. */
(function () {
  "use strict";
  var $ = function (s) { return document.querySelector(s); };
  /* Theme: System (follows the device), Light or Dark. Saved as "hadtah-theme". */
  var mq = window.matchMedia ? matchMedia("(prefers-color-scheme: dark)") : null;
  function pref() { var p = "system"; try { p = localStorage.getItem("hadtah-theme") || "system"; } catch (e) {} return p === "light" || p === "dark" ? p : "system"; }
  function apply(p) {
    var t = p === "system" ? (mq && mq.matches ? "dark" : "light") : p, d = document.documentElement;
    d.dataset.theme = t; d.dataset.themePref = p; d.style.colorScheme = t;
    document.querySelectorAll('meta[name="theme-color"]').forEach(function (m) { m.setAttribute("content", t === "dark" ? "#070b14" : "#f7f8fa"); if (p !== "system") m.removeAttribute("media"); });
    document.querySelectorAll("#themeSeg [data-pref]").forEach(function (b) { b.setAttribute("aria-checked", String(b.dataset.pref === p)); });
  }
  apply(pref());
  var seg = $("#themeSeg");
  if (seg) seg.addEventListener("click", function (e) {
    var b = e.target.closest("[data-pref]"); if (!b) return;
    try { if (b.dataset.pref === "system") localStorage.removeItem("hadtah-theme"); else localStorage.setItem("hadtah-theme", b.dataset.pref); } catch (er) {}
    apply(b.dataset.pref);
  });
  if (mq) (mq.addEventListener ? mq.addEventListener.bind(mq, "change") : mq.addListener.bind(mq))(function () { if (pref() === "system") apply("system"); });
  window.addEventListener("storage", function (e) { if (e.key === "hadtah-theme") apply(pref()); });
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
  var foot = document.querySelector(".footer");
  if (foot && "IntersectionObserver" in window) new IntersectionObserver(function (es) { document.documentElement.classList.toggle("foot-in", es[0].isIntersecting); }).observe(foot);
  var f = $("#contactForm");
  if (f) f.addEventListener("submit", function (e) {
    e.preventDefault();
    var to = ($("#contactEmail") || {}).textContent || "support@hadtah.com";
    var subject = "Message from " + f.name.value + " (Hadtah website)";
    var text = f.message.value + "\n\nFrom: " + f.name.value + " <" + f.email.value + ">";
    location.href = "mailto:" + to.trim() + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(text);
  });
})();
