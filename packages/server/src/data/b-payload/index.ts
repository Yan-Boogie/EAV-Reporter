import { RenderTypes, IPayloadSection } from '@src/types/config';
import payloadData from './BPayload.json';

export { payloadData as bPayloadData };

export const bPayloadSections: IPayloadSection[] = [
  {
    sectionName: 'Summary',
    allowTypes: [RenderTypes.LIST],
  },
  {
    sectionName: 'Statistics',
    allowTypes: [RenderTypes.BAR_CHART],
  },
  {
    sectionName: 'LastLoginUsers',
    allowTypes: [RenderTypes.TABLE],
  },
  {
    sectionName: 'NewCreateUsers',
    allowTypes: [RenderTypes.TABLE],
  },
  {
    sectionName: 'RemoveUsers',
    allowTypes: [RenderTypes.TABLE],
  },
];
