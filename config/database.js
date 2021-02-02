
module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: "${process.env.DATABASE_HOST || 'localhost'}",
        port: "${process.env.DATABASE_PORT || 5432}",
        database: "${process.env.DATABASE_NAME || 'strapi-app}",
        username: "${process.env.DATABASE_USERNAME || 'postgres}",
        password: "${process.env.DATABASE_PASSWORD || 'admin}",
      },
      options: {}
    },
  },
});
