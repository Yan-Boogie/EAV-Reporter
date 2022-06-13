import * as IPFSGateway from 'ipfs';
import type { IPFS } from 'ipfs';
import { OrbitDB } from 'orbit-db';
import KeyValueStore from 'orbit-db-kvstore';

/**
 * @todos
 * - Decouple Article schema interface as different layers
 * - Add type-di for DI pattern
 * - Move the mock to the composition root
 */
class DbService {
  private ipfs: IPFS;

  private db: OrbitDB;

  private store: KeyValueStore<any>;

  init = async () => {
    this.ipfs = await IPFSGateway.create();
    this.db = await OrbitDB.createInstance(this.ipfs);
    this.store = await this.db.keyvalue('store');

    await this.store.load();
  };
}

export default new DbService();
