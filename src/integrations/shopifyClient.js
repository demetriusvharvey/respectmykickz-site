const SHOP_DOMAIN = import.meta.env.VITE_SHOPIFY_STORE_DOMAIN || "1681c9-mu.myshopify.com";
const STOREFRONT_TOKEN = import.meta.env.VITE_SHOPIFY_STOREFRONT_TOKEN || "";
const API_VERSION = import.meta.env.VITE_SHOPIFY_API_VERSION || "2026-07";

export const shopifyConfigured = Boolean(SHOP_DOMAIN && STOREFRONT_TOKEN);

async function shopifyFetch(query, variables = {}) {
  if (!shopifyConfigured) {
    throw new Error("Shopify storefront access has not been configured yet.");
  }

  const response = await fetch(`https://${SHOP_DOMAIN}/api/${API_VERSION}/graphql.json`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Storefront-Access-Token": STOREFRONT_TOKEN,
    },
    body: JSON.stringify({ query, variables }),
  });

  const payload = await response.json().catch(() => ({}));
  if (!response.ok) {
    throw new Error(payload?.errors?.[0]?.message || `Shopify request failed (${response.status}).`);
  }
  if (payload.errors?.length) {
    throw new Error(payload.errors.map((error) => error.message).join(" "));
  }
  return payload.data;
}

const MONEY = `amount currencyCode`;
const PRODUCT_CARD_FIELDS = `
  id
  handle
  title
  vendor
  availableForSale
  featuredImage { url altText }
  priceRange { minVariantPrice { ${MONEY} } }
  options { name values }
`;

const CART_FIELDS = `
  id
  checkoutUrl
  totalQuantity
  cost {
    subtotalAmount { ${MONEY} }
    totalAmount { ${MONEY} }
  }
  lines(first: 100) {
    nodes {
      id
      quantity
      merchandise {
        ... on ProductVariant {
          id
          title
          availableForSale
          selectedOptions { name value }
          image { url altText }
          price { ${MONEY} }
          product { handle title vendor }
        }
      }
    }
  }
`;

export function formatMoney(money) {
  if (!money) return "";
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: money.currencyCode || "USD",
  }).format(Number(money.amount || 0));
}

export async function getProducts(first = 50) {
  const data = await shopifyFetch(
    `query Products($first: Int!) {
      products(first: $first, sortKey: UPDATED_AT, reverse: true) {
        nodes { ${PRODUCT_CARD_FIELDS} }
      }
    }`,
    { first }
  );
  return data.products.nodes;
}

export async function getProduct(handle) {
  const data = await shopifyFetch(
    `query Product($handle: String!) {
      product(handle: $handle) {
        id
        handle
        title
        vendor
        description
        descriptionHtml
        availableForSale
        featuredImage { url altText }
        images(first: 10) { nodes { url altText } }
        options { name values }
        variants(first: 100) {
          nodes {
            id
            title
            availableForSale
            selectedOptions { name value }
            image { url altText }
            price { ${MONEY} }
            compareAtPrice { ${MONEY} }
          }
        }
      }
    }`,
    { handle }
  );
  return data.product;
}

export async function createCart(merchandiseId, quantity = 1) {
  const data = await shopifyFetch(
    `mutation CartCreate($input: CartInput!) {
      cartCreate(input: $input) {
        cart { ${CART_FIELDS} }
        userErrors { field message }
      }
    }`,
    { input: { lines: [{ merchandiseId, quantity }] } }
  );
  if (data.cartCreate.userErrors?.length) throw new Error(data.cartCreate.userErrors[0].message);
  return data.cartCreate.cart;
}

export async function getCart(cartId) {
  const data = await shopifyFetch(
    `query Cart($id: ID!) { cart(id: $id) { ${CART_FIELDS} } }`,
    { id: cartId }
  );
  return data.cart;
}

export async function addCartLines(cartId, merchandiseId, quantity = 1) {
  const data = await shopifyFetch(
    `mutation AddLines($cartId: ID!, $lines: [CartLineInput!]!) {
      cartLinesAdd(cartId: $cartId, lines: $lines) {
        cart { ${CART_FIELDS} }
        userErrors { field message }
      }
    }`,
    { cartId, lines: [{ merchandiseId, quantity }] }
  );
  if (data.cartLinesAdd.userErrors?.length) throw new Error(data.cartLinesAdd.userErrors[0].message);
  return data.cartLinesAdd.cart;
}

export async function updateCartLine(cartId, lineId, quantity) {
  const data = await shopifyFetch(
    `mutation UpdateLine($cartId: ID!, $lines: [CartLineUpdateInput!]!) {
      cartLinesUpdate(cartId: $cartId, lines: $lines) {
        cart { ${CART_FIELDS} }
        userErrors { field message }
      }
    }`,
    { cartId, lines: [{ id: lineId, quantity }] }
  );
  if (data.cartLinesUpdate.userErrors?.length) throw new Error(data.cartLinesUpdate.userErrors[0].message);
  return data.cartLinesUpdate.cart;
}

export async function removeCartLine(cartId, lineId) {
  const data = await shopifyFetch(
    `mutation RemoveLine($cartId: ID!, $lineIds: [ID!]!) {
      cartLinesRemove(cartId: $cartId, lineIds: $lineIds) {
        cart { ${CART_FIELDS} }
        userErrors { field message }
      }
    }`,
    { cartId, lineIds: [lineId] }
  );
  if (data.cartLinesRemove.userErrors?.length) throw new Error(data.cartLinesRemove.userErrors[0].message);
  return data.cartLinesRemove.cart;
}
