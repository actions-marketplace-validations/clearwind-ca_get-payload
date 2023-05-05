A GitHub Action to easily get the payload for a [Service Catalog](https://github.com/clearwind-ca/service-catalog) health check as a file containing the JSON.

## Usage

    - uses: clearwind-ca/get-payload@v1

## Required secrets

None

## Inputs

|Name|Required|Default|Value|
|-|-|-|-|
|`payload_file`|No|`/tmp/service-catalog-payload.json`|Path to the file|
|`payload`|No|`${{ github.event.client_payload.data }}`|The payload from the repository dispatch|

If `payload_file` is specified then the decoded payload will be saved to that file. Otherwise it will be saved to the default value shown.