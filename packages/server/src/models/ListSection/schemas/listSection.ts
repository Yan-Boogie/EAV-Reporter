import { Field, ObjectType } from 'type-graphql';
import RenderSection from '@src/interfaces/RenderSection/definition';

@ObjectType({ implements: RenderSection })
class ListSection extends RenderSection {
  @Field(() => String)
  data: string;
}

export default ListSection;
