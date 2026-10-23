# My Money Household Tracker

Mobile-friendly, installable static web app. All transactions, account balances, goals, budgets, recurring templates and PIN settings are stored in the current browser's localStorage. No server/database, analytics, or bank connection is used.

## Features
- Monthly household dashboard in INR
- Me / Spouse / Joint income and expense attribution
- Multiple manually maintained bank accounts and balances
- Expense budgets, categories, comments, editing and deletion
- Savings goals and investment transaction tracking
- Search and transaction filters
- Category chart and month-by-month report
- Recurring transaction templates (generate monthly entry on demand)
- JSON backup and restore
- Optional simple PIN lock
- PWA install and offline app shell

## Publish on GitHub Pages
1. Upload/commit all files in this folder to the root of your repository, including `index.html`, `manifest.json`, `sw.js`, `icon.svg`, `icon-192.png`, and `icon-512.png`.
2. Repository Settings → Pages → Deploy from a branch → `main` → `/ (root)` → Save.
3. Open the Pages URL in Chrome on Android. Use Chrome menu → Install app / Add to Home screen.

## Data migration
The app attempts to import transactions from the previous `my-money-transactions-v1` and budget key automatically when opened in the same browser and same website origin. Since GitHub Pages repository URLs are origin/path specific, if old data does not appear, export the old app's JSON backup first and import it into the new app.

## Important privacy notes
- Public source code and the site are viewable by anyone, but each visitor's localStorage is isolated to their own browser profile and origin; this app does not upload transactions.
- Anyone with access to your unlocked phone/browser may access local data.
- PIN is a casual access lock, not encryption. A person with technical access can inspect browser storage.
- Export backups may contain sensitive financial data; keep them private.
- Bank balances are entered manually; there is no bank integration.
