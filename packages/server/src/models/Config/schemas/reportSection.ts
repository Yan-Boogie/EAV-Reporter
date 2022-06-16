import { Field, ObjectType } from 'type-graphql';
import RenderTypes from './renderTypes';

@ObjectType('ReportSection')
class ReportSection {
  @Field(() => String)
  sectionName: string;

  @Field(() => RenderTypes)
  renderTypes: RenderTypes;
}

export default ReportSection;
