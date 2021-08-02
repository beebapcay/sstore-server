import * as dotenv from 'dotenv';

dotenv.config();

const SERVER_HOSTNAME = process.env.HOST || 'localhost';
const SERVER_PORT = process.env.PORT || 1338;

const SERVER = {
  hostname: SERVER_HOSTNAME,
  port: SERVER_PORT
};

const DB_URI =
  'mongodb+srv://admin:admin@clusterawssingapore.qhuaq.mongodb.net/sstore?retryWrites=true&w=majority';

const config = {
  server: SERVER,
  dbUri: DB_URI
};

export default config;
