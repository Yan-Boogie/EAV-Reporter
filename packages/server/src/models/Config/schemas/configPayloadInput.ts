import { Field, InputType } from 'type-graphql';
import ReportType from './reportTypes';
import ReportSectionInput from './reportSectionInput';

@InputType('ConfigPayloadInput')
class ConfigPayloadInput {
  @Field(() => ReportType)
  reportType: ReportType;

  @Field(() => [ReportSectionInput])
  sections: ReportSectionInput[];
}

export default ConfigPayloadInput;
