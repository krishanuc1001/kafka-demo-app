const {kafka} = require('./client')

async function init() {
  const producer = kafka.producer();

  console.log(
      "******************** Producer connection: IN PROGRESS *********************");
  await producer.connect();
  console.log(
      "******************** Producer connection: SUCCESS *********************");

  await producer.send({
    topic: "rider-updates",
    messages: [{
      key: 'location-update', value: JSON.stringify({
        name: 'John Doe',
        location: 'Kolkata'
      })
    }]
  })

  console.log(
      "******************** Producer dis-connection: IN PROGRESS *********************");
  await producer.disconnect();
  console.log(
      "******************** Producer dis-connection: SUCCESS *********************");

}

init();