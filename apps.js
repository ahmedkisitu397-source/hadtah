/*
  HADTAH APP LIST  —  the ONLY file you edit to add, change or remove an app.
  ---------------------------------------------------------------------------
  Each app is one { ... } block between the square brackets. Copy a block,
  paste it after the last one (put a comma between blocks), change the values,
  save, and upload. No other file needs to change. See README.md for every field.
  Tip: open admin.html in your browser to fill a form that writes a block for you.
*/
window.HADTAH_APPS = [
  {
    "id": "offline-library",
    "name": "Offline Library App",
    "category": "Education",
    "description": "Keep a school library's book list, lend books to students and record returns, with no internet needed.",
    "details": "Add every book with an ID, title and author, search by title or author, lend a book to a named student and mark it returned. The list shows which books are available and who has each borrowed book. Everything is saved on the computer in a small database file, so it works fully offline.",
    "version": "1.0",
    "size": "TBA",
    "platforms": ["Windows 10", "Windows 11"],
    "tested_on": "",
    "status": "coming soon",
    "download_url": "#",
    "icon": "assets/icons/library.svg",
    "featured": true,
    "changelog": [
      { "version": "1.0", "date": "", "notes": "First version: add, search, lend, return and delete books." }
    ]
  },
  {
    "id": "cash-flow-tracker",
    "name": "Cash Flow Tracker",
    "category": "Business",
    "description": "Record money coming in and going out for a small business or school project, and see the balance.",
    "details": "Enter each sale, payment or expense with a short note and amount. The app keeps a running record and shows how much has come in, gone out and what is left, so a small shop, club or project can track its money without a spreadsheet. Works offline.",
    "version": "1.0",
    "size": "TBA",
    "platforms": ["Windows 10", "Windows 11"],
    "tested_on": "",
    "status": "coming soon",
    "download_url": "#",
    "icon": "assets/icons/cashflow.svg",
    "featured": false,
    "changelog": [
      { "version": "1.0", "date": "", "notes": "First version." }
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
    "size": "Android 4.4 MB · Windows 122 MB",
    "platforms": ["Android", "Windows 10/11"],
    "tested_on": "",
    "status": "available",
    "download_url": "https://github.com/ahmedkisitu397-source/lamma/releases/download/v1.0.0/Lamma-Setup-1.0.0.exe",
    "downloads": [
      { "label": "Android APK", "url": "https://github.com/ahmedkisitu397-source/lamma/releases/download/v1.0.0/Lamma-1.0.0-debug.apk", "size": "4.4 MB", "kind": "android" },
      { "label": "Windows installer", "url": "https://github.com/ahmedkisitu397-source/lamma/releases/download/v1.0.0/Lamma-Setup-1.0.0.exe", "size": "122 MB", "kind": "windows" }
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
    "details": "TTu searches only open, free sources (Wikipedia, research papers from OpenAlex, arXiv and Crossref, and public Bluesky and Mastodon posts), writes a clear answer with numbered source links, and puts a Download as PDF button under every answer. Sign in with your Gmail address and a 6-digit code. 15 questions a day; 20 free PDF downloads, then the weekly plan (US$0.81 a week). This is a TEST version: the sign-in code is shown on screen instead of emailed, answers are built straight from the sources until the AI is switched on, and payments are not live yet.",
    "version": "0.1 (test)",
    "size": "Web app",
    "platforms": ["Any browser", "Android", "Windows"],
    "tested_on": "",
    "status": "available",
    "open_url": "https://ttu.hadtah.workers.dev",
    "open_label": "Open TTu",
    "note": "Test mode: your sign-in code appears on screen.",
    "icon": "assets/icons/ttu.png",
    "featured": true,
    "changelog": [
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
    "platforms": ["Any browser", "Android", "Windows"],
    "tested_on": "",
    "status": "available",
    "open_url": "https://eilpah.hadtah.workers.dev",
    "open_label": "Open Eilpah",
    "note": "Sign-in coming back soon.",
    "icon": "assets/icons/eilpah.png",
    "featured": true,
    "changelog": [
      { "version": "2026.10", "date": "2026-11-13", "notes": "Moved to new hosting." }
    ]
  }
];
