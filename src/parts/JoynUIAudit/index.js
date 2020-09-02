
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import ContainedButton from 'components/UI/ContainedButton';
import { ReactComponent as AddIcon } from 'assets/icons/svgs/add.svg';

const useStyles = makeStyles(theme => ({
  joynUiAudit: {
    margin: theme.spacing(1),
    '& > *': {
      margin: theme.spacing(.5)
    }
  }
}));

const JoynUIAudit = () => {
  const classes = useStyles();
  
  return (
    <div className={classes.joynUiAudit}>
      <ContainedButton color='primary'>
        New
      </ContainedButton>
      <ContainedButton
        color='primary'
        startIcon={<AddIcon fill='currentColor' />}>
        New
      </ContainedButton>
    </div>
  );
};

export default JoynUIAudit
