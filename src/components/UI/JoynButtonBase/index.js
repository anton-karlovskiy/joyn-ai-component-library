
import React from 'react';
import PropTypes from 'prop-types';
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
    '&:disabled': {
      backgroundColor: theme.palette.action.disabledBackground
    }
  },
  loadingSpinner: {
    margin: theme.spacing(0, .5)
  }
}));

const JoynButtonBase = ({
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
        { [classes.containedButton]: variant === 'contained' },
        className
      )}
      color={color}
      variant={variant}
      disabled={loading || disabled}
      endIcon={loading && (
        <CircularProgress
          color={color === 'primary' ? 'secondary' : 'primary'}
          size={16}
          className={classes.loadingSpinner} />
      )} />
  );
};

JoynButtonBase.propTypes = {
  className: PropTypes.string,
  variant: PropTypes.string,
  // TODO: hardcoded
  color: PropTypes.oneOf(['primary', 'secondary']),
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
  children: PropTypes.node
};

export default JoynButtonBase;
