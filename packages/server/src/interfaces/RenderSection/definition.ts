import { InterfaceType, Field } from 'type-graphql';
import { RenderTypes, ReportType } from '@src/types/config';

@InterfaceType()
abstract class RenderSection {
  @Field()
  reportType: ReportType;

  @Field()
  sectionName: string;

  @Field()
  renderType: RenderTypes;
}

export default RenderSection;
