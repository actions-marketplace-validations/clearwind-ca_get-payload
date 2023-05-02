const fs = require('fs');
let payload = Buffer.from(process.env.INPUT_PAYLOAD, 'base64').toString('utf-8');
let filename = "/tmp/service-catalog-payload.json";
payloadAsJson = JSON.parse(payload);
fs.writeFileSync(filename, payload, function (err) {
  if (err) return console.log(err);
});
console.log(`Payload written to: ${filename}`);
console.log(`Payload result endpoint: ${payloadAsJson.server.url}${payloadAsJson.server.endpoint}`);
console.log(`Payload for check: ${payloadAsJson.check.slug} on repository: ${payloadAsJson.repository}`);
console.log(`Payload for repository: ${payloadAsJson.repository}`);