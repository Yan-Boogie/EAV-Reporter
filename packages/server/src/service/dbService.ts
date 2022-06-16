import * as IPFSGateway from 'ipfs';
import type { IPFS } from 'ipfs';
import type { OrbitDB as IOrbitDB } from 'orbit-db';
import KeyValueStore from 'orbit-db-kvstore';

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

  init = async () => {
    this.ipfs = await IPFSGateway.create();
    this.db = await OrbitDB.createInstance(this.ipfs);
    this.store = await this.db.keyvalue('store');

    await this.store.load();
  };
}

export default new DbService();
