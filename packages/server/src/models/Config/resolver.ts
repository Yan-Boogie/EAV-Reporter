/* eslint-disable class-methods-use-this */
import {
  Arg, Mutation, Query, Resolver,
} from 'type-graphql';
import { v4 } from 'uuid';
// import dbService from '@src/service/dbService';
import Config from './schemas/config';
import ConfigInput from './schemas/configInput';

@Resolver()
export class ConfigResolver {
  @Query(() => [Config])
  async reportConfigs(): // @Arg('offset', { nullable: false }) offset: number,
  //   @Arg('limit', { nullable: false }) limit: number,
  Promise<Config[]> {
    return [];
  }

  // @Query(() => Config)
  // async reportConfig(
  //   @Arg('id') id: string,
  // ): Promise<Config> {
  //   return { id, data: {} };
  // }

  @Mutation(() => Config)
  async buildReport(@Arg('ConfigInput') configInput: ConfigInput) {
    const id = v4();

    return {
      id,
      ...configInput,
    };
  }
}
