/* eslint-disable prettier/prettier */
import React from 'react';
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { getSize } from '../../utils/helpers';
import { colors } from '../../utils/theme';
import { SizeOptions } from '../../utils/types';

MIcon.loadFont();

export interface IconProps {
  size?: SizeOptions;
  xs?: boolean;
  sm?: boolean;
  md?: boolean;
  rl?: boolean;
  lg?: boolean;
  xl?: boolean;
  name: string;
  color?: string;
}

export const IconSizes = {
  xs: 18,
  sm: 21,
  md: 24,
  rl: 27,
  lg: 30,
  xl: 36,
};

const MaterialIcon = ({ name, color, size, ...sizes }: IconProps) => {
  const sizeShorthand = getSize(sizes);
  return (
    <MIcon
      name={name}
      size={
        size
          ? IconSizes[size]
          : sizeShorthand
            ? IconSizes[sizeShorthand]
            : IconSizes.sm
      }
      color={color || colors.black}
    />
  );
};

export default MaterialIcon;
