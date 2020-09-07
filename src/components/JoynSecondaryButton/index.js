
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

import JoynButtonBase from 'components/UI/JoynButtonBase';

const useStyles = makeStyles(theme => ({
  root: {
    color: theme.palette.action.active,
    '&:not(:disabled)': {
      backgroundColor: theme.palette.primary.lighter,
      border: `1px solid ${theme.palette.primary.main}`
    },
    '&:hover': {
      backgroundColor: theme.palette.primary.light
    }
  }
}));

const JoynSecondaryButton = ({
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

export default JoynSecondaryButton;
