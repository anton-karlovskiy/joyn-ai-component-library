
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

import JoynButton from 'components/UI/JoynButton';

// ray test touch <
const useStyles = makeStyles(theme => ({
  root: {
    color: theme.palette.common.white,
    '&:not(:disabled)': {
      backgroundColor: theme.palette.primary.main
    },
    '&:hover': {
      backgroundColor: theme.palette.primary.dark
    }
  }
}));
// ray test touch >

const JoynPrimaryButon = ({
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

export default JoynPrimaryButon;
