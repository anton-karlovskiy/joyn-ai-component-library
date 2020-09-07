
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import JoynButton from 'components/JoynButton';
import { ReactComponent as SaveIcon } from 'assets/icons/svgs/save.svg';
import { ReactComponent as PublishIcon } from 'assets/icons/svgs/publish.svg';
import { ReactComponent as CrossIcon } from 'assets/icons/svgs/cross.svg';
import BUTTON_TYPES from 'utils/constants/button-types';
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
      <JoynButton type={BUTTON_TYPES.PRIMARY}>
        Save
      </JoynButton>

      {/* primary button with a start icon */}
      <JoynButton
        type={BUTTON_TYPES.PRIMARY}
        startIcon={<SaveIcon />}>
        Save
      </JoynButton>

      {/* primary button when disabled */}
      <JoynButton
        type={BUTTON_TYPES.PRIMARY}
        disabled
        startIcon={<SaveIcon />}>
        Save
      </JoynButton>

      {/* primary button when loading */}
      <JoynButton
        type={BUTTON_TYPES.PRIMARY}
        loading
        startIcon={<SaveIcon />}>
        Save
      </JoynButton>

      <br />

      {/* secondary button */}
      <JoynButton type={BUTTON_TYPES.PRIMARY}>
        Publish
      </JoynButton>

      {/* secondary button with a start icon */}
      <JoynButton
        type={BUTTON_TYPES.PRIMARY}
        startIcon={<PublishIcon />}>
        Publish
      </JoynButton>

      {/* secondary button when disabled */}
      <JoynButton
        type={BUTTON_TYPES.PRIMARY}
        disabled
        startIcon={<PublishIcon />}>
        Publish
      </JoynButton>

      {/* secondary button when loading */}
      <JoynButton
        type={BUTTON_TYPES.PRIMARY}
        loading
        startIcon={<PublishIcon />}>
        Publish
      </JoynButton>

      <br />

      {/* tertiary button */}
      <JoynButton type={BUTTON_TYPES.PRIMARY}>
        Cancel
      </JoynButton>

      {/* tertiary button with a start icon */}
      <JoynButton
        type={BUTTON_TYPES.PRIMARY}
        startIcon={<CrossIcon />}>
        Cancel
      </JoynButton>

      {/* tertiary button when disabled */}
      <JoynButton
        type={BUTTON_TYPES.PRIMARY}
        disabled
        startIcon={<CrossIcon />}>
        Cancel
      </JoynButton>

      {/* tertiary button when loading */}
      <JoynButton
        type={BUTTON_TYPES.PRIMARY}
        loading
        startIcon={<CrossIcon />}>
        Cancel
      </JoynButton>
    </div>
  );
};

export default JoynUIAudit;
