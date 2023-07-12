const WooCommerceRestApi = require("@woocommerce/woocommerce-rest-api").default;

const api = new WooCommerceRestApi({
  url: "http://localhost/wstekh/",
  consumerKey: process.env.WC_CONSUMER_KEY,
  consumerSecret: process.env.WC_CONSUMER_SECRET,
  wpAPI: true,
  version: "wc/v3",
});

/**
 * Get Products.
 *
 * Endpoint /api/get-products or '/api/get-products?perPage=2'
 *
 * @param req
 * @param res
 * @return {Promise<void>}
 */
export default async function handler(req, res) {
  const responseData = {
    success: false,
    products: [],
  };

  const { perPage } = req?.query ?? {};

  try {
    const { data } = await api.get("products", {
      per_page: perPage || 50,
    });

    responseData.success = true;
    responseData.products = data;

    res.json(responseData);
  } catch (error) {
    responseData.error = error.message;
    res.status(500).json(responseData);
  }
}
