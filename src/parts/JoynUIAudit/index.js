
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

// ray test touch <
import JoynPrimaryButon from 'components/JoynPrimaryButon';
import JoynSecondaryButton from 'components/JoynSecondaryButton';
// ray test touch >
import { ReactComponent as SaveIcon } from 'assets/icons/svgs/save.svg';
import { ReactComponent as PublishIcon } from 'assets/icons/svgs/publish.svg';
// import { ReactComponent as PlusIcon } from 'assets/icons/svgs/plus.svg';
// import { ReactComponent as LighteningIcon } from 'assets/icons/svgs/lightening.svg';

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
      {/* ray test touch < */}
      {/* primary button */}
      <JoynPrimaryButon>
        Save
      </JoynPrimaryButon>

      {/* primary button with a start icon */}
      <JoynPrimaryButon startIcon={<SaveIcon />}>
        Save
      </JoynPrimaryButon>

      {/* primary button when disabled */}
      <JoynPrimaryButon
        disabled
        startIcon={<SaveIcon />}>
        Save
      </JoynPrimaryButon>

      {/* primary button when loading */}
      <JoynPrimaryButon
        loading
        startIcon={<SaveIcon />}>
        Save
      </JoynPrimaryButon>

      {/* secondary button */}
      <JoynSecondaryButton>
        Publish
      </JoynSecondaryButton>

      {/* secondary button with a start icon */}
      <JoynSecondaryButton startIcon={<PublishIcon />}>
        Publish
      </JoynSecondaryButton>

      {/* secondary button when disabled */}
      <JoynSecondaryButton
        disabled
        startIcon={<PublishIcon />}>
        Publish
      </JoynSecondaryButton>

      {/* secondary button when loading */}
      <JoynSecondaryButton
        loading
        startIcon={<PublishIcon />}>
        Publish
      </JoynSecondaryButton>
      {/* ray test touch > */}
    </div>
  );
};

export default JoynUIAudit
