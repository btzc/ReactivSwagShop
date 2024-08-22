import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';

interface ButtonProps {
  onPress: () => void;
  text: string;
  disabled?: boolean;
  accessibilityLabel?: string;
}

export const Button: React.FC<ButtonProps> = ({
  onPress,
  text,
  disabled = false,
  accessibilityLabel,
}) => {
  return (
    <TouchableOpacity
      style={[styles.button, disabled && styles.buttonDisabled]}
      onPress={onPress}
      disabled={disabled}
      accessible={true}
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel || text}
      accessibilityState={{disabled}}>
      <Text style={[styles.buttonText, disabled && styles.buttonTextDisabled]}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#0cec93',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    width: '100%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonDisabled: {
    backgroundColor: '#a9a9a9',
  },
  buttonTextDisabled: {
    color: '#d3d3d3',
  },
});
