
const config = {
  IS_SERVER: typeof window === 'undefined',
  BUNDLE_ANALYZE: process.env.BUNDLE_ANALYZE,
  NODE_ENV: process.env.NODE_ENV,
  CUSTOM_ENV: process.env.CUSTOM_ENV,
  PORT: process.env.PORT,
  HOST: process.env.HOST,
  IS_PROD: process.env.NODE_ENV === 'production',
  GA_TRACKING_ID: process.env.GA_TRACKING_ID || 'XXX-XXX-XXX',
  API_URL: process.env.API_URL,
  MAPBOX_TOKEN: 'pk.eyJ1IjoidGFrYWtvdCIsImEiOiJja2phNXFvYnI3OHYwMnlsYnE3cW9jZ3o4In0.9R7Ldxlb-igrkj8WXRLCpw',
};

module.exports = config;
