const grpc = require('grpc');
const messages = require('./ice_cream_pb');
const services = require('./ice_cream_grpc_pb');

function main() {
  const client = new services.IceCreamClient(
    'localhost:50051', grpc.credentials.createInsecure()
  );

  const iceCreamRequest = new messages.IceCreamRequest();
  iceCreamRequest.setScoops(3);
  iceCreamRequest.setFlavor('strawberry');

  client.orderIceCream(iceCreamRequest, function (err, response) {
    if (err) {
      console.log('this thing broke!', err);
    } else {
      console.log('response from python:', response.getMessage());
    }
  })
}

main();
