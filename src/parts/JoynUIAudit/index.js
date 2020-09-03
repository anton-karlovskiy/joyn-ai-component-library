
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
      {/* regular contained button */}
      <JoynButton
        variant='contained'
        color='primary'>
        New
      </JoynButton>

      {/* contained button with a start icon */}
      <JoynButton
        variant='contained'
        color='primary'
        startIcon={<PlusIcon />}>
        New
      </JoynButton>
      <JoynButton
        variant='contained'
        color='primary'
        startIcon={<SaveIcon />}>
        Save
      </JoynButton>

      {/* contained button when disabled */}
      <JoynButton
        disabled
        variant='contained'
        color='primary'
        startIcon={<SaveIcon />}>
        Save
      </JoynButton>

      {/* contained button when loading */}
      <JoynButton
        loading
        variant='contained'
        color='primary'
        startIcon={<SaveIcon />}>
        Save
      </JoynButton>

      {/* regular outlined button */}
      <JoynButton
        variant='outlined'
        color='primary'>
        Actions
      </JoynButton>

      {/* outlined button with a start icon */}
      <JoynButton
        variant='outlined'
        color='primary'
        startIcon={<LighteningIcon />}>
        Actions
      </JoynButton>

      {/* contained button when disabled */}
      <JoynButton
        disabled
        variant='outlined'
        color='primary'
        startIcon={<LighteningIcon />}>
        Actions
      </JoynButton>

      {/* contained button when loading */}
      <JoynButton
        loading
        variant='outlined'
        color='primary'
        startIcon={<LighteningIcon />}>
        Actions
      </JoynButton>

      {/* regular text button */}
      <JoynButton color='primary'>
        Cancel
      </JoynButton>
    </div>
  );
};

export default JoynUIAudit
