import React from 'react';
import {TouchableOpacity, Text, StyleProp, TextStyle} from 'react-native';

interface ClickableTextProps {
  onPress: () => void;
  text: string;
  style?: StyleProp<TextStyle>;
}

export const ClickableText = ({onPress, text, style}: ClickableTextProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={style}>{text}</Text>
    </TouchableOpacity>
  );
};
