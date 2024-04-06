const {kafka} = require('./client')
const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

async function init() {
  const producer = kafka.producer();

  console.log(
      "******************** Producer connection: IN PROGRESS *********************");
  await producer.connect();
  console.log(
      "******************** Producer connection: SUCCESS *********************");

  rl.setPrompt('>');
  rl.prompt();

  rl.on('line', async function (line) {
    const [riderName, location] = line.split(" ")
    await producer.send({
      topic: "rider-updates",
      messages: [
        {
          partition: location.toLowerCase() === "north" ? 0 : 1,
          key: 'location-update',
          value: JSON.stringify({
            name: riderName,
            location: location
          })
        }]
    })
  }).on('close', async () => {
    console.log(
        "******************** Producer dis-connection: IN PROGRESS *********************");
    await producer.disconnect();
    console.log(
        "******************** Producer dis-connection: SUCCESS *********************");
  })

}

init();