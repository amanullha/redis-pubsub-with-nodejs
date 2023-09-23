const redisClient = require('./redisConfig.js');

const publisher = redisClient;
class Publisher {
    publish(channel, data) {
        const jsonData = JSON.stringify(data);
        publisher.publish(channel, jsonData, (err, count) => {
            if (err) {
                console.error(`Error publishing message to ${channel}:`, err);
            } else {
                console.log(
                    `Published message to ${channel}. Subscribers: ${count}`
                );
            }
        });
    }
}

module.exports = new Publisher();
