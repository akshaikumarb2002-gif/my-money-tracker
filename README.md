# My Money — Personal Expense Tracker (PWA)

A mobile-friendly Progressive Web App for INR tracking. Transactions are stored in browser `localStorage` on the device/browser where the app is used. No account, bank connection, analytics, or server database is included.

## Included
- Monthly income, expense, savings and investment totals
- Available balance calculated as income − expenses − savings contributions − investment contributions
- Monthly expense budget meter
- Add, edit, filter and delete transactions
- Monthly breakdown and savings/investment contribution rate
- JSON backup export and import
- PWA manifest and service worker for installable, app-shell/offline access

## Quick preview on a computer
Open `index.html` in a browser to try the tracker. Some PWA features (service worker and install prompt) require HTTPS or localhost.

## Make it installable on Android
A static HTTPS host is required. You do not need a backend or database.
1. Create a GitHub account if you do not have one.
2. Create a new repository, e.g. `my-money-tracker`.
3. Upload all files in this folder to the repository root.
4. In repository Settings → Pages, choose deploy from the `main` branch and `/ (root)`, then save.
5. Wait for GitHub Pages to publish. Open the published HTTPS URL in Chrome on Android.
6. In Chrome, tap ⋮ → Add to Home screen or Install app. Wording varies by device/browser.
7. Open the home-screen icon. Add a test transaction, close and reopen the app, and verify it remains.
8. Export a JSON backup regularly. Keep the backup somewhere safe.

GitHub Pages hosting is public website hosting: do not put private transactions into source files. This app does not upload transactions to GitHub; entries are only stored in the browser localStorage. The site files are public, but your transaction records are not sent to the host by this app.

## Important storage limitations
- `localStorage` is scoped to the exact site origin and browser. The same tracker opened in another browser or on another phone will have separate data.
- Clearing browser/site data can erase your transactions. Export backups regularly.
- Uninstalling the app, changing the hosting URL, or using a different browser can mean the old local data is not available.
- The app shell can work offline after it has been opened online once and the service worker has cached its files. The first visit and installation require a connection.
- This is not financial advice or an accounting/tax tool. Amounts are manually entered; it does not sync with bank accounts.

## Updating
Upload the replacement files to the repository. If an update does not appear, close/reopen the app or refresh the hosted page. The service worker cache version can be incremented in `sw.js` if needed.
