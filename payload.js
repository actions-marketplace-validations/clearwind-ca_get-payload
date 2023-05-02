let payload = Buffer.from(process.env.INPUT_PAYLOAD, 'base64').toString('utf-8');
payloadAsJson = JSON.parse(payload);
process.env['PAYLOAD'] = payload
process.env['PAYLOAD_ENDPOINT'] = payloadAsJson.server.url + payloadAsJson.server.endpoint
process.env['PAYLOAD_REPOSITORY_URL'] = payloadAsJson.repository
process.env['PAYLOAD_CHECK_SLUG'] = payloadAsJson.check.name
process.env['PAYLOAD_SERVER'] = JSON.stringify(payloadAsJson.server)
process.env['PAYLOAD_CHECK'] = JSON.stringify(payloadAsJson.check)
process.env['PAYLOAD_RESULT'] = JSON.stringify(payloadAsJson.result)
process.env['PAYLOAD_SERVICE'] = JSON.stringify(payloadAsJson.service)
process.env['PAYLOAD_SOURCE'] = JSON.stringify(payloadAsJson.source)