
// ray test touch <
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
  root: () => ({
    textTransform: 'none'
  }),
  leftMargin: {
    marginLeft: theme.spacing(1)
  }
}));

const OutlinedButton = ({
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
      variant='outlined'
      disabled={loading || disabled}
      endIcon={loading && (
        <CircularProgress
          color={color === 'primary' ? 'secondary' : 'primary'}
          size={16}
          className={classes.leftMargin} />
      )} />
  );
};

export default OutlinedButton;
// ray test touch >
