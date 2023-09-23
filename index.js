const express = require('express');
const app = express();
const port = 3001;
const subscriber = require('./subscriber.js');
const publisher = require('./publisher.js');

const channelName = 'notify';
const data = { from: 'testing channel' };
publisher.publish(channelName, data);

function getUser() {
    let userId = Math.random() * 10;
    let user = {
        name: Math.random().toString(36).substring(2, userId),
        id: userId,
    };
    return user;
}

async function publisherConfig() {
    setInterval(() => {
        console.log('Publish');
        let user = getUser();
        publisher.publish(channelName, user);
    }, 2000);
}
publisherConfig();
app.listen(port, () =>
    console.log('Node.js Redis pubsub running on port: ', port)
);
