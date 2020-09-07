
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import JoynButton from 'components/JoynButton';
import BUTTON_TYPES from 'utils/constants/button-types';
import { ReactComponent as SaveIcon } from 'assets/icons/svgs/save.svg';

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(1),
    '& > *': {
      margin: theme.spacing(.5)
    }
  }
}));

const Template = args => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <JoynButton {...args} />
      <JoynButton
        {...args}
        startIcon={<SaveIcon />} />
      <JoynButton
        {...args}
        disabled
        startIcon={<SaveIcon />} />
      <JoynButton
        {...args}
        loading
        startIcon={<SaveIcon />} />
    </div>
  );
};

const Primary = Template.bind({});
Primary.args = {
  type: BUTTON_TYPES.PRIMARY,
  children: 'Primary'
};

const Secondary = Template.bind({});
Secondary.args = {
  type: BUTTON_TYPES.SECONDARY,
  children: 'Secondary'
};

const Tertiary = Template.bind({});
Tertiary.args = {
  type: BUTTON_TYPES.TERTIARY,
  children: 'Tertiary'
};

export default {
  title: 'JoynButton',
  component: JoynButton
};

export {
  Primary,
  Secondary,
  Tertiary
};
