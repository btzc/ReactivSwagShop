import React, {useEffect, useState} from 'react';
import {Text, Image, StyleSheet, ScrollView, View} from 'react-native';
import {RouteProp, useRoute} from '@react-navigation/native';
import {Product, ProductOption, ProductVariant} from '../../types/product';
import {CollectionNativeStackParamList} from '../../navigation/stacks/CollectionNavigator';
import {Button} from '../../polaris-at-home/Button/Button';
import {ProductDetailDescription} from './components/ProductDetailDescription/ProductDetailDescription';
import {CartItem} from '../../types/cartItem';
import {useCart} from '../../data/context/cart/hooks/useCart';
import {ProductDetailQuantityStepper} from './components/ProductDetailQuantityStepper/ProductDetailQuantityStepper';
import {useProductDetailQuantityStepper} from './hooks/useProductDetailQuantityStepper';
import {ProductDetailPrice} from './components/ProductDetailPrice/ProductDetailPrice';
import {ProductDetailOptionSelector} from './components/ProductDetailOptionSelector/ProductDetailOptionSelector';
import {ProductDetailOptionSelectorModal} from './components/ProductDetailOptionSelectorModal/ProductDetailOptionSelectorModal';

export interface ProductDetailParams {
  product: Product;
}

export const ProductDetail = () => {
  const {addToCart} = useCart();
  const {quantity, onIncrease, onDecrease} = useProductDetailQuantityStepper();

  const {product} =
    useRoute<RouteProp<CollectionNativeStackParamList, 'ProductDetail'>>()
      .params;

  const {id, imageUrl, title, description, variants, options} = product;
  const firstAvailableVariant = variants.find(
    variant => variant.availableForSale,
  );

  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [currentOption, setCurrentOption] = useState<{
    name: string;
    values: string[];
  } | null>(null);

  const [selectedVariant, setSelectedVariant] = useState<ProductVariant>(
    () => firstAvailableVariant || variants[0],
  );

  const [selectedOptions, setSelectedOptions] = useState(
    () => firstAvailableVariant?.selectedOptions || variants[0].selectedOptions,
  );

  useEffect(() => {
    const newVariant = variants.find(
      variant =>
        JSON.stringify(variant.selectedOptions) ===
        JSON.stringify(selectedOptions),
    );

    setSelectedVariant(newVariant!);
  }, [selectedOptions, variants]);

  const openModal = (option: {name: string; values: string[]}) => {
    setCurrentOption(option);
    setModalVisible(true);
  };

  const handleSelect = (value: string) => {
    if (currentOption) {
      setSelectedOptions(prevSelectedOptions =>
        prevSelectedOptions.map(prevSelectedOption =>
          prevSelectedOption.name === currentOption.name
            ? {...prevSelectedOption, value}
            : prevSelectedOption,
        ),
      );
    }
    setModalVisible(false);
  };

  const handleAddToCart = () => {
    const productToAdd = {
      id,
      imageUrl,
      title,
      price: selectedVariant.price,
      quantity,
    } as CartItem;
    addToCart(productToAdd);
  };

  const getSelectedValue = (option: ProductOption) => {
    return selectedOptions.find(
      selectedOption => selectedOption.name === option.name,
    )!.value;
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={{uri: imageUrl}} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <ProductDetailPrice
        availableForSale={selectedVariant.availableForSale}
        price={selectedVariant.price}
      />
      {options.map(option => (
        <ProductDetailOptionSelector
          key={option.id}
          name={option.name}
          selectedValue={getSelectedValue(option)}
          onPress={() => openModal(option)}
        />
      ))}

      {currentOption && (
        <ProductDetailOptionSelectorModal
          visible={modalVisible}
          values={currentOption.values}
          onSelect={handleSelect}
          onClose={() => setModalVisible(false)}
        />
      )}

      <ProductDetailQuantityStepper
        quantity={quantity}
        onIncrease={onIncrease}
        onDecrease={onDecrease}
        availableForSale={selectedVariant.availableForSale}
      />
      <View style={styles.buttonContainer}>
        <Button
          disabled={!selectedVariant.availableForSale}
          onPress={handleAddToCart}
          text="Add to Cart"
        />
      </View>
      <ProductDetailDescription description={description} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  image: {
    width: '100%',
    height: 300,
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  buttonContainer: {
    paddingTop: 16,
    paddingBottom: 24,
    backgroundColor: '#fff',
  },
});
