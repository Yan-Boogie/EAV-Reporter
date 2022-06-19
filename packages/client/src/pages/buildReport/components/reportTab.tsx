import {
  forwardRef,
  useImperativeHandle,
  useCallback,
  createRef,
  useState,
  MutableRefObject,
  useRef,
  MouseEvent,
} from 'react';
import { css } from '@emotion/react';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import {
  Typography, Box, SelectItem, IconButton, Button,
} from 'ui-modules';
import ReportSection from './reportSection';
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
  button: css`
    margin: 8px 0 0 0;
  `,
};

const reportTypes: SelectItem<string>[] = [
  {
    label: 'A',
    value: 'A',
  },
  {
    label: 'B',
    value: 'B',
  },
  {
    label: 'GRAPH',
    value: 'GRAPH',
  },
];

type RefProps = any;

type SectionList = {
  idx: number;
  ref: MutableRefObject<any>;
  onClose: (event: MouseEvent<HTMLElement>) => void;
}[];

export interface ReportSectionProps {
  onClose: (event: MouseEvent<HTMLElement>) => void;
}

const ReportTab = forwardRef<RefProps, ReportSectionProps>((props, ref) => {
  const { onClose } = props;
  const tabRef = useRef(null);
  const [sectionList, setSectionList] = useState<SectionList>([]);

  useImperativeHandle(ref, () => ({
    getValue: () => ({
      reportType: tabRef.current.getValue(),
    }),
  }));

  const handleClose = useCallback(
    (idx: number) => () => {
      setSectionList((prev) => [...prev.slice(0, idx), ...prev.slice(idx + 1)]);
    },
    [],
  );

  const handleAddClick = () => {
    setSectionList((prev) => [
      ...prev,
      {
        idx: prev.length,
        ref: createRef(),
        onClose: handleClose(prev.length),
      },
    ]);
  };

  return (
    <Box component="div" css={classes.boxWrapper}>
      <Typography align="center" component="h6" variant="h6">
        Tabs
      </Typography>
      <SelectField css={classes.selectField} selectLabel="Tab" ref={tabRef} selectItems={reportTypes} />
      {sectionList.map((el) => (
        <ReportSection key={el.idx} onClose={el.onClose} ref={el.ref} />
      ))}
      <Button css={classes.button} onClick={handleAddClick} startIcon={<AddIcon />}>
        Add Section
      </Button>
      <IconButton onClick={onClose} css={classes.closeBtn}>
        <CloseIcon fontSize="small" />
      </IconButton>
    </Box>
  );
});

export default ReportTab;
