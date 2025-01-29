module.exports = {
    apps:
    [
    {
   name: 'server-3001',
   script: 'index.js',
    env: { PORT: 3001, NODE_ENV: 'production', },
    },
    {
    name: 'server-3002',
    script: 'index.js',
    env: { PORT: 3002, NODE_ENV: 'production', },
    },
    {
    name: 'server-3003',
    script: 'index.js',
    env: { PORT: 3003, NODE_ENV: 'production', },
    },
    ],
    };