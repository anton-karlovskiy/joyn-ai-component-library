
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import ContainedButton from 'components/UI/ContainedButton';

const useStyles = makeStyles(theme => ({
  joynUiAudit: {
    margin: theme.spacing(1)
  }
}));

const JoynUIAudit = () => {
  const classes = useStyles();
  
  return (
    <div className={classes.joynUiAudit}>
      <ContainedButton color='primary'>
        New
      </ContainedButton>
    </div>
  );
};

export default JoynUIAudit
