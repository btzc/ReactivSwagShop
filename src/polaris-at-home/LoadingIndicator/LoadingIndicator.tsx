import React from 'react';
import {View, ActivityIndicator, StyleSheet, Text} from 'react-native';

export const LoadingIndicator = () => {
  return (
    <View testID="loading-indicator" style={styles.container} accessible={true}>
      <ActivityIndicator size="large" color="#0cec93" />
      <Text style={styles.loadingText}>Loading...</Text>
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
  loadingText: {
    marginTop: 10,
    color: '#0cec93',
  },
});
