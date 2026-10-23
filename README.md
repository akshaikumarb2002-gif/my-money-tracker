# My Money Household Tracker — Account Totals Update

Mobile-friendly, installable static web app. Transactions and account balances stay in this browser’s local storage.

## New in this update
- Monthly totals for each bank account: income/salary, expenses, savings, investments and net.
- Household grand totals across all accounts for the selected month.
- Salary totals for Me and Spouse separately, plus income totals and account-wise income breakdown.
- Transactions without an account are shown as “Unassigned account” so they are not hidden.

## Publish
Upload all files in this folder to the root of your GitHub repository and commit to `main`. Keep `index.html`, `manifest.json`, `sw.js`, `icon.svg`, `icon-192.png`, and `icon-512.png` at repository root.

## Data safety
Export a JSON backup before updating. Existing records should remain in browser storage if the site origin and storage key stay the same, but keep a backup. The public site does not upload transactions to a server. PIN is not encryption.
