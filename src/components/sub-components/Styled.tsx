import React, { ComponentType } from 'react';
import { StyleProp } from 'react-native';

type StyleableProp = { style?: StyleProp<unknown> };

export default function styled<P extends StyleableProp>(
  Component: ComponentType<P>,
  style?: P['style'],
) {
  return (props: P) => {
    return <Component {...props} style={[style, props.style]} />;
  };
}
