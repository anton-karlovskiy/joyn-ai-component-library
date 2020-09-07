
// ray test touch <
import React from 'react';

import JoynButton from 'components/JoynButton';
import BUTTON_TYPES from 'utils/constants/button-types';

const Template = args => <JoynButton {...args} />;

const PrimaryNormal = Template.bind({});
PrimaryNormal.args = {
  type: BUTTON_TYPES.PRIMARY,
  children: 'Primary',
};

const SecondaryNormal = Template.bind({});
SecondaryNormal.args = {
  type: BUTTON_TYPES.SECONDARY,
  children: 'Secondary',
};

const TertiaryNormal = Template.bind({});
TertiaryNormal.args = {
  type: BUTTON_TYPES.TERTIARY,
  children: 'Tertiary',
};

export default {
  title: 'JoynButton',
  component: JoynButton
};

export {
  PrimaryNormal,
  SecondaryNormal,
  TertiaryNormal
};
// ray test touch >
