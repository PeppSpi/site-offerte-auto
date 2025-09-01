# Affiliate Automated Boilerplate (Next.js + GitHub Actions + Vercel)

**Obiettivo:** sito che aggiorna automaticamente i prodotti (via GitHub Actions) e li mostra con Next.js. I click passano da `/api/redirect` (serverless) e vanno al link affiliato.

## Requisiti minimi
- Account GitHub
- Account Vercel (gratis)
- (Opzionale) Account rete affiliate (Skimlinks / Amazon / Awin) e tracking

## Setup rapido (solo browser, senza installare nulla)
1. Crea un **nuovo repository** su GitHub (privato o pubblico).
2. Scarica questo progetto come ZIP e **carica i file** nel repo (`Add files` → `Upload files`).
3. Vai su **Vercel** → `New Project` → importa il repo → `Framework: Next.js` → Deploy.
4. Dopo il deploy, apri il sito. Vedrai prodotti demo.
5. In GitHub: apri `Actions` e **abilita** i workflow. Il cron aggiornerà `data/products.json` ogni 6 ore.
6. (Opzionale) Imposta le **Environment Variables** su Vercel e i **Repository Secrets** su GitHub se integri API reali.
7. Sostituisci in seguito `scripts/fetch-products.js` con le chiamate alla tua rete affiliate (scrivendo i risultati in `data/products.json`).

## Note
- `pages/api/redirect.js` richiede un host con funzioni serverless (Vercel). Se usi GitHub Pages statico, l'API non funzionerà.
- Log dei click: `data/clicks.log` (non adatto ad alti volumi, ma ok per demo).
- Modifica stile e testi nelle pagine per adattare il brand.

Ultimo aggiornamento: 2025-09-01
