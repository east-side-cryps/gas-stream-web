const env = process.env.NODE_ENV || "development";
const debug = env !== "production";
const port = process.env.PORT || 443;
const host = process.env.HOST || `0.0.0.0`;

const redis = {
  url: process.env.REDIS_URL || "redis://localhost:6379/0",
  prefix: process.env.REDIS_PREFIX || "walletconnect-bridge",
};

export default {
  env: env,
  debug: debug,
  port,
  host,
  redis,
};
