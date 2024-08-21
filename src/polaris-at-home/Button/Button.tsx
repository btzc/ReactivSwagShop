import React, {ReactNode} from 'react';
import {StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native';

interface ButtonProps {
  children: ReactNode;
  onPress: () => void;
}

export const Button: React.FC<ButtonProps> = ({children, onPress}) => {
  return (
    <TouchableOpacity style={styles.cartButton} onPress={onPress}>
      {children}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cartButton: {
    backgroundColor: '#0cec93',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    width: '100%',
  },
});
