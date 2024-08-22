import React, {useState} from 'react';
import {Text, StyleSheet} from 'react-native';

interface ProductDetailDescriptionProps {
  description: string;
}

export const ProductDetailDescription = ({
  description,
}: ProductDetailDescriptionProps) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const toggleDescription = () => setIsExpanded(!isExpanded);

  return (
    <>
      <Text style={styles.title}>Description</Text>
      <Text
        style={styles.description}
        numberOfLines={isExpanded ? undefined : 2}
        ellipsizeMode="tail">
        {description}
      </Text>
      <Text style={styles.toggleButton} onPress={toggleDescription}>
        {isExpanded ? 'Show less' : 'Show more'}
      </Text>
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  description: {
    fontSize: 16,
    marginBottom: 8,
  },
  toggleButton: {
    color: '#1E90FF',
    marginBottom: 16,
  },
});
