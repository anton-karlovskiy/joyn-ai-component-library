
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import JoynPrimaryButon from 'components/JoynPrimaryButon';
import JoynSecondaryButton from 'components/JoynSecondaryButton';
import JoynTertiaryButton from 'components/JoynTertiaryButton';
import { ReactComponent as SaveIcon } from 'assets/icons/svgs/save.svg';
import { ReactComponent as PublishIcon } from 'assets/icons/svgs/publish.svg';
import { ReactComponent as CrossIcon } from 'assets/icons/svgs/cross.svg';
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

      <br />

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

      <br />

      {/* tertiary button */}
      <JoynTertiaryButton>
        Cancel
      </JoynTertiaryButton>

      {/* tertiary button with a start icon */}
      <JoynTertiaryButton startIcon={<CrossIcon />}>
      Cancel
      </JoynTertiaryButton>

      {/* tertiary button when disabled */}
      <JoynTertiaryButton
        disabled
        startIcon={<CrossIcon />}>
        Cancel
      </JoynTertiaryButton>

      {/* tertiary button when loading */}
      <JoynTertiaryButton
        loading
        startIcon={<CrossIcon />}>
        Cancel
      </JoynTertiaryButton>
    </div>
  );
};

export default JoynUIAudit
