
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import JoynButton from 'components/UI/JoynButton';
import { ReactComponent as PlusIcon } from 'assets/icons/svgs/plus.svg';
import { ReactComponent as SaveIcon } from 'assets/icons/svgs/save.svg';
import { ReactComponent as LighteningIcon } from 'assets/icons/svgs/lightening.svg';

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
      <JoynButton
        variant='contained'
        color='primary'>
        New
      </JoynButton>
      <JoynButton
        variant='contained'
        color='primary'
        startIcon={<PlusIcon fill='currentColor' />}>
        New
      </JoynButton>
      <JoynButton
        variant='contained'
        color='primary'
        startIcon={<SaveIcon fill='currentColor' />}>
        Save
      </JoynButton>
      <JoynButton
        loading
        variant='contained'
        color='primary'
        startIcon={<SaveIcon fill='currentColor' />}>
        Save
      </JoynButton>
      <JoynButton
        variant='outlined'
        color='primary'>
        Actions
      </JoynButton>
      <JoynButton
        variant='outlined'
        color='primary'
        startIcon={<LighteningIcon fill='currentColor' />}>
        Actions
      </JoynButton>
      <JoynButton
        loading
        variant='outlined'
        color='primary'
        startIcon={<LighteningIcon fill='currentColor' />}>
        Actions
      </JoynButton>
    </div>
  );
};

export default JoynUIAudit
