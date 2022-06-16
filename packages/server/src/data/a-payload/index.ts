import { RenderTypes, IPayloadSection } from '../../types/config';
import payloadData from './APayload.json';

export { payloadData as aPayloadData };

export const aPayloadSections: IPayloadSection[] = [
  {
    sectionName: 'Summary',
    allowTypes: [RenderTypes.LIST],
  },
  {
    sectionName: 'AttackType',
    allowTypes: [RenderTypes.TABLE],
  },
  {
    sectionName: 'AttackData',
    allowTypes: [RenderTypes.PIE_CHART, RenderTypes.HEATMAP],
  },
];
