import { RenderTypes, IPayloadSection } from '../../types/config';
import nodesData from './nodes.json';
import edgesData from './edges.json';

export const graphPayloadData = {
  Nodes: nodesData,
  edges: edgesData,
};

export const graphPayloadSection: IPayloadSection[] = [
  {
    sectionName: 'Graph',
    allowTypes: [RenderTypes.GRAPH],
  },
];
