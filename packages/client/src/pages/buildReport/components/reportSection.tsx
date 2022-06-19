import {
  forwardRef, useImperativeHandle, useRef, memo, MouseEvent,
} from 'react';
import { css } from '@emotion/react';
import CloseIcon from '@mui/icons-material/Close';
import {
  Typography, Box, SelectItem, IconButton,
} from 'ui-modules';
import SelectField from './selectField';

const classes = {
  boxWrapper: css`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 8px;
    margin: 0 auto;
    width: 100%;
  `,
  closeBtn: css`
    position: absolute;
    right: 8px;
    top: 8px;
  `,
  selectField: css`
    min-width: 160px;
  `,
};

const sectionNames: SelectItem<string>[] = [
  {
    label: 'Summary',
    value: 'Summary',
  },
  {
    label: 'AttackType',
    value: 'AttackType',
  },
  {
    label: 'AttackData',
    value: 'AttackData',
  },
  {
    label: 'Statistics',
    value: 'Statistics',
  },
  {
    label: 'Users',
    value: 'Users',
  },
  {
    label: 'LastLoginUsers',
    value: 'LastLoginUsers',
  },
  {
    label: 'NewCreateUsers',
    value: 'NewCreateUsers',
  },
  {
    label: 'RemoveUsers',
    value: 'RemoveUsers',
  },
  {
    label: 'Graph',
    value: 'Graph',
  },
];

const renderTypes: SelectItem<string>[] = [
  {
    label: 'List',
    value: 'LIST',
  },
  {
    label: 'Table',
    value: 'TABLE',
  },
  {
    label: 'Pie-Chart',
    value: 'PIE_CHART',
  },
  {
    label: 'Heatmap',
    value: 'HEATMAP',
  },
  {
    label: 'Bar-Chart',
    value: 'BAR_CHART',
  },
  {
    label: 'Graph',
    value: 'GRAPH',
  },
];

type RefProps = any;

export interface ReportSectionProps {
  onClose: (event: MouseEvent<HTMLElement>) => void;
}

const ReportSection = forwardRef<RefProps, ReportSectionProps>((props, ref) => {
  const { onClose } = props;
  const sectionNameRef = useRef(null);
  const renderTypeRef = useRef(null);

  useImperativeHandle(ref, () => ({
    getValue: () => ({
      sectionName: sectionNameRef.current.getValue(),
      renderTypes: renderTypeRef.current.getValue(),
    }),
  }));

  return (
    <Box component="div" css={classes.boxWrapper}>
      <Typography component="h6" variant="h6">
        Sections
      </Typography>
      <SelectField css={classes.selectField} selectLabel="Name" ref={sectionNameRef} selectItems={sectionNames} />
      <SelectField css={classes.selectField} selectLabel="Type" ref={renderTypeRef} selectItems={renderTypes} />
      <IconButton onClick={onClose} css={classes.closeBtn}>
        <CloseIcon fontSize="small" />
      </IconButton>
    </Box>
  );
});

export default memo(ReportSection, () => true);
