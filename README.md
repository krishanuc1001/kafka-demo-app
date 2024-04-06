# Kafka Demo App Using `kafkajs`

This is a sample Kafka demo application that demonstrates the basic usage of the `kafkajs` library in Node.js to produce and consume messages with Apache Kafka.

## Prerequisites

Before running this application, make sure you have the following installed:
- Node.js (version 12 or higher)
- npm (usually comes with Node.js)
- Docker (for running Kafka locally)

## Getting Started

To get started with the Kafka demo app, follow these steps:

### 1. Clone the Repository

```
git clone https://github.com/your-username/kafka-demo-app.git
```

```
cd kafka-demo-app
```

### 2. Install Dependencies

```
npm install
```

### 3. Run Kafka and Zookeeper
You can run Kafka and Zookeeper using the provided docker-compose.yml file:

```
docker-compose up -d
```


### 4. Start the Producer
The producer script sends messages to a Kafka topic.

```
node producer.js
```


### 5. Start the Consumer
The consumer script listens for messages from a Kafka topic.

```
node consumer.js
```


### Configuration
You can configure the Kafka connection and topic settings in the config.js file.

`
module.exports = {
  kafkaBrokers: ['localhost:9092'],
  kafkaTopic: 'demo-topic'
};
`


### Project Structure

producer.js - The Kafka producer script that sends messages to the Kafka topic.

consumer.js - The Kafka consumer script that listens for messages from the Kafka topic.

config.js - Configuration file for Kafka connection and topic settings.

docker-compose.yml - Docker Compose configuration for running Kafka and Zookeeper locally.


### Dependencies
kafkajs - A modern Apache Kafka client for Node.js


### Contributing
Contributions are welcome! Please feel free to submit a pull request.
