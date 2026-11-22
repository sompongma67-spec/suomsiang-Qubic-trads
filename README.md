# SUOMSIANG CRYPTO

Live Qubic dashboard: network stats, candlestick chart, markets, explorer links, QubicSwap, partners, music player and a small game.
Static site (HTML, CSS, JavaScript only). No server, no API keys, no build step.

## Put it online with GitHub Pages (free)

1. Sign in at https://github.com and click **New repository**.
2. Name it `suomsiang-crypto`, choose **Public**, and create it.
3. Click **Add file > Upload files** and drag in **everything inside this folder**
   (`index.html`, `brand/`, `og/`, `favicon.ico`, `manifest.webmanifest`, `qubic-logo.png`, `qubic-badge.png`, `qubicswap-cover.jpg`, `.nojekyll`).
   Keep `index.html` at the top level of the repository, then click **Commit changes**.
4. Open **Settings > Pages**. Under **Build and deployment** choose **Deploy from a branch**, branch `main`, folder `/ (root)`, then **Save**.
5. After about a minute the site is live at `https://YOUR-USERNAME.github.io/suomsiang-crypto/`.

## If your username or repository name is different

The share-preview tags near the top of `index.html` (`canonical`, `og:url`, `og:image`, `twitter:image`) point to
`https://sompongma67-spec.github.io/suomsiang-crypto/`. Replace that address with your real one.

## Data sources

- Qubic network data: https://rpc.qubic.org
- Candles: Gate, MEXC or CoinGecko public APIs. Market list: CoinGecko.
- Charts: TradingView Lightweight Charts (Apache-2.0), included inside `index.html`.

These are third-party services. If one changes its API or rate limits, the matching part of the page shows a notice.
