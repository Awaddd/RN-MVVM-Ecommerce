import React from 'react';
import { View } from 'react-native';
import styled from './Styled';
import { spacing } from '../theme';
import { Sizes } from '../types';
import { getSize } from '../helpers';

const StyledGutter = styled(View, {
  width: 0.1,
  height: 0.1,
});

type Props = Sizes & {
  horizontal?: boolean;
};

const Gutter = ({ horizontal, ...sizes }: Props) => {
  const size = getSize(sizes);
  if (horizontal) {
    return (
      <StyledGutter
        style={{
          marginLeft: size ? spacing[size] : spacing.xs,
        }}
      />
    );
  }
  return (
    <StyledGutter
      style={{
        marginTop: size ? spacing[size] : spacing.xs,
      }}
    />
  );
};

export default Gutter;
