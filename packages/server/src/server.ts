import Koa from 'koa';
import kcors from 'kcors';
import http from 'http';
import { ApolloServer } from 'apollo-server-koa';
import path from 'path';
import views from 'koa-views';
import context from './helpers/context';
import buildSchema from './schema';
import { PORT } from './constants/port';
import { NODE_ENV } from './constants/nodeEnv';
import dbService from './service/dbService';
import htmlReporter from './routes/htmlReporter';

// init server
const main = async () => {
  const app = new Koa();

  app.use(kcors());

  const schema = await buildSchema();
  const server = new ApolloServer({
    schema,
    context,
    playground: NODE_ENV === 'development',
  });

  server.applyMiddleware({ app });

  app.use(views(path.resolve(__dirname, 'views'), { extension: 'ejs' }));
  app.use(htmlReporter.routes());

  const httpServer = http.createServer(app.callback());

  httpServer.listen(PORT, async () => {
    await dbService.init();

    console.log(`EAV Server listen on port: ${PORT}`);
  });
};

// run server up
main();
