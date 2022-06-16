import { Field, InputType } from 'type-graphql';
import RenderTypes from './renderTypes';

@InputType('ReportSectionInput')
class ReportSectionInput {
  @Field(() => String)
  sectionName: string;

  @Field(() => [RenderTypes])
  renderTypes: RenderTypes[];
}

export default ReportSectionInput;
