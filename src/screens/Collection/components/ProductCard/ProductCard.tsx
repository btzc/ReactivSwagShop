import React from 'react';
import Card from '../../../../polaris-at-home/Card/Card';
import {Text, Image, StyleSheet} from 'react-native';
import {Product} from '../../../../types/product';

interface ProductCardProps {
  product: Product;
  onPress: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onPress,
}: ProductCardProps) => {
  const {imageUrl, title, variants} = product;
  const firstAvailableVariant = variants.find(
    variant => variant.availableForSale,
  );
  if (!firstAvailableVariant) {
    return;
  }
  const {amount, currencyCode} = firstAvailableVariant.price;
  return (
    <Card onPress={() => onPress(product)}>
      <Image source={{uri: imageUrl}} style={styles.image} />
      <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">
        {title}
      </Text>
      <Text style={styles.price}>
        ${Number(amount).toFixed(2)} {currencyCode}
      </Text>
    </Card>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 150,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    padding: 10,
  },
  price: {
    fontSize: 14,
    color: '#888',
    paddingBottom: 10,
    paddingHorizontal: 10,
  },
});
