module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: env('DATABASE_HOST', '172.240.0.2'),
        port: env.int('DATABASE_PORT', 5432),
        database: env('DATABASE_NAME', 'asgard-doc-hub-db'),
        username: env('DATABASE_USERNAME', 'odin'),
        password: env('DATABASE_PASSWORD', 'zup@123'),
        ssl: env.bool('DATABASE_SSL', false),
      },
      options: {}
    },
  },
});
