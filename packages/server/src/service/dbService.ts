import * as IPFSGateway from 'ipfs';
import type { IPFS } from 'ipfs';
import type { OrbitDB as IOrbitDB } from 'orbit-db';
import KeyValueStore from 'orbit-db-kvstore';
import type { IConfig } from '../types/config';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const OrbitDB = require('orbit-db');

/**
 * @todos
 * - Decouple Article schema interface as different layers
 * - Add type-di for DI pattern
 * - Move the mock to the composition root
 */
class DbService {
  private ipfs: IPFS;

  private db: IOrbitDB;

  private store: KeyValueStore<any>;

  fetchConfigById = async (configId: string) => this.store.get(configId);

  fetchAllConfigs = async () => Object.values(this.store.all);

  upsertConfig = async (config: IConfig) => {
    await this.store.put(config.id, config);

    return true;
  };

  init = async () => {
    this.ipfs = await IPFSGateway.create();
    this.db = await OrbitDB.createInstance(this.ipfs);
    this.store = await this.db.keyvalue('store');

    await this.store.load();
  };
}

export default new DbService();
