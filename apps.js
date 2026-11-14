/*
  HADTAH APP LIST  —  the ONLY file you edit to add, change or remove an app.
  ---------------------------------------------------------------------------
  Each app is one { ... } block between the square brackets. Copy a block,
  paste it after the last one (put a comma between blocks), change the values,
  save, and upload. No other file needs to change. See README.md for every field.
  Tip: open admin.html in your browser to fill a form that writes a block for you.

  Website URLs (open in the browser or on iPhone — nothing to download). When the
  hadtah.com addresses are live, change each line here, e.g. ttu -> https://ttu.hadtah.com.
  (The "Ask TTu" panel address is TTU_URL at the top of ask-ttu.js.)
*/
var HADTAH_WEB = {
  ttu: "https://ttu.hadtah.com",
  eilpah: "https://eilpah.hadtah.com",
  library: "https://library.hadtah.com",
  cashflow: "https://cashflow.hadtah.com"
};

window.HADTAH_APPS = [
  {
    "id": "eilpah",
    "tagline": "Lessons from verified teachers, Senior 1 to Senior 6",
    "accent": "#38bdf8",
    "how": ["Open Eilpah in your browser. Nothing to install.", "Choose who you are: a student, a guardian or a teacher.", "Pick your class and subject. Lessons follow the Ugandan curriculum.", "Learn with lessons, quizzes and live classes, and follow your progress."],
    "features": ["Lessons and topics by subject and syllabus", "Teachers are verified before they teach", "Live classes with a teacher", "Quizzes and progress records", "A learning feed for each class", "Works in any browser and on iPhone"],
    "benefits": ["Secondary students (S1 to S6)", "Parents and guardians", "Teachers", "Schools"],
    "screenshots": [{ "src": "assets/shots/eilpah-1.webp", "alt": "Eilpah home page" }, { "src": "assets/shots/eilpah-2.webp", "alt": "Choosing student or teacher when creating an account" }, { "src": "assets/shots/eilpah-3.webp", "alt": "Eilpah sign-in" }],
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
  
  },
  {
    "id": "ttu",
    "tagline": "Ask anything. Get a clear answer with sources.",
    "accent": "#737373",
    "how": ["Sign in with your Gmail address and the 6-digit code.", "Type your question in your own words.", "TTu searches open sources: encyclopaedias, research papers, news and YouTube.", "Read the answer with numbered sources, then save it as a PDF."],
    "features": ["Answers written from open, free sources", "Numbered source links you can check", "Research papers from OpenAlex, arXiv and Crossref", "News from Google News, BBC and others", "Download any answer as a PDF", "Black-and-white design that is easy to read"],
    "benefits": ["Students doing homework and research", "Teachers preparing lessons", "University students writing assignments", "Anyone who wants a quick, sourced answer"],
    "screenshots": [{ "src": "assets/shots/ttu-1.webp", "alt": "TTu welcome and sign-in, dark mode" }, { "src": "assets/shots/ttu-2.webp", "alt": "TTu welcome and sign-in, light mode" }],
    "name": "TTu",
    "category": "AI & Research",
    "description": "Ask anything: TTu searches open sources and writes a clear answer you can save as a PDF.",
    "details": "TTu searches open, free sources — encyclopaedias, research papers (OpenAlex, arXiv, Crossref), Google News, BBC and other news sites, public posts, and YouTube — then writes a clear answer with numbered source links and a Download as PDF button. Answers are written with Gemini AI (and fall back to a source summary if the free search quota is reached). Sign in with your Gmail address and a 6-digit code. 20 questions a day; 20 free PDF downloads, then the weekly plan (US$0.81 a week). Free during launch until 15 Dec 2026. This is a TEST version: the sign-in code is shown on screen instead of emailed, and payments are not live yet. You can also install TTu on Android or Windows; it opens the same live app.",
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
    "id": "ennun",
    "tagline": "A focus guard timer that keeps you on your task",
    "accent": "#8b5cf6",
    "how": ["Type your task and choose how many minutes (1 to 180).", "On Windows, choose the one program you are allowed to use.", "Press Start focus. Leaving your task counts as a distraction.", "To stop early, type the set sentence. Every session goes into your history."],
    "features": ["Timer from 1 to 180 minutes with quick presets", "Windows: brings you back to your allowed program", "Windows: closes windows with blocked words (YouTube, TikTok and more)", "Android: leaving Ennun during a session counts as a distraction", "Emergency stop only after typing a set sentence", "Session history with CSV export, fully offline"],
    "benefits": ["Students revising for exams", "Teachers marking or preparing lessons", "Anyone working from home", "Parents helping children study"],
    "screenshots": [{ "src": "assets/shots/ennun-1.webp", "alt": "Setting up a focus session" }, { "src": "assets/shots/ennun-2.webp", "alt": "A focus session counting down" }, { "src": "assets/shots/ennun-3.webp", "alt": "Blocked words in Settings" }],
    "name": "Ennun",
    "category": "Productivity",
    "description": "A focus guard timer: pick your task, the program you may use and how long, and Ennun keeps you on it.",
    "details": "Ennun (Sumerian for the watch a guard keeps) is a focus guard timer by Hadtah. Choose a task, the program you are allowed to use and 1 to 180 minutes, then start. On Windows, Ennun checks every second which window is in front: if it is not your allowed program it counts a distraction, brings you back to your program and closes windows whose title contains a blocked word (YouTube, Facebook, TikTok, Instagram, Netflix by default, editable in Settings). On Android, leaving Ennun during a session counts as a distraction. To stop early you must type a set sentence exactly. Every session is logged (date, task, minutes done, distractions, result) and can be exported to CSV. Works fully offline.",
    "version": "1.0.0",
    "size": "Android 6.4 MB · Windows 122 MB",
    "platforms": ["Android", "Windows 10/11"],
    "tested_on": "",
    "status": "available",
    "download_url": "https://github.com/ahmedkisitu397-source/ennun/releases/download/v1.0.0/Ennun-Setup-1.0.0.exe",
    "downloads": [
      { "label": "Android APK", "url": "https://github.com/ahmedkisitu397-source/ennun/releases/download/v1.0.0/Ennun-1.0.0-debug.apk", "size": "6.4 MB", "kind": "android" },
      { "label": "Windows installer", "url": "https://github.com/ahmedkisitu397-source/ennun/releases/download/v1.0.0/Ennun-Setup-1.0.0.exe", "size": "122 MB", "kind": "windows" }
    ],
    "icon": "assets/icons/ennun.png",
    "featured": true,
    "changelog": [
      { "version": "1.0.0", "date": "2026-11-13", "notes": "First release: focus timer, Android app, window guard and blocked words on Windows, session log with CSV export." }
    ]
  },
  {
    "id": "lamma",
    "tagline": "Check a suspicious message before you act on it",
    "accent": "#22d3ee",
    "how": ["Copy the suspicious SMS, WhatsApp or email message.", "Paste it into Lamma with the sender's number or name.", "Press Check message.", "Read the verdict and the reasons, then block the sender if needed."],
    "features": ["Verdicts: Safe, Spam, Likely scam or Danger", "Spots requests for PINs, OTPs, passwords and NIN", "Flags links, short links and .apk or .exe install traps", "Warns when 'MTN' or 'Airtel' messages come from a normal phone number", "Blocked senders list and your own suspicious words", "Only checks what you paste in. Nothing leaves your device"],
    "benefits": ["Mobile Money users", "Parents and older relatives", "Small business owners", "Students and teachers"],
    "screenshots": [{ "src": "assets/shots/lamma-1.webp", "alt": "Pasting a suspicious message into Lamma" }, { "src": "assets/shots/lamma-2.webp", "alt": "Lamma's verdict and reasons" }, { "src": "assets/shots/lamma-3.webp", "alt": "History of recent checks" }],
    "name": "Lamma",
    "category": "Security",
    "description": "Paste a message you received and Lamma tells you if it looks like a scam, spam or a spy attempt.",
    "details": "Lamma (the protective spirit of ancient Sumer) is a scam message checker by Hadtah. Paste a suspicious SMS, WhatsApp or email message and its sender, and Lamma gives a verdict (Safe, Spam, Likely scam, or Danger: spy or data theft), a score and the reasons. It looks for scam and spam words, requests for PINs, OTPs, passwords or NIN, .apk/.exe install traps, links and short links, money amounts, and MTN or Airtel messages sent from an ordinary phone number. It also keeps a blocked-senders list, your own suspicious words and a history of recent checks with secret numbers hidden. Lamma only checks what you paste in; it never reads your messages by itself, and everything stays on your device.",
    "version": "1.0.0",
    "size": "Android 6.8 MB · Windows 122 MB",
    "platforms": ["Android", "Windows 10/11"],
    "tested_on": "",
    "status": "available",
    "download_url": "https://github.com/ahmedkisitu397-source/lamma/releases/download/v1.0.0/Lamma-Setup-1.0.0.exe",
    "downloads": [
      { "label": "Android APK", "url": "https://github.com/ahmedkisitu397-source/lamma/releases/download/v1.0.0/Lamma-1.0.0-debug.apk", "size": "6.8 MB", "kind": "android" },
      { "label": "Windows installer", "url": "https://github.com/ahmedkisitu397-source/lamma/releases/download/v1.0.0/Lamma-Setup-1.0.0.exe", "size": "122 MB", "kind": "windows" }
    ],
    "icon": "assets/icons/lamma.png",
    "featured": true,
    "changelog": [
      { "version": "1.0.0", "date": "2026-11-13", "notes": "First release: verdict levels, blocked senders, your own words and check history, on Android and Windows." }
    ]
  },
  {
    "id": "offline-library",
    "tagline": "Run a school library with no internet",
    "accent": "#f59e0b",
    "how": ["Add your books one by one, or import the whole list from Excel (CSV).", "Register your students and teachers as members.", "Lend a book with a due date, then return or renew it.", "See overdue books on the dashboard and print PDF reports."],
    "features": ["Catalogue with author, ISBN, category, shelf and copies", "Lending, returns and renewals with due dates", "Overdue alerts and optional fines", "Borrowing limit per member", "PDF and CSV reports, plus backup files", "Works fully offline on phone, computer and iPhone"],
    "benefits": ["School librarians", "Teachers in charge of class libraries", "Schools with little or no internet", "Community and church libraries"],
    "screenshots": [{ "src": "assets/shots/offline-library-1.webp", "alt": "Offline Library dashboard" }, { "src": "assets/shots/offline-library-2.webp", "alt": "The book catalogue" }, { "src": "assets/shots/offline-library-3.webp", "alt": "Lending and returns" }],
    "name": "Offline Library",
    "category": "Education",
    "description": "Run a school library with no internet: books, members, lending, returns and overdue reports.",
    "details": "Offline Library is a school library manager by Hadtah. Add every book with title, author, ISBN, category, shelf and number of copies, or import the whole list from Excel (CSV). Register students and teachers, lend a book with a due date, then return or renew it; overdue books turn red and the dashboard shows what needs follow-up. Optional fines per day late, a borrowing limit per member, and PDF or CSV reports of the catalogue, overdue books, books on loan, members and lending history. Everything is saved on your own device and works fully offline. Download a backup file to move it to another phone or computer.",
    "version": "1.0.0",
    "size": "Web app · Android 7.3 MB · Windows 122 MB",
    "platforms": ["Any browser", "iPhone", "Android", "Windows"],
    "tested_on": "",
    "status": "available",
    "open_url": HADTAH_WEB.library,
    "open_label": "Open Offline Library",
    "ios_url": HADTAH_WEB.library,
    "ios_label": "Open on iPhone",
    "download_url": "https://github.com/ahmedkisitu397-source/offline-library/releases/download/v1.0.0/Offline-Library-Setup-1.0.0.exe",
    "downloads": [
      { "label": "Android APK", "url": "https://github.com/ahmedkisitu397-source/offline-library/releases/download/v1.0.0/Offline-Library-1.0.0-debug.apk", "size": "7.3 MB", "kind": "android" },
      { "label": "Windows installer", "url": "https://github.com/ahmedkisitu397-source/offline-library/releases/download/v1.0.0/Offline-Library-Setup-1.0.0.exe", "size": "122 MB", "kind": "windows" }
    ],
    "note": "Works without internet. Your library stays on your device, so download a backup now and then (Settings).",
    "icon": "assets/icons/offline-library.png",
    "featured": true,
    "changelog": [
      { "version": "1.0.0", "date": "2026-11-13", "notes": "First release: books, members, lending and returns, overdue alerts, optional fines, CSV import, PDF reports, backups, dark and light mode, on web, iPhone, Android and Windows." }
    ]
  },
  {
    "id": "cash-flow",
    "tagline": "Know your balance and profit, even offline",
    "accent": "#10b981",
    "how": ["Record each sale, payment or expense in seconds.", "Choose a category and Cash or Mobile Money.", "Watch your balance, profit and monthly chart update.", "Print daily, weekly or monthly reports as PDF or CSV."],
    "features": ["Money in and money out with categories", "Cash and Mobile Money", "Balance, profit and margin at a glance", "Monthly budgets and an income target", "Several businesses, each with its own currency (UGX by default)", "Reports as PDF or CSV, fully offline"],
    "benefits": ["Small shops and market vendors", "Boda boda and transport businesses", "School canteens and bursars", "Families tracking household money"],
    "screenshots": [{ "src": "assets/shots/cash-flow-1.webp", "alt": "Cash Flow dashboard" }, { "src": "assets/shots/cash-flow-2.webp", "alt": "Money in and out entries" }, { "src": "assets/shots/cash-flow-3.webp", "alt": "Reports with running balance" }],
    "name": "Cash Flow",
    "category": "Business",
    "description": "Track money in and money out for your business, see your balance and profit, and print reports. Works offline.",
    "details": "Cash Flow is a money-in, money-out tracker for small businesses by Hadtah. Record each sale, payment or expense with amount, category, date, Cash or Mobile Money, customer or supplier and receipt number. The dashboard shows your balance, money in and out this month against last month, profit and margin, a 6-month chart and the 30-day balance trend. Reports give daily, weekly or monthly summaries with a running balance and where the money came from and went, as PDF or CSV. Set monthly budgets per category and an income target, keep several businesses with their own currency (UGX by default), and import entries from Excel. Everything is saved on your device and works fully offline.",
    "version": "1.0.0",
    "size": "Web app · Android 7.6 MB · Windows 122 MB",
    "platforms": ["Any browser", "iPhone", "Android", "Windows"],
    "tested_on": "",
    "status": "available",
    "open_url": HADTAH_WEB.cashflow,
    "open_label": "Open Cash Flow",
    "ios_url": HADTAH_WEB.cashflow,
    "ios_label": "Open on iPhone",
    "download_url": "https://github.com/ahmedkisitu397-source/cash-flow/releases/download/v1.0.0/Cash-Flow-Setup-1.0.0.exe",
    "downloads": [
      { "label": "Android APK", "url": "https://github.com/ahmedkisitu397-source/cash-flow/releases/download/v1.0.0/Cash-Flow-1.0.0-debug.apk", "size": "7.6 MB", "kind": "android" },
      { "label": "Windows installer", "url": "https://github.com/ahmedkisitu397-source/cash-flow/releases/download/v1.0.0/Cash-Flow-Setup-1.0.0.exe", "size": "122 MB", "kind": "windows" }
    ],
    "note": "Works without internet. Your records stay on your device, so download a backup now and then (Settings).",
    "icon": "assets/icons/cash-flow.png",
    "featured": true,
    "changelog": [
      { "version": "1.0.0", "date": "2026-11-13", "notes": "First release: money in and out, several businesses, budgets, charts, daily/weekly/monthly reports as PDF or CSV, backups, dark and light mode, on web, iPhone, Android and Windows." }
    ]
  }
];
