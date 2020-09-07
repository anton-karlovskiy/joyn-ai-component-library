
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

import JoynButton from 'components/UI/JoynButton';

const useStyles = makeStyles(theme => ({
  root: {
    color: theme.palette.action.active,
    '&:hover': {
      backgroundColor: theme.palette.primary.lighter
    },
    '&:active': {
      backgroundColor: theme.palette.primary.light
    }
  }
}));

const JoynTertiaryButton = ({
  className,
  ...rest
}) => {
  const classes = useStyles();

  return (
    <JoynButton
      {...rest}
      className={clsx(classes.root, className)} />
  );
};

export default JoynTertiaryButton;
