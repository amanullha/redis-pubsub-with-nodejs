const Redis = require('ioredis');
const redisClient = new Redis();

redisClient.on('connect', () => {
    console.log('Connected to Redis');
});

redisClient.on('error', (err) => {
    console.log(err.message);
});

redisClient.on('ready', () => {
    console.log('Redis is ready');
});

redisClient.on('end', () => {
    console.log('Redis connection ended');
});

process.on('SIGINT', () => {
    redisClient.quit();
});

module.exports = redisClient;
