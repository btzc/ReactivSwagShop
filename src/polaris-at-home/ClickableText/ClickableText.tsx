import React from 'react';
import {TouchableOpacity, Text, StyleProp, TextStyle} from 'react-native';

interface ClickableTextProps {
  onPress: () => void;
  text: string;
  style?: StyleProp<TextStyle>;
  accessibilityLabel?: string;
}

export const ClickableText = ({
  onPress,
  text,
  style,
  accessibilityLabel,
}: ClickableTextProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      accessible={true}
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel || text} // Fallback to text if no label is provided
    >
      <Text style={style}>{text}</Text>
    </TouchableOpacity>
  );
};
