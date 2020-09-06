
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

import JoynButton from 'components/UI/JoynButton';

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
