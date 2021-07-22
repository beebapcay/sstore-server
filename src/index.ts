import http from 'http';
import express from 'express';
import mongoose from 'mongoose';
import { productRoute, categoryRoute, userRoute, motivationRoute, rootRoute } from './routes';
import logging from './config/logging';
import config from './config/config';

const NAMESPACE = 'SERVER';

const router = express();

/** Log the request */
router.use((req, res, next) => {
  logging.info(
    NAMESPACE,
    `METHOD: [${req.method}] - URL: [${req.url}] - IP: [${req.socket.remoteAddress}]`
  );

  res.on('finish', () => {
    logging.info(
      NAMESPACE,
      `METHOD: [${req.method}] - URL: [${req.url}] - STATUS: [${res.statusCode}] - IP: [${req.socket.remoteAddress}]`
    );
  });

  next();
});

/** Parse the body of the request */
router.use(express.urlencoded({ extended: false }));
router.use(express.json());

/** Rules of API */
router.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Origin',
    'Origin, X-Requested-Width, Content-Type, Accept, Authorization'
  );

  if (req.method == 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
    return res.status(200).json({});
  }

  next();
});

/** Routes */

router.use('/api/v1', productRoute);
router.use('/api/v1', categoryRoute);
router.use('/api/v1', motivationRoute);
router.use('/api/v1', userRoute);
router.use('/api/v1/', rootRoute);

/** Error handling */
router.use((req, res, next) => {
  const err = new Error('Not found');
  return res.status(404).json({ message: err.message });
});

/** Start server */
const httpServer = http.createServer(router);
httpServer.listen(config.server.port, () => {
  logging.info(NAMESPACE, `Server is running on ${config.server.hostname}:${config.server.port}`);
});

/** Connect MongoDB */
mongoose.connect(config.dbUri, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
  if (err) console.log(err.message);
  else logging.info(NAMESPACE, 'Successfully Connected to MongoDB');
});
