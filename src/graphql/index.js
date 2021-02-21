require('dotenv').config();
const {ApolloServer} = require('apollo-server-lambda');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');
const miniMarketDatabase = require("../datasources/MiniMarketDatabase");

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
  }),
  playground: {
    endpoint: "/dev/graphql"
  }
});

exports.graphqlHandler = server.createHandler({
  cors: {
    origin: '*',
    credentials: true,
  },
});
