import { Field, InputType } from 'type-graphql';
import ConfigPayloadInput from './configPayloadInput';

@InputType()
class ConfigInput {
  @Field(() => [ConfigPayloadInput])
  data: ConfigPayloadInput[];
}

export default ConfigInput;
