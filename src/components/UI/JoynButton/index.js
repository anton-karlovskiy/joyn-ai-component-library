
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import clsx from 'clsx';

/**
 * TODO:
 * Spacing (padding) is not defined in the design.
 * Button size is not defined in the design.
 */
const useStyles = makeStyles(theme => ({
  root: {
    textTransform: 'none',
  },
  containedButton: {
    boxShadow: 'none',
    '&:hover, &:active': {
      boxShadow: 'none'
    },
    '&:active': {
      boxShadow: 'none'
    }
  },
  outlinedButton: {
    borderColor: theme.palette.primary.main,
    '&:not(:disabled)': {
      backgroundColor: theme.custom.palette.iceBlueMain,
    },
    '&:hover, &:active': {
      backgroundColor: theme.custom.palette.iceBlueDark
    }
  },
  leftMargin: {
    marginLeft: theme.spacing(1)
  }
}));

const JoynButton = ({
  className,
  variant,
  color,
  loading,
  disabled,
  ...rest
}) => {
  const classes = useStyles();

  return (
    <Button
      {...rest}
      className={clsx(
        classes.root,
        {[classes.containedButton]: variant === 'contained'},
        {[classes.outlinedButton]: variant === 'outlined'},
        className
      )}
      color={color}
      variant={variant}
      disabled={loading || disabled}
      endIcon={loading && (
        <CircularProgress
          color={color === 'primary' ? 'secondary' : 'primary'}
          size={16}
          className={classes.leftMargin} />
      )} />
  );
};

export default JoynButton;
