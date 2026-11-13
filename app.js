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
  function downloadBtn(a, cls) {
    if (isOpen(a)) {
      return '<a class="btn btn-primary ' + cls + '" href="' + esc(a.open_url) + '" target="_blank" rel="noopener">' + OPEN_ICON + esc(a.open_label || "Open") + "</a>";
    }
    if (hasDownload(a) && Array.isArray(a.downloads) && a.downloads.length) {
      return a.downloads.map(function (d, i) {
        return '<a class="btn ' + (i === 0 ? "btn-primary " : "btn-outline ") + cls + '" href="' + esc(d.url) + '" rel="noopener" download>' + DL_ICON + esc(d.label) + (d.size ? ' <small>' + esc(d.size) + "</small>" : "") + "</a>";
      }).join("");
    }
    if (hasDownload(a)) {
      return '<a class="btn btn-primary ' + cls + '" href="' + esc(a.download_url) + '" rel="noopener" download>' +
        '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 4v11M7 10l5 5 5-5M5 20h14"/></svg>Download</a>';
    }
    return '<span class="btn ' + cls + '" aria-disabled="true">Coming soon</span>';
  }

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
      return '<article class="card">' +
        '<div class="card-top"><img class="app-icon" src="' + esc(a.icon || "assets/hadtah-logo.svg") + '" alt="" width="56" height="56" loading="lazy">' +
        '<div><h3>' + esc(a.name) + '</h3><div class="cat">' + esc(a.category) + "</div></div></div>" +
        "<p>" + esc(a.description) + "</p>" +
        '<div class="badges">' + badges(a) + "</div>" +
        '<div class="meta"><span>Version <b>' + esc(a.version || "1.0") + "</b></span><span>Size <b>" + esc(size(a)) + "</b></span><span><b>" + esc(platforms(a)) + "</b></span></div>" +
        (a.note ? '<p class="card-note">' + esc(a.note) + "</p>" : "") +
        '<div class="card-actions">' + downloadBtn(a, "btn-sm") +
        '<button type="button" class="btn btn-ghost btn-sm" data-open="' + esc(a.id) + '">Details</button></div>' +
        "</article>";
    }).join("");
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
      '<div class="d-head"><img class="app-icon" src="' + esc(a.icon || "assets/hadtah-logo.svg") + '" alt="" width="68" height="68">' +
      '<div><h2 id="dTitle">' + esc(a.name) + '</h2><div class="badges">' + badges(a) + "</div></div></div>" +
      "<p>" + esc(a.description) + "</p>" +
      '<div class="d-facts"><div>Version<b>' + esc(a.version || "1.0") + "</b></div><div>Size<b>" + esc(size(a)) + "</b></div>" +
      "<div>Works on<b>" + esc(platforms(a)) + "</b></div><div>Last tested<b>" + (a.tested_on ? fmtDate(a.tested_on) : "Testing now") + "</b></div></div>" +
      '<div class="d-sec"><h3>What it does</h3><p>' + esc(a.details || a.description) + "</p></div>" +
      installHelp(a) +
      '<div class="d-sec"><h3>What’s new</h3><ul class="changelog">' + log + "</ul></div>" +
      '<div class="d-actions">' + downloadBtn(a, "") + '<button type="button" class="btn btn-ghost" data-close>Close</button></div>';
    if (!dialog.open) dialog.showModal();
    if (push && location.hash !== "#app/" + a.id) history.pushState(null, "", "#app/" + a.id);
  }
  function installHelp(a) {
    if (isOpen(a)) {
      return '<div class="d-sec"><h3>How to use</h3><ol>' +
        "<li>Press <b>" + esc(a.open_label || "Open") + "</b>. It opens in your browser; nothing to install.</li>" +
        "<li>To keep it like an app, use your browser menu: <b>Install app</b> or <b>Add to Home screen</b>.</li></ol>" +
        (a.note ? '<div class="callout">' + esc(a.note) + "</div>" : "") + "</div>";
    }
    var android = (a.downloads || []).some(function (d) { return d.kind === "android"; });
    return '<div class="d-sec"><h3>How to install</h3>' +
      (android ? "<h4>Android</h4><ol>" +
        "<li>Press <b>Android APK</b>. The file is saved in your Downloads.</li>" +
        "<li>Open the file. If your phone asks, tap <b>Settings</b> and turn on <b>Allow from this source</b>, then go back and tap <b>Install</b>.</li>" +
        "<li>Open " + esc(a.name) + " from your apps.</li></ol><h4>Windows</h4>" : "") +
      "<ol><li>Press <b>" + (android ? "Windows installer" : "Download") + "</b>. The setup file is saved in your Downloads folder.</li>" +
      "<li>Double-click the setup file.</li>" +
      "<li>Click <b>Next</b>, then <b>Install</b> and <b>Finish</b>.</li>" +
      "<li>Open " + esc(a.name) + " from the desktop icon or the Start menu.</li></ol>" +
      '<div class="callout">If Windows shows <b>“Windows protected your PC”</b>, click <b>More info</b>, then <b>Run anyway</b>. This is normal for new apps that are not yet signed.</div></div>';
  }
  function closeDetails() {
    if (dialog.open) dialog.close();
  }
  dialog.addEventListener("click", function (e) {
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

  /* ---- Theme ---- */
  $("#themeToggle").addEventListener("click", function () {
    var next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    localStorage.setItem("hadtah-theme", next);
  });

  /* ---- Contact (opens the visitor's email app; no server, no tracking) ---- */
  $("#contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
    var f = e.target, to = $("#contactEmail").textContent.trim();
    var subject = "Message from " + f.name.value + " (Hadtah website)";
    var text = f.message.value + "\n\nFrom: " + f.name.value + " <" + f.email.value + ">";
    location.href = "mailto:" + to + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(text);
  });

  render();
  fromHash();
})();
