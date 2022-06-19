import { Field, ObjectType, ID } from 'type-graphql';
import ConfigPayload from './configPayload';

@ObjectType()
class Config {
  @Field(() => ID)
  id: string;

  @Field(() => String)
  reportName: string;

  @Field(() => [ConfigPayload])
  data: ConfigPayload[];
}

export default Config;
