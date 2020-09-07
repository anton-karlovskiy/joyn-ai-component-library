
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

import JoynButtonBase from 'components/UI/JoynButtonBase';

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
    <JoynButtonBase
      {...rest}
      className={clsx(classes.root, className)} />
  );
};

export default JoynTertiaryButton;
