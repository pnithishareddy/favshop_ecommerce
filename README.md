# FavShop: React e-commerce frontend

Stack: React 18, Vite, Tailwind CSS 3, React Router 6, localStorage.

## Run locally
    npm install
    npm run dev        # http://localhost:5173
    npm run build      # outputs dist/

## Demo accounts
Admin: admin@shop.com / admin123 (unlocks /admin). Any other user: use Register.

## Deploy to Netlify
Option A (drag and drop): run `npm run build`, then drag the `dist` folder to https://app.netlify.com/drop
Option B (Git): push to GitHub, then Netlify > Add new site > Import project.
Build command `npm run build`, publish directory `dist`. `netlify.toml` and `public/_redirects` already handle React Router refreshes.
