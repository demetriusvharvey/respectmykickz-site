# Respect My Kickz — Shopify storefront

This branch connects the custom Vite/React storefront to Shopify's Storefront API.

Required Vercel environment variables:

- `VITE_SHOPIFY_STORE_DOMAIN=1681c9-mu.myshopify.com`
- `VITE_SHOPIFY_STOREFRONT_TOKEN=<public Storefront API token>`
- `VITE_SHOPIFY_API_VERSION=2026-07`

The Storefront API token should be added directly to the Vercel project environment. Do not commit it to GitHub.

Implemented customer flow:

1. Shopify products load on `/shop`.
2. Product cards open `/products/:handle`.
3. Customers choose an available size/variant.
4. Add to Cart creates or updates a Shopify cart.
5. `/cart` supports quantity changes and removal.
6. Secure Checkout redirects to the Shopify-hosted checkout URL.

Until the token is configured, the site renders a safe "online inventory is being connected" state rather than exposing broken purchase controls.
