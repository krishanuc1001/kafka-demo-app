const {kafka} = require('./client')

async function init() {
  const consumer = kafka.consumer({groupId: 'kolkata-WB'});

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
          `TOPIC: ${topic}, 
           PARTITION: ${partition}`,
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