const { buildExampleHandler } = require("./handlers/example-handler");
/**
 * Background Cloud Function to be triggered by Pub/Sub.
 * This function is exported by index.js, and executed when
 * the trigger topic receives a message.
 *
 * @param {object} message The Pub/Sub message.
 * @param {object} context The event metadata.
 */
const helloPubSub = buildExampleHandler();
exports.helloPubSub = helloPubSub;