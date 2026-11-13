/* Ask TTu: floating button + panel that opens TTu in an embedded frame.
   Shared by the Hadtah site and the Hadtah apps. Black-and-white, like TTu itself.
   To move TTu to its own domain later, change TTU_URL below (and add the domain to frame-src where a CSP lists it). */
(function () {
  "use strict";
  var TTU_URL = "https://ttu.hadtah.com/";
  if (window.__askTTu) return; window.__askTTu = true;
  var opt = window.ASK_TTU_OPTIONS || {};
  var side = opt.side === "left" ? "left" : "right";
  var mBottom = opt.mobileBottom || 16;
  var mSide = opt.mobileSide === "left" ? "left" : (opt.mobileSide === "right" ? "right" : side);
  var other = mSide === "left" ? "right" : "left";
  var css = "" +
    ".attu-btn{position:fixed;" + side + ":18px;bottom:18px;z-index:2147483000;display:inline-flex;align-items:center;gap:8px;padding:11px 16px 11px 12px;border-radius:999px;border:1px solid rgba(255,255,255,.18);background:#0a0a0a;color:#fff;font:600 14px/1 -apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,'Noto Sans',sans-serif;letter-spacing:-.01em;cursor:pointer;box-shadow:0 12px 30px -10px rgba(0,0,0,.55),0 2px 6px rgba(0,0,0,.2);transition:transform .18s,box-shadow .18s}" +
    ".attu-btn:hover{transform:translateY(-2px);box-shadow:0 16px 34px -10px rgba(0,0,0,.6)}" +
    ".attu-btn svg{width:20px;height:20px;flex:none}" +
    ".attu-btn.attu-hide{opacity:0;pointer-events:none}" +
    ".attu-panel{position:fixed;" + side + ":18px;bottom:18px;z-index:2147483001;width:420px;max-width:calc(100vw - 36px);height:min(680px,calc(100vh - 36px));display:flex;flex-direction:column;background:#0a0a0a;color:#f4f4f4;border:1px solid #2a2a2a;border-radius:22px;overflow:hidden;box-shadow:0 30px 80px -20px rgba(0,0,0,.7);transform-origin:bottom " + side + ";animation:attuIn .22s cubic-bezier(.2,.7,.2,1);font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,'Noto Sans',sans-serif}" +
    "@keyframes attuIn{from{opacity:0;transform:translateY(10px) scale(.97)}to{opacity:1;transform:none}}" +
    ".attu-panel[hidden]{display:none}" +
    ".attu-head{display:flex;align-items:center;gap:10px;padding:12px 12px 12px 16px;border-bottom:1px solid #222}" +
    ".attu-head b{font-size:15px;flex:1;letter-spacing:-.01em}" +
    ".attu-head a,.attu-head button{all:unset;cursor:pointer;font-size:12.5px;color:#cfcfcf;padding:7px 10px;border:1px solid #333;border-radius:999px}" +
    ".attu-head a:hover,.attu-head button:hover{color:#fff;border-color:#777}" +
    ".attu-body{flex:1;position:relative;background:#0a0a0a}" +
    ".attu-body iframe{position:absolute;inset:0;width:100%;height:100%;border:0;background:#0a0a0a}" +
    ".attu-msg{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;text-align:center;padding:28px;color:#cfcfcf;font-size:14.5px;line-height:1.55}" +
    ".attu-msg strong{color:#fff;font-size:18px}" +
    ".attu-msg a{color:#fff}" +
    "@media (max-width:640px){.attu-btn{bottom:calc(" + mBottom + "px + env(safe-area-inset-bottom));" + side + ":14px;padding:10px 14px 10px 11px;font-size:13.5px}.attu-panel{inset:0;width:auto;max-width:none;height:auto;border-radius:0;border:0}.attu-head{padding-top:max(12px,env(safe-area-inset-top))}}";
  var ICON = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12z"/><path d="M9 10h6M12 10v5"/></svg>';
  function el(tag, attrs, html) { var e = document.createElement(tag); for (var k in attrs) e.setAttribute(k, attrs[k]); if (html != null) e.innerHTML = html; return e; }
  function init() {
    var st = el("style", {}); st.textContent = css; document.head.appendChild(st);
    var btn = el("button", { type: "button", "class": "attu-btn", "aria-label": "Ask TTu", title: "Ask TTu: answers to your questions" }, ICON + "<span>Ask TTu</span>");
    var panel = el("div", { "class": "attu-panel", role: "dialog", "aria-label": "Ask TTu", hidden: "" });
    panel.innerHTML = '<div class="attu-head"><b>Ask TTu</b><a target="_blank" rel="noopener" href="' + TTU_URL + '">Open in new tab</a><button type="button" class="attu-x" aria-label="Close">Close</button></div><div class="attu-body"></div>';
    document.body.appendChild(btn); document.body.appendChild(panel);
    var body = panel.querySelector(".attu-body"), frame = null;
    function offlineMsg() {
      body.innerHTML = '<div class="attu-msg"><strong>Needs internet</strong><span>TTu answers questions online. Connect to the internet and it opens here. Everything else in this app keeps working offline.</span></div>';
      frame = null;
    }
    function load() {
      if (navigator.onLine === false) return offlineMsg();
      if (frame) return;
      body.innerHTML = '<div class="attu-msg"><span>Opening TTu…</span></div>';
      frame = el("iframe", { src: TTU_URL, title: "TTu", allow: "clipboard-write; fullscreen", referrerpolicy: "strict-origin-when-cross-origin" });
      body.appendChild(frame);
      var slow = setTimeout(function () {
        var m = body.querySelector(".attu-msg");
        if (m) m.innerHTML = '<span>TTu is taking a while to open. If sign-in does not work here, <a target="_blank" rel="noopener" href="' + TTU_URL + '">open TTu in a new tab</a>.</span>';
      }, 9000);
      frame.addEventListener("load", function () { clearTimeout(slow); var m = body.querySelector(".attu-msg"); if (m) m.remove(); });
    }
    function open() { panel.hidden = false; btn.classList.add("attu-hide"); load(); }
    function close() { panel.hidden = true; btn.classList.remove("attu-hide"); }
    btn.addEventListener("click", open);
    panel.querySelector(".attu-x").addEventListener("click", close);
    document.addEventListener("keydown", function (e) { if (e.key === "Escape" && !panel.hidden) close(); });
    window.addEventListener("offline", function () { if (!panel.hidden) offlineMsg(); });
    window.addEventListener("online", function () { if (!panel.hidden) load(); });
    window.AskTTu = { open: open, close: close, url: TTU_URL };
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init); else init();
})();
