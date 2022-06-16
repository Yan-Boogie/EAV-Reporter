export enum RenderTypes {
  LIST = 'LIST',
  TABLE = 'TABLE',
  PIE_CHART = 'PIE_CHART',
  HEATMAP = 'HEATMAP',
  BAR_CHART = 'BAR_CHART',
  GRAPH = 'GRAPH',
}

export type IPayloadSection = {
  sectionName: string;
  allowTypes: RenderTypes[];
};

export enum ReportType {
  A = 'A',
  B = 'B',
  GRAPH = 'GRAPH',
}

export type ReportSection = {
  sectionName: string;
  renderTypes: RenderTypes;
};

export type ConfigPayload = {
  reportType: ReportType;
  sections: ReportSection[];
};

export interface IConfig {
  id: string;
  data: ConfigPayload[];
}

export type IConfigInput = Omit<IConfig, 'id'>;
