import { registerEnumType } from 'type-graphql';
import { ReportType } from '../../../types/config';

export default ReportType;

registerEnumType(ReportType, { name: 'ReportType' });
