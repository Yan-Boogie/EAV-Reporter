import { useContext, useEffect } from 'react';
import { useHistory } from 'react-router';
import { useMutation } from '@apollo/client';
import CircularProgress from '@mui/material/CircularProgress';
import { css } from '@emotion/react';
import { Box } from 'ui-modules';
import { ConfigContext } from '@@src/config';
import BuildReportComponent from './buildReport';
import { BUILD_CONFIG_MUTATION } from './apis/config';

const classes = {
  loadingBox: css`
    width: 100%;
    display: flex;
    justify-content: center;
  `,
};

function BuildReport() {
  const [config, setConfig] = useContext(ConfigContext);
  const [buildReport, { loading, error }] = useMutation(BUILD_CONFIG_MUTATION, {
    onCompleted(data) {
      setConfig(data.buildReport.id);
    },
  });
  const history = useHistory();

  useEffect(() => {
    if (config) history.replace('/report');
  }, [config, history]);

  return loading || error ? (
    <Box css={classes.loadingBox}>
      <CircularProgress size={24} />
    </Box>
  ) : (
    <BuildReportComponent buildReport={(props) => buildReport(props)} />
  );
}

export default BuildReport;
