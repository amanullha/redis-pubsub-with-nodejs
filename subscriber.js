const Redis = require('ioredis');
const redisClient = new Redis();
const channel = 'notify';

const subscriber = redisClient;
subscriber.subscribe(channel, (err) => {
    if (err) {
        console.error('Error subscribing to channel:', err);
    } else {
        console.log(`Subscribed to channel ${channel}`);
    }
});

// Listen for messages on the subscribed channel
subscriber.on('message', (channel, message) => {
    console.log(`Received message from channel ${channel}: ${message}`);
});

module.exports = subscriber;
