import { registerEnumType } from 'type-graphql';
import { RenderTypes } from '../../../types/config';

export default RenderTypes;

registerEnumType(RenderTypes, { name: 'RenderTypes' });
