
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
    boxShadow: 'none',
    textTransform: 'none',
    '&:hover': {
      boxShadow: 'none'
    },
    '&:active': {
      boxShadow: 'none'
    }
  },
  leftMargin: {
    marginLeft: theme.spacing(1)
  }
}));

const ContainedButton = ({
  className,
  color,
  loading,
  disabled,
  ...rest
}) => {
  const classes = useStyles();

  return (
    <Button
      {...rest}
      className={clsx(classes.root, className)}
      color={color}
      variant='contained'
      disabled={loading || disabled}
      endIcon={loading && (
        <CircularProgress
          color={color === 'primary' ? 'secondary' : 'primary'}
          size={22}
          className={classes.leftMargin} />
      )} />
  );
};

export default ContainedButton;
