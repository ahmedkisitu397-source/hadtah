/*
  HADTAH APP LIST  —  the ONLY file you edit to add, change or remove an app.
  ---------------------------------------------------------------------------
  Each app is one { ... } block between the square brackets. Copy a block,
  paste it after the last one (put a comma between blocks), change the values,
  save, and upload. No other file needs to change. See README.md for every field.
  Tip: open admin.html in your browser to fill a form that writes a block for you.

  Website URLs (open in the browser or on iPhone — nothing to download). Switch these
  to https://ttu.hadtah.com, https://eilpah.hadtah.com, https://library.hadtah.com and
  https://cashflow.hadtah.com (or similar) when the custom domains go live.
*/
var HADTAH_WEB = {
  ttu: "https://ttu.hadtah.workers.dev",
  eilpah: "https://eilpah.hadtah.workers.dev",
  library: "https://offline-library.hadtah.workers.dev",
  cashflow: "https://cash-flow.hadtah.workers.dev"
};

window.HADTAH_APPS = [
  {
    "id": "offline-library",
    "name": "Offline Library",
    "category": "Education",
    "description": "Run a school library with no internet: books, members, lending, returns and overdue reports.",
    "details": "Offline Library is the professional version of the Senior One Offline Library App project. Add every book with title, author, ISBN, category, shelf and number of copies, or import the whole list from Excel (CSV). Register students and teachers, lend a book with a due date, then return or renew it; overdue books turn red and the dashboard shows what needs follow-up. Optional fines per day late, a borrowing limit per member, and PDF or CSV reports of the catalogue, overdue books, books on loan, members and lending history. Everything is saved on your own device and works fully offline. Download a backup file to move it to another phone or computer.",
    "version": "1.0.0",
    "size": "Web app · Android 5.2 MB · Windows 122 MB",
    "platforms": ["Any browser", "iPhone", "Android", "Windows"],
    "tested_on": "",
    "status": "available",
    "open_url": HADTAH_WEB.library,
    "open_label": "Open Offline Library",
    "ios_url": HADTAH_WEB.library,
    "ios_label": "Open on iPhone",
    "download_url": "https://github.com/ahmedkisitu397-source/offline-library/releases/download/v1.0.0/Offline-Library-Setup-1.0.0.exe",
    "downloads": [
      { "label": "Android APK", "url": "https://github.com/ahmedkisitu397-source/offline-library/releases/download/v1.0.0/Offline-Library-1.0.0-debug.apk", "size": "5.2 MB", "kind": "android" },
      { "label": "Windows installer", "url": "https://github.com/ahmedkisitu397-source/offline-library/releases/download/v1.0.0/Offline-Library-Setup-1.0.0.exe", "size": "122 MB", "kind": "windows" }
    ],
    "note": "Works without internet. Your library stays on your device, so download a backup now and then (Settings).",
    "icon": "assets/icons/offline-library.png",
    "featured": true,
    "changelog": [
      { "version": "1.0.0", "date": "2026-11-13", "notes": "Rebuilt as a professional app: books, members, lending and returns, overdue alerts, optional fines, CSV import, PDF reports, backups, dark and light mode, on web, iPhone, Android and Windows." }
    ]
  },
  {
    "id": "cash-flow",
    "name": "Cash Flow",
    "category": "Business",
    "description": "Track money in and money out for your business, see your balance and profit, and print reports. Works offline.",
    "details": "Cash Flow is the professional version of the Senior One Cash Flow Tracker project. Record each sale, payment or expense with amount, category, date, Cash or Mobile Money, customer or supplier and receipt number. The dashboard shows your balance, money in and out this month against last month, profit and margin, a 6-month chart and the 30-day balance trend. Reports give daily, weekly or monthly summaries with a running balance and where the money came from and went, as PDF or CSV. Set monthly budgets per category and an income target, keep several businesses with their own currency (UGX by default), and import entries from Excel. Everything is saved on your device and works fully offline.",
    "version": "1.0.0",
    "size": "Web app · Android 5.2 MB · Windows 122 MB",
    "platforms": ["Any browser", "iPhone", "Android", "Windows"],
    "tested_on": "",
    "status": "available",
    "open_url": HADTAH_WEB.cashflow,
    "open_label": "Open Cash Flow",
    "ios_url": HADTAH_WEB.cashflow,
    "ios_label": "Open on iPhone",
    "download_url": "https://github.com/ahmedkisitu397-source/cash-flow/releases/download/v1.0.0/Cash-Flow-Setup-1.0.0.exe",
    "downloads": [
      { "label": "Android APK", "url": "https://github.com/ahmedkisitu397-source/cash-flow/releases/download/v1.0.0/Cash-Flow-1.0.0-debug.apk", "size": "5.2 MB", "kind": "android" },
      { "label": "Windows installer", "url": "https://github.com/ahmedkisitu397-source/cash-flow/releases/download/v1.0.0/Cash-Flow-Setup-1.0.0.exe", "size": "122 MB", "kind": "windows" }
    ],
    "note": "Works without internet. Your records stay on your device, so download a backup now and then (Settings).",
    "icon": "assets/icons/cash-flow.png",
    "featured": true,
    "changelog": [
      { "version": "1.0.0", "date": "2026-11-13", "notes": "Rebuilt as a professional app: money in and out, several businesses, budgets, charts, daily/weekly/monthly reports as PDF or CSV, backups, dark and light mode, on web, iPhone, Android and Windows." }
    ]
  },
  {
    "id": "ennun",
    "name": "Ennun",
    "category": "Productivity",
    "description": "A focus guard timer: pick your task, the program you may use and how long, and Ennun keeps you on it.",
    "details": "Ennun (Sumerian for the watch a guard keeps) is the rebuilt, professional Guardian Timer. Choose a task, the program you are allowed to use and 1 to 180 minutes, then start. On Windows, Ennun checks every second which window is in front: if it is not your allowed program it counts a distraction, brings you back to your program and closes windows whose title contains a blocked word (YouTube, Facebook, TikTok, Instagram, Netflix by default, editable in Settings). On Android, leaving Ennun during a session counts as a distraction. To stop early you must type a set sentence exactly. Every session is logged (date, task, minutes done, distractions, result) and can be exported to CSV. Works fully offline.",
    "version": "1.0.0",
    "size": "Android 4.3 MB · Windows 122 MB",
    "platforms": ["Android", "Windows 10/11"],
    "tested_on": "",
    "status": "available",
    "download_url": "https://github.com/ahmedkisitu397-source/ennun/releases/download/v1.0.0/Ennun-Setup-1.0.0.exe",
    "downloads": [
      { "label": "Android APK", "url": "https://github.com/ahmedkisitu397-source/ennun/releases/download/v1.0.0/Ennun-1.0.0-debug.apk", "size": "4.3 MB", "kind": "android" },
      { "label": "Windows installer", "url": "https://github.com/ahmedkisitu397-source/ennun/releases/download/v1.0.0/Ennun-Setup-1.0.0.exe", "size": "122 MB", "kind": "windows" }
    ],
    "icon": "assets/icons/ennun.png",
    "featured": true,
    "changelog": [
      { "version": "1.0.0", "date": "2026-11-13", "notes": "Rebuilt from Guardian Timer as Ennun: new look, Android app, window guard and blocked words on Windows, session log with CSV export." }
    ]
  },
  {
    "id": "lamma",
    "name": "Lamma",
    "category": "Security",
    "description": "Paste a message you received and Lamma tells you if it looks like a scam, spam or a spy attempt.",
    "details": "Lamma (the protective spirit of ancient Sumer) is the rebuilt, professional Cyber Guard. Paste a suspicious SMS, WhatsApp or email message and its sender, and Lamma gives a verdict (Safe, Spam, Likely scam, or Danger: spy or data theft), a score and the reasons. It looks for scam and spam words, requests for PINs, OTPs, passwords or NIN, .apk/.exe install traps, links and short links, money amounts, and MTN or Airtel messages sent from an ordinary phone number. It also keeps a blocked-senders list, your own suspicious words and a history of recent checks with secret numbers hidden. Lamma only checks what you paste in; it never reads your messages by itself, and everything stays on your device.",
    "version": "1.0.0",
    "size": "Android 4.4 MB · Windows 121 MB",
    "platforms": ["Android", "Windows 10/11"],
    "tested_on": "",
    "status": "available",
    "download_url": "https://github.com/ahmedkisitu397-source/lamma/releases/download/v1.0.0/Lamma-Setup-1.0.0.exe",
    "downloads": [
      { "label": "Android APK", "url": "https://github.com/ahmedkisitu397-source/lamma/releases/download/v1.0.0/Lamma-1.0.0-debug.apk", "size": "4.4 MB", "kind": "android" },
      { "label": "Windows installer", "url": "https://github.com/ahmedkisitu397-source/lamma/releases/download/v1.0.0/Lamma-Setup-1.0.0.exe", "size": "121 MB", "kind": "windows" }
    ],
    "icon": "assets/icons/lamma.png",
    "featured": true,
    "changelog": [
      { "version": "1.0.0", "date": "2026-11-13", "notes": "Rebuilt from Cyber Guard as Lamma: new look, Android app, verdict levels, blocked senders, your own words and check history." }
    ]
  },
  {
    "id": "ttu",
    "name": "TTu",
    "category": "AI & Research",
    "description": "Ask anything: TTu searches open sources and writes a clear answer you can save as a PDF.",
    "details": "TTu searches open, free sources — encyclopaedias, research papers (OpenAlex, arXiv, Crossref), Google News, BBC and other news sites, public posts, and YouTube — then writes a clear answer with numbered source links and a Download as PDF button. Answers are written with Gemini AI (and fall back to a source summary if the free search quota is reached). Sign in with your Gmail address and a 6-digit code. 15 questions a day; 20 free PDF downloads, then the weekly plan (US$0.81 a week). This is a TEST version: the sign-in code is shown on screen instead of emailed, and payments are not live yet. You can also install TTu on Android or Windows; it opens the same live app.",
    "version": "1.0.0 (test)",
    "size": "Web app · Android 5.8 MB · Windows 122 MB",
    "platforms": ["Any browser", "iPhone", "Android", "Windows"],
    "tested_on": "",
    "status": "available",
    "open_url": HADTAH_WEB.ttu,
    "open_label": "Open TTu",
    "ios_url": HADTAH_WEB.ttu,
    "ios_label": "Open on iPhone",
    "download_url": "https://github.com/ahmedkisitu397-source/ttu/releases/download/v1.0.0/TTu-Setup-1.0.0.exe",
    "downloads": [
      { "label": "Android APK", "url": "https://github.com/ahmedkisitu397-source/ttu/releases/download/v1.0.0/TTu-1.0.0-debug.apk", "size": "5.8 MB", "kind": "android" },
      { "label": "Windows installer", "url": "https://github.com/ahmedkisitu397-source/ttu/releases/download/v1.0.0/TTu-Setup-1.0.0.exe", "size": "122 MB", "kind": "windows" }
    ],
    "note": "Test mode: your sign-in code appears on screen.",
    "icon": "assets/icons/ttu.png",
    "featured": true,
    "changelog": [
      { "version": "1.0.0", "date": "2026-11-13", "notes": "Black-and-white interface, Gemini AI answers, Google News, BBC and YouTube, plus Android and Windows apps." },
      { "version": "0.1", "date": "2026-11-13", "notes": "First test version online." }
    ]
  },
  {
    "id": "eilpah",
    "name": "Eilpah",
    "category": "Education",
    "description": "Lessons from verified teachers, following the Ugandan curriculum, for Senior 1 to Senior 6.",
    "details": "Eilpah connects students and guardians with verified teachers: lessons and topics by subject and syllabus, live classes, quizzes, progress records and a learning feed. This copy has just moved to new hosting, so you can look around the pages now; signing in and creating accounts will come back shortly.",
    "version": "2026.10",
    "size": "Web app",
    "platforms": ["Any browser", "iPhone", "Android", "Windows"],
    "tested_on": "",
    "status": "available",
    "open_url": HADTAH_WEB.eilpah,
    "open_label": "Open Eilpah",
    "ios_url": HADTAH_WEB.eilpah,
    "ios_label": "Open on iPhone",
    "note": "Sign-in coming back soon.",
    "icon": "assets/icons/eilpah.png",
    "featured": true,
    "changelog": [
      { "version": "2026.10", "date": "2026-11-13", "notes": "Moved to new hosting." }
    ]
  }
];
