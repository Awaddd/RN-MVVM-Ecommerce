import React, { FC, ReactNode } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

type Props = {
  children?: ReactNode;
};

const Container: FC<Props> = ({ children }) => {
  return <SafeAreaView style={styles.container}>{children}</SafeAreaView>;
};

export default Container;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
