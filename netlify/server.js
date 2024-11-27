import { createRequestHandler } from "@remix-run/netlify";

export const handler = createRequestHandler({
  build: require("../../build"), // Path to the build output
  mode: process.env.NODE_ENV,    // Environment mode (development/production)
});