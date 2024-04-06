const {kafka} = require('./client')

async function init() {

  // Admin connection setup
  const admin = kafka.admin();
  console.log(
      "******************** Admin connection: IN PROGRESS *********************");
  admin.connect();
  console.log(
      "******************** Admin connection: SUCCESS *********************");

  // Topic and partition creation
  console.log(
      "******************** Topic 'rider-updates' creation: IN PROGRESS *********************");
  admin.createTopics({
    topics: [{
      topic: "rider-updates",
      numPartitions: 2
    }]
  });
  console.log(
      "******************** Topic 'rider-updates' creation: SUCCESS *********************");

  console.log(
      "******************** Admin dis-connection: IN PROGRESS *********************");
  await admin.disconnect();
  console.log(
      "******************** Admin dis-connection: SUCCESS *********************");

}

init();