# SUOMSIANG CRYPTO

Live Qubic dashboard: network stats, candlestick chart, markets, explorer links, QubicSwap, partners, music player and a small game.
Static site (HTML, CSS, JavaScript only). No server, no API keys, no build step.

## Put it online with GitHub Pages (free)

1. Sign in at https://github.com and click **New repository**.
2. Name it `suomsiang-Qubic-trads`, choose **Public**, and create it.
3. Click **Add file > Upload files** and drag in **everything inside this folder**
   (`index.html`, `brand/`, `og/`, `favicon.ico`, `manifest.webmanifest`, `qubic-logo.png`, `qubic-badge.png`, `qubicswap-cover.jpg`, `.nojekyll`).
   Keep `index.html` at the top level of the repository, then click **Commit changes**.
4. Open **Settings > Pages**. Under **Build and deployment** choose **Deploy from a branch**, branch `main`, folder `/ (root)`, then **Save**.
5. After about a minute the site is live at `https://YOUR-USERNAME.github.io/suomsiang-Qubic-trads/`.

## If your username or repository name is different

The share-preview tags near the top of `index.html` (`canonical`, `og:url`, `og:image`, `twitter:image`) point to
`https://sompongma67-spec.github.io/suomsiang-Qubic-trads/`. Replace that address with your real one.

## Data sources

- Qubic network data: https://rpc.qubic.org
- Candles: Gate, MEXC or CoinGecko public APIs. Market list: CoinGecko.
- Charts: TradingView Lightweight Charts (Apache-2.0), included inside `index.html`.

These are third-party services. If one changes its API or rate limits, the matching part of the page shows a notice.

## Optional site-wide background

Put a picture named `background.jpg` or a short looping video named `background.mp4` next to `index.html`.
Every visitor then sees it as the default background. Visitors can still pick their own image or video (Colors panel) or remove it.
Keep videos short and small (10 to 30 seconds, ideally under 20 MB, H.264 MP4 or WebM).

## Install as an app (PC and phone)

The site is a Progressive Web App. Upload `sw.js` and `manifest.webmanifest` together with `index.html` and the `brand/` folder.
Over HTTPS (GitHub Pages is HTTPS) Chrome and Edge then show an Install icon at the right end of the address bar,
and the page also shows an Install button in its header. On iPhone or iPad use Share, then Add to Home Screen.
After you upload a new version, change `CACHE` in `sw.js` (for example to `suomsiang-v2`) so visitors get the update right away.
Live data is never cached, so the app still needs the internet for prices and network numbers.
