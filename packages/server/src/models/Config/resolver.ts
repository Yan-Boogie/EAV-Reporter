/* eslint-disable class-methods-use-this */
import {
  Arg, Mutation, Query, Resolver,
} from 'type-graphql';
import { v4 } from 'uuid';
import dbService from '@src/service/dbService';
import Config from './schemas/config';
import ConfigInput from './schemas/configInput';

@Resolver()
export class ConfigResolver {
  @Query(() => [Config])
  async reportConfigs(
    @Arg('offset', { nullable: false }) offset: number,
      @Arg('limit', { nullable: false }) limit: number,
  ): Promise<Config[]> {
    const configs = await dbService.fetchAllConfigs();

    return configs.slice(offset, limit + offset);
  }

  @Query(() => Config)
  async reportConfig(@Arg('id') id: string): Promise<Config> {
    const config = await dbService.fetchConfigById(id);

    return config;
  }

  @Mutation(() => Config)
  async buildReport(@Arg('ConfigInput') configInput: ConfigInput) {
    const id = v4();

    await dbService.upsertConfig({ id, ...configInput });

    const config = await dbService.fetchConfigById(id);

    return config;
  }
}
