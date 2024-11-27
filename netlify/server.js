import { createRequestHandler } from "@remix-run/netlify";

export const handler = createRequestHandler({
    build: require("../../build/server/index.js") // Adjust as necessary
//   mode: process.env.NODE_ENV,    // Environment mode (development/production)
});