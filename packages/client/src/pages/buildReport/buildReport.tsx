import {
  useCallback, createRef, useState, MutableRefObject, useRef, MouseEvent,
} from 'react';
import { css } from '@emotion/react';
import { Box, Button } from 'ui-modules';
import AddIcon from '@mui/icons-material/Add';
import PublishIcon from '@mui/icons-material/Publish';
import ReportTab from './components/reportTab';
import InputField from './components/inputField';

const classes = {
  container: css`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 16px;
    margin: 0 auto;
  `,
  input: css`
    margin: 0 0 16px 0;
  `,
};

type TabList = {
  idx: number;
  ref: MutableRefObject<any>;
  onClose: (event: MouseEvent<HTMLElement>) => void;
}[];

export interface BuildReportProps {
  buildReport: (props) => void;
}

function BuildReport(props: BuildReportProps) {
  const { buildReport } = props;
  const nameRef = useRef(null);
  const [tabList, setTabList] = useState<TabList>([]);

  const handleClose = useCallback(
    (idx: number) => () => {
      setTabList((prev) => [...prev.slice(0, idx), ...prev.slice(idx + 1)]);
    },
    [],
  );

  const handleAddClick = () => {
    setTabList((prev) => [
      ...prev,
      {
        idx: prev.length,
        ref: createRef(),
        onClose: handleClose(prev.length),
      },
    ]);
  };

  const handleSubmit = () => {
    const data = {
      reportName: nameRef.current.getValue(),
      data: tabList.map((el) => el.ref.current.getValue()),
    };

    buildReport({
      variables: {
        configInput: {
          ...data,
        },
      },
    });
  };

  return (
    <Box css={classes.container} maxWidth="sm">
      <InputField
        css={classes.input}
        fullWidth
        required
        ref={nameRef}
        label="Report-Name"
        placeholder="Please enter Report Name"
      />
      {tabList.map((el) => (
        <ReportTab key={el.idx} onClose={el.onClose} ref={el.ref} />
      ))}
      <Button onClick={handleAddClick} startIcon={<AddIcon />}>
        Add Report Tab
      </Button>
      <Button onClick={handleSubmit} startIcon={<PublishIcon />}>
        Submit
      </Button>
    </Box>
  );
}

export default BuildReport;
