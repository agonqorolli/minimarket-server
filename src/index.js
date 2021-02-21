require('dotenv').config();
const {ApolloServer} = require('apollo-server');
const typeDefs = require('./graphql/schema');
const resolvers = require('./graphql/resolvers');
const miniMarketDatabase = require("./datasources/MiniMarketDatabase");

const knexConfig = {
  client: 'mysql',
  version: '8.0.20',
  connection: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    miniMarketDatabase: new miniMarketDatabase(knexConfig)
  })
});

// The `listen` method launches a web server.
server.listen().then(({url}) => {
  console.log(`MiniMarket server ready at ${url}`);
});
