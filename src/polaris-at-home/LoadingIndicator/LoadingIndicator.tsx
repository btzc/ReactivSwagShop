// src/components/LoadingIndicator.tsx
import React from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';

export const LoadingIndicator = () => {
  return (
    <View testID="loading-indicator" style={styles.container}>
      <ActivityIndicator size="large" color="#0cec93" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
  },
});
