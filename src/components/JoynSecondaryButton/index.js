
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

import JoynButton from 'components/UI/JoynButton';

const useStyles = makeStyles(theme => ({
  root: {
    border: `1px solid ${theme.palette.primary.main}`
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
      className={clsx(classes.root, className)}
      variant='contained'
      color='secondary' />
  );
};

export default JoynSecondaryButton;
