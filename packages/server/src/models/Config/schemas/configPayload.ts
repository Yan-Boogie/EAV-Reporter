import { Field, ObjectType } from 'type-graphql';
import ReportType from './reportTypes';
import ReportSection from './reportSection';

@ObjectType('ConfigPayload')
class ConfigPayload {
  @Field(() => ReportType)
  reportType: ReportType;

  @Field(() => [ReportSection])
  sections: ReportSection[];
}

export default ConfigPayload;
