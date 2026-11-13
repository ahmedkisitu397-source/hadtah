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
    "id": "guardian-timer",
    "name": "Guardian Timer",
    "category": "Productivity",
    "description": "A focus timer that keeps you on your task: set the work time and it guards your study or work session.",
    "details": "Choose what you are working on and how long to focus. Guardian Timer counts down, reminds you to stay on the task and keeps a simple log of your sessions, so students and workers can build steady study habits. Works offline.",
    "version": "1.0",
    "size": "TBA",
    "platforms": ["Windows 10", "Windows 11"],
    "tested_on": "",
    "status": "coming soon",
    "download_url": "#",
    "icon": "assets/icons/guardian.svg",
    "featured": true,
    "changelog": [
      { "version": "1.0", "date": "", "notes": "First version: focus countdown and session log." }
    ]
  },
  {
    "id": "cyber-guard",
    "name": "Cyber Guard",
    "category": "Security",
    "description": "Paste a message you received and Cyber Guard tells you if it looks like a scam, spam or spy attempt.",
    "details": "Copy a suspicious SMS, WhatsApp or email message and paste it in with the sender. Cyber Guard checks it for common scam signs, such as requests for PINs or passwords, urgent money demands and fake prizes, then gives a verdict, a score and the reasons. It only checks what you paste in; it never reads your messages by itself.",
    "version": "1.0",
    "size": "TBA",
    "platforms": ["Windows 10", "Windows 11"],
    "tested_on": "",
    "status": "coming soon",
    "download_url": "#",
    "icon": "assets/icons/cyberguard.svg",
    "featured": false,
    "changelog": [
      { "version": "1.0", "date": "", "notes": "First version: scam, spam and spy message checks." }
    ]
  }
];
