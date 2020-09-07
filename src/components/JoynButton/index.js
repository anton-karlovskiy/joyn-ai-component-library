
// ray test touch <
import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

import JoynButtonBase from 'components/UI/JoynButtonBase';
import BUTTON_TYPES from 'utils/constants/button-types';

const useStyles = makeStyles(theme => ({
  primaryButton: {
    color: theme.palette.common.white,
    '&:not(:disabled)': {
      backgroundColor: theme.palette.primary.main
    },
    '&:hover': {
      backgroundColor: theme.palette.primary.dark
    }
  },
  secondaryButton: {
    color: theme.palette.action.active,
    '&:not(:disabled)': {
      backgroundColor: theme.palette.primary.lighter,
      border: `1px solid ${theme.palette.primary.main}`
    },
    '&:hover': {
      backgroundColor: theme.palette.primary.light
    }
  },
  tertiaryButton: {
    color: theme.palette.action.active,
    '&:hover': {
      backgroundColor: theme.palette.primary.lighter
    },
    '&:active': {
      backgroundColor: theme.palette.primary.light
    }
  }
}));

const JoynButton = ({
  type,
  className,
  ...rest
}) => {
  const classes = useStyles();

  return (
    <JoynButtonBase
      {...rest}
      className={clsx(
        classes.root,
        {[classes.primaryButton]: type === BUTTON_TYPES.PRIMARY},
        {[classes.secondaryButton]: type === BUTTON_TYPES.SECONDARY},
        {[classes.tertiaryButton]: type === BUTTON_TYPES.TERTIARY},
        className
      )} />
  );
};

JoynButton.propTypes = {
  // TODO: hardcoded
  type: PropTypes.oneOf(['primary', 'secondary', 'tertiary'])
};

export default JoynButton;
// ray test touch >
