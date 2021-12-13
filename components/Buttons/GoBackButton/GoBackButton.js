import React from 'react';
import { TouchableOpacity } from 'react-native';
import { GoBackSvg } from '../../../assets/icons/SvgIcons';

const GoBackButton = () => {
  return (
    <TouchableOpacity style={{ position: 'absolute', left: 0, marginLeft: 24 }}>
      <GoBackSvg />
    </TouchableOpacity>
  );
};

export default GoBackButton;
