
// ray test touch <
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

import JoynButton from 'components/UI/JoynButton';

const useStyles = makeStyles(theme => ({
  root: {
    color: theme.palette.action.active,
    '&:hover': {
      backgroundColor: theme.palette.secondary.main
    },
    '&:active': {
      backgroundColor: theme.palette.secondary.dark
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
// ray test touch >
