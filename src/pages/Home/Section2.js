const finnhub = require('finnhub');

const api_key = finnhub.ApiClient.instance.authentications['api_key'];
api_key.apiKey = "cppfbopr01qi7uaihi6gcppfbopr01qi7uaihi70"
const finnhubClient = new finnhub.DefaultApi()

finnhubClient.quote("MSFT", (error, data, response) => {
  console.log(data)
});