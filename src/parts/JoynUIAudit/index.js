
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import ContainedButton from 'components/UI/ContainedButton';
import OutlinedButton from 'components/UI/OutlinedButton';
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
      <ContainedButton color='primary'>
        New
      </ContainedButton>
      <ContainedButton
        color='primary'
        startIcon={<PlusIcon fill='currentColor' />}>
        New
      </ContainedButton>
      {/* ray test touch < */}
      <ContainedButton
        color='primary'
        startIcon={<SaveIcon fill='currentColor' />}>
        Save
      </ContainedButton>
      <ContainedButton
        loading
        color='primary'
        startIcon={<SaveIcon fill='currentColor' />}>
        Save
      </ContainedButton>
      <OutlinedButton color='primary'>
        Actions
      </OutlinedButton>
      <OutlinedButton
        color='primary'
        startIcon={<LighteningIcon fill='currentColor' />}>
        Actions
      </OutlinedButton>
      <OutlinedButton
        loading
        color='primary'
        startIcon={<LighteningIcon fill='currentColor' />}>
        Actions
      </OutlinedButton>
      {/* ray test touch > */}
    </div>
  );
};

export default JoynUIAudit
