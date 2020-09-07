
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

import JoynButton from 'components/UI/JoynButton';

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
    <JoynButton
      {...rest}
      className={clsx(classes.root, className)} />
  );
};

export default JoynSecondaryButton;
