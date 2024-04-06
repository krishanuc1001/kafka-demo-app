const {kafka} = require('./client');
const group = process.argv[2];

async function init() {
  const consumer = kafka.consumer({groupId: group});

  console.log(
      "******************** Consumer connection: IN PROGRESS *********************");
  await consumer.connect();
  console.log(
      "******************** Consumer connection: SUCCESS *********************");

  await consumer.subscribe({
    topic: "rider-updates",
    fromBeginning: true
  })

  await consumer.run({
    eachMessage: async ({topic, partition, message}) => {
      console.log(
          `GROUP: ${group}`,
          `TOPIC: ${topic}`,
          `PARTITION: ${partition}`,
          message.value.toString()
      )
    }
  })

  // console.log(
  //     "******************** Consumer dis-connection: IN PROGRESS *********************");
  // await consumer.disconnect();
  // console.log(
  //     "******************** Consumer dis-connection: SUCCESS *********************");

}

init();