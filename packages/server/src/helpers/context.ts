import type { ApolloServer } from 'apollo-server-koa';
import type { IConfig } from '../types/config';

type ContextFunction = ConstructorParameters<typeof ApolloServer>[0]['context'];

export type Context = {
  payload?: IConfig;
};

/**
 * @todo
 * Add error handler
 */
const contextFn: ContextFunction = async ({ ctx }) => {
  const context: Context = {};

  const { config } = ctx.request.headers;

  if (config) {
    const payload: IConfig = JSON.parse(config);

    context.payload = payload;
  }

  return context;
};

export default contextFn;
