/** @type {import('@remix-run/dev').AppConfig} */
export default {
  ignoredRouteFiles: ["**/.*"],
  server: "./server.js",
  serverBuildPath: "build/server/index.js",
  serverDependenciesToBundle: "all",
  serverMainFields: ["module", "main"],
  serverMinify: true,
  serverModuleFormat: "esm",
  serverPlatform: "node",
  future: {
    v3_fetcherPersist: true,
    v3_relativeSplatPath: true,
    v3_throwAbortReason: true,
    v3_lazyRouteDiscovery: true,
  },
};