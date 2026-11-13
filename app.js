/* Hadtah site logic. You should not need to edit this file: app entries live in apps.js. */
(function () {
  "use strict";

  var apps = Array.isArray(window.HADTAH_APPS) ? window.HADTAH_APPS : [];
  var state = { q: "", cat: "All" };

  var $ = function (sel) { return document.querySelector(sel); };
  var grid = $("#grid"), chips = $("#chips"), empty = $("#empty"), count = $("#resultCount");
  var dialog = $("#details"), body = $("#detailsBody");

  function esc(v) {
    return String(v == null ? "" : v).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function isIOSClient() {
    var ua = navigator.userAgent || "";
    if (/iPad|iPhone|iPod/.test(ua)) return true;
    // iPadOS 13+ reports as Macintosh in the UA but has a touch screen
    if (navigator.platform === "MacIntel" && (navigator.maxTouchPoints || 0) > 1) return true;
    return false;
  }
  var ON_IOS = isIOSClient();
  try { document.documentElement.dataset.client = ON_IOS ? "ios" : "other"; } catch (e) {}
  function iosUrl(a) { return (a.ios_url || "").trim(); }
  function isOpen(a) { return !!(a.open_url && String(a.status || "").toLowerCase() !== "coming soon"); }
  function hasDownload(a) {
    if (isOpen(a)) return true;
    var url = (a.download_url || "").trim();
    var soon = String(a.status || "").toLowerCase() === "coming soon";
    return url !== "" && url !== "#" && !soon;
  }
  function fmtDate(d) {
    if (!d) return "";
    var dt = new Date(d + "T00:00:00");
    if (isNaN(dt)) return esc(d);
    return dt.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
  }
  function platforms(a) { return (a.platforms || []).join(", ") || "Windows"; }
  function size(a) { return a.size && String(a.size).trim() ? a.size : "TBA"; }

  function badges(a) {
    var out = "";
    if (a.tested_on) out += '<span class="badge ok">✓ Tested and working · ' + fmtDate(a.tested_on) + "</span>";
    else if (!hasDownload(a)) out += '<span class="badge soon">Final testing · coming soon</span>';
    if (a.featured) out += '<span class="badge feat">★ Featured</span>';
    return out;
  }
  var DL_ICON = '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 4v11M7 10l5 5 5-5M5 20h14"/></svg>';
  var OPEN_ICON = '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"/></svg>';
  var IPHONE_ICON = '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="7" y="2" width="10" height="20" rx="2"/><path d="M11 19h2"/></svg>';
  var IOS_TIP = "On iPhone: open in Safari, tap Share, then Add to Home Screen";
  function iosTip(a) {
    if (!iosUrl(a) || String(a.status || "").toLowerCase() === "coming soon") return "";
    return '<p class="ios-tip">' + esc(IOS_TIP) + "</p>";
  }
  function downloadBtn(a, cls) {
    var parts = [];
    if (isOpen(a)) {
      parts.push('<a class="btn btn-primary ' + cls + '" href="' + esc(a.open_url) + '" target="_blank" rel="noopener">' + OPEN_ICON + esc(a.open_label || "Open") + "</a>");
    }
    if (iosUrl(a) && String(a.status || "").toLowerCase() !== "coming soon") {
      var kind = ON_IOS ? "btn-primary btn-iphone " : "btn-outline btn-iphone ";
      parts.push('<a class="btn ' + kind + cls + '" href="' + esc(iosUrl(a)) + '" target="_blank" rel="noopener">' + IPHONE_ICON + esc(a.ios_label || "Open on iPhone") + "</a>");
    }
    var list = Array.isArray(a.downloads) ? a.downloads : [];
    if (list.length && String(a.status || "").toLowerCase() !== "coming soon") {
      list.forEach(function (d, i) {
        var kind = (!isOpen(a) && i === 0) ? "btn-primary " : "btn-outline ";
        parts.push('<a class="btn ' + kind + cls + '" href="' + esc(d.url) + '" rel="noopener" download>' + DL_ICON + esc(d.label) + (d.size ? ' <small>' + esc(d.size) + "</small>" : "") + "</a>");
      });
    } else if (!isOpen(a) && hasDownload(a)) {
      parts.push('<a class="btn btn-primary ' + cls + '" href="' + esc(a.download_url) + '" rel="noopener" download>' + DL_ICON + "Download</a>");
    }
    return parts.length ? parts.join("") : '<span class="btn ' + cls + '" aria-disabled="true">Coming soon</span>';
  }

  function accentStyle(a) {
    var c = a.accent || "#14b8a6";
    return "--accent:" + esc(c) + ";--accent-grad:linear-gradient(135deg," + esc(c) + "," + esc(c) + "cc)";
  }
  function listItems(arr) { return (arr || []).map(function (x) { return "<li>" + esc(x) + "</li>"; }).join(""); }

  /* ---- Showcases: screenshots, how it works, features, who benefits ---- */
  var sc = $("#showcases");
  if (sc) {
    sc.innerHTML = apps.map(function (a, i) {
      var shots = a.screenshots || [];
      var gal = shots.length ? '<figure class="gallery" data-gal="' + esc(a.id) + '">' +
        '<div class="main" role="button" tabindex="0" aria-label="Enlarge screenshot"><img src="' + esc(shots[0].src) + '" alt="' + esc(shots[0].alt) + '" width="1120" height="700"></div>' +
        (shots.length > 1 ? '<div class="thumbs">' + shots.map(function (s2, j) {
          return '<button type="button" data-shot="' + j + '" aria-label="' + esc(s2.alt) + '" aria-current="' + (j === 0) + '"><img src="' + esc(s2.src) + '" alt="" loading="lazy"></button>';
        }).join("") + "</div>" : "") +
        '<figcaption>' + esc(shots[0].alt) + "</figcaption></figure>" : "";
      return '<article class="showcase reveal' + (i % 2 ? " flip" : "") + '" id="app-' + esc(a.id) + '" style="' + accentStyle(a) + '">' + gal +
        "<div>" +
        '<div class="sc-head"><img src="' + esc(a.icon) + '" alt="" loading="lazy"><div><h3>' + esc(a.name) + '</h3><div class="cat">' + esc(a.category) + "</div></div></div>" +
        '<p class="sc-tag">' + esc(a.tagline || a.description) + "</p>" +
        '<div class="sc-cols"><div class="sc-block"><h4>How it works</h4><ol class="how">' + listItems(a.how) + "</ol></div>" +
        '<div class="sc-block"><h4>Key features</h4><ul class="mini-feats">' + listItems(a.features) + "</ul></div></div>" +
        '<div class="sc-block" style="margin-bottom:22px"><h4>Who benefits</h4><ul class="who">' + listItems(a.benefits) + "</ul></div>" +
        '<div class="sc-actions">' + downloadBtn(a, "btn-sm") + '<button type="button" class="btn btn-ghost btn-sm" data-open="' + esc(a.id) + '">Details</button></div>' +
        iosTip(a) + "</div></article>";
    }).join("");
    sc.addEventListener("click", function (e) {
      var t = e.target.closest("[data-shot]");
      var g = e.target.closest("[data-gal]");
      if (t && g) {
        var a = apps.filter(function (x) { return x.id === g.dataset.gal; })[0], s3 = a.screenshots[+t.dataset.shot];
        var img = g.querySelector(".main img"); img.src = s3.src; img.alt = s3.alt;
        g.querySelector("figcaption").textContent = s3.alt;
        g.querySelectorAll("[data-shot]").forEach(function (b) { b.setAttribute("aria-current", String(b === t)); });
        return;
      }
      var m = e.target.closest(".main"); if (m) { var im = m.querySelector("img"); openLightbox(im.src, im.alt); return; }
      var d = e.target.closest("[data-open]"); if (d) openDetails(d.dataset.open, true);
    });
    sc.addEventListener("keydown", function (e) { var m = e.target.closest(".main"); if (m && (e.key === "Enter" || e.key === " ")) { e.preventDefault(); var im = m.querySelector("img"); openLightbox(im.src, im.alt); } });
  }
  var lb = $("#lightbox");
  function openLightbox(src, alt) {
    if (!lb) return; lb.querySelector("img").src = src; lb.querySelector("img").alt = alt || ""; lb.querySelector("p").textContent = alt || "";
    if (!lb.open) lb.showModal();
  }
  if (lb) lb.addEventListener("click", function (e) { if (e.target === lb || e.target.closest("[data-close]")) lb.close(); });

  /* ---- Category chips ---- */
  var cats = ["All"];
  apps.forEach(function (a) { if (a.category && cats.indexOf(a.category) < 0) cats.push(a.category); });
  chips.innerHTML = cats.map(function (c) {
    return '<button type="button" class="chip" data-cat="' + esc(c) + '" aria-pressed="' + (c === "All") + '">' + esc(c) + "</button>";
  }).join("");
  chips.addEventListener("click", function (e) {
    var b = e.target.closest(".chip"); if (!b) return;
    state.cat = b.dataset.cat;
    chips.querySelectorAll(".chip").forEach(function (x) { x.setAttribute("aria-pressed", String(x === b)); });
    render();
  });
  $("#search").addEventListener("input", function (e) { state.q = e.target.value.trim().toLowerCase(); render(); });

  /* ---- Grid ---- */
  function matches(a) {
    if (state.cat !== "All" && a.category !== state.cat) return false;
    if (!state.q) return true;
    var hay = [a.name, a.category, a.description, a.details].join(" ").toLowerCase();
    return state.q.split(/\s+/).every(function (w) { return hay.indexOf(w) >= 0; });
  }
  function render() {
    var list = apps.filter(matches).sort(function (x, y) { return (y.featured ? 1 : 0) - (x.featured ? 1 : 0); });
    grid.innerHTML = list.map(function (a) {
      var feats = (a.features || []).slice(0, 3).map(function (f) { return "<li>" + esc(f) + "</li>"; }).join("");
      return '<article class="card reveal" style="' + accentStyle(a) + '">' +
        '<div class="card-top"><img class="app-icon" src="' + esc(a.icon || "assets/hadtah-logo.svg") + '" alt="" width="60" height="60" loading="lazy">' +
        '<div><h3>' + esc(a.name) + '</h3><div class="cat">' + esc(a.category) + "</div></div></div>" +
        (a.tagline ? '<p class="tagline">' + esc(a.tagline) + "</p>" : "") +
        '<p class="desc">' + esc(a.description) + "</p>" +
        (feats ? '<ul class="mini-feats">' + feats + "</ul>" : "") +
        '<div class="meta"><span>v' + esc(a.version || "1.0") + "</span><span>" + esc(size(a)) + "</span><span>" + esc(platforms(a)) + "</span></div>" +
        (a.note ? '<p class="card-note">' + esc(a.note) + "</p>" : "") +
        '<div class="card-actions">' + downloadBtn(a, "btn-sm") +
        '<button type="button" class="btn btn-ghost btn-sm" data-open="' + esc(a.id) + '">Details</button>' +
        '<a class="btn btn-ghost btn-sm" href="#app-' + esc(a.id) + '">How it works</a></div>' +
        iosTip(a) +
        "</article>";
    }).join("");
    if (window.HadtahReveal) window.HadtahReveal();
    empty.hidden = list.length > 0;
    count.textContent = list.length === apps.length ? apps.length + " apps" : "Showing " + list.length + " of " + apps.length + " apps";
  }
  grid.addEventListener("click", function (e) {
    var b = e.target.closest("[data-open]"); if (b) openDetails(b.dataset.open, true);
  });

  /* ---- Details ---- */
  function openDetails(id, push) {
    var a = apps.filter(function (x) { return x.id === id; })[0]; if (!a) return;
    var log = (a.changelog || []).map(function (c) {
      return "<li><b>Version " + esc(c.version) + "</b>" + (c.date ? " · " + fmtDate(c.date) : "") + "<br>" + esc(c.notes) + "</li>";
    }).join("") || "<li>No changes yet.</li>";
    body.innerHTML =
      '<button type="button" class="icon-btn close" aria-label="Close" data-close>' +
      '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg></button>' +
      '<div class="d-head" style="' + accentStyle(a) + '"><img class="app-icon" src="' + esc(a.icon || "assets/hadtah-logo.svg") + '" alt="" width="68" height="68">' +
      '<div><h2 id="dTitle">' + esc(a.name) + '</h2><div class="badges">' + badges(a) + "</div></div></div>" +
      "<p>" + esc(a.description) + "</p>" +
      '<div class="d-facts"><div>Version<b>' + esc(a.version || "1.0") + "</b></div><div>Size<b>" + esc(size(a)) + "</b></div>" +
      "<div>Works on<b>" + esc(platforms(a)) + "</b></div><div>Last tested<b>" + (a.tested_on ? fmtDate(a.tested_on) : "Testing now") + "</b></div></div>" +
      ((a.screenshots || []).length ? '<div class="d-sec"><h3>Screenshots</h3><div class="d-gallery">' + a.screenshots.map(function (x) { return '<button type="button" data-zoom="' + esc(x.src) + '" data-alt="' + esc(x.alt) + '"><img src="' + esc(x.src) + '" alt="' + esc(x.alt) + '" loading="lazy"></button>'; }).join("") + "</div></div>" : "") +
      '<div class="d-sec"><h3>What it does</h3><p>' + esc(a.details || a.description) + "</p></div>" +
      ((a.how || []).length ? '<div class="d-sec"><h3>How it works</h3><ol>' + listItems(a.how) + "</ol></div>" : "") +
      ((a.features || []).length ? '<div class="d-sec"><h3>Key features</h3><ul>' + listItems(a.features) + "</ul></div>" : "") +
      ((a.benefits || []).length ? '<div class="d-sec"><h3>Who benefits</h3><ul class="who" style="padding:0">' + listItems(a.benefits) + "</ul></div>" : "") +
      installHelp(a) +
      '<div class="d-sec"><h3>What’s new</h3><ul class="changelog">' + log + "</ul></div>" +
      '<div class="d-actions">' + downloadBtn(a, "") + '<button type="button" class="btn btn-ghost" data-close>Close</button></div>' +
      iosTip(a);
    if (!dialog.open) dialog.showModal();
    if (push && location.hash !== "#app/" + a.id) history.pushState(null, "", "#app/" + a.id);
  }
  function installHelp(a) {
    var android = (a.downloads || []).some(function (d) { return d.kind === "android"; });
    var hasDl = Array.isArray(a.downloads) && a.downloads.length;
    var html = '<div class="d-sec"><h3>' + (isOpen(a) && hasDl ? "How to use or install" : isOpen(a) ? "How to use" : "How to install") + "</h3>";
    if (isOpen(a)) {
      html += (hasDl || iosUrl(a) ? "<h4>In your browser</h4>" : "") + "<ol>" +
        "<li>Press <b>" + esc(a.open_label || "Open") + "</b>. It opens in your browser; nothing to install.</li>" +
        "<li>To keep it like an app, use your browser menu: <b>Install app</b> or <b>Add to Home screen</b>.</li></ol>";
    }
    if (iosUrl(a)) {
      html += "<h4>iPhone</h4><ol>" +
        "<li>Press <b>" + esc(a.ios_label || "Open on iPhone") + "</b> to open the website in Safari (nothing to download).</li>" +
        "<li>Tap <b>Share</b>, then <b>Add to Home Screen</b>.</li></ol>";
    }
    if (hasDl && android) {
      html += "<h4>Android</h4><ol>" +
        "<li>Press <b>Android APK</b>. The file is saved in your Downloads.</li>" +
        "<li>Open the file. If your phone asks, tap <b>Settings</b> and turn on <b>Allow from this source</b>, then go back and tap <b>Install</b>.</li>" +
        "<li>Open " + esc(a.name) + " from your apps.</li></ol>";
    }
    if (hasDl) {
      html += (android || isOpen(a) ? "<h4>Windows</h4>" : "") +
        "<ol><li>Press <b>" + (android ? "Windows installer" : "Download") + "</b>. The setup file is saved in your Downloads folder.</li>" +
        "<li>Double-click the setup file.</li>" +
        "<li>Click <b>Next</b>, then <b>Install</b> and <b>Finish</b>.</li>" +
        "<li>Open " + esc(a.name) + " from the desktop icon or the Start menu.</li></ol>" +
        '<div class="callout">If Windows shows <b>“Windows protected your PC”</b>, click <b>More info</b>, then <b>Run anyway</b>. This is normal for new apps that are not yet signed.</div>';
    }
    if (a.note) html += '<div class="callout">' + esc(a.note) + "</div>";
    return html + "</div>";
  }
  function closeDetails() {
    if (dialog.open) dialog.close();
  }
  dialog.addEventListener("click", function (e) {
    var z = e.target.closest("[data-zoom]"); if (z) { openLightbox(z.dataset.zoom, z.dataset.alt); return; }
    if (e.target === dialog || e.target.closest("[data-close]")) closeDetails();
  });
  dialog.addEventListener("close", function () {
    if (location.hash.indexOf("#app/") === 0) history.pushState(null, "", location.pathname + location.search + "#apps");
  });
  function fromHash() {
    var m = location.hash.match(/^#app\/(.+)$/);
    if (m) openDetails(decodeURIComponent(m[1]), false); else closeDetails();
  }
  window.addEventListener("popstate", fromHash);

  render();
  fromHash();
})();
