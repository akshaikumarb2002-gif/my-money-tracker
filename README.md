My Money Household Tracker V12

Preserves the existing localStorage key (my-money-household-v2) and existing transaction, account, trip, theme, and navigation structures.

V12 additions:
- Trip settlement calculator with equal split and editable custom shares; displays who is owed / who owes based on the currently filtered trip expenses.
- Bank reconciliation: opening balance, recorded net movement, expected balance and difference versus manually entered actual balance. Existing accounts can set an opening balance without losing their current balance.
- Expanded monthly financial report: income, expenses, savings, investments, net after allocations, savings/investment rate, transaction count, and month-over-month expense comparison.
- Budget alerts at 75%, 90%, and 100% for the monthly budget and each trip budget.
- Safer restore: validates backup shape, shows incoming record counts, and creates a local pre-restore recovery snapshot before replacing data.
- CSV exports for transactions, bank reconciliation, trip expenses and monthly report. CSV files open in Excel and other spreadsheet apps.
- Retains swipe navigation, AMOLED white navigation labels, Purple Luxe, Royal Blue, trip payer/category/date filters, and local-only browser storage.

Deployment: upload all files in this folder to the root of your existing GitHub Pages repository and commit to main. Do not clear site data. Export a JSON backup before updating. No bank connection or cloud database is used.
