import type {
  RemoteProduct,
  RemoteProductOption,
  RemoteProductVariant,
} from '../../../types/remoteProduct';
import {
  Product,
  ProductOption,
  ProductVariant,
} from '../../../../types/product';

export const mapRemoteProductToDomain = (
  remoteProduct: RemoteProduct,
): Product => {
  return {
    id: remoteProduct.id,
    title: remoteProduct.title,
    description: remoteProduct.description,
    availableForSale: remoteProduct.availableForSale,
    imageUrl: remoteProduct.images[0].url,
    options: remoteProduct.options.map(mapRemoteOptionToDomain),
    variants: remoteProduct.variants.map(mapRemoteVariantToDomain),
  };
};

const mapRemoteOptionToDomain = (
  remoteOption: RemoteProductOption,
): ProductOption => ({name: remoteOption.name, values: remoteOption.values});

const mapRemoteVariantToDomain = (
  remoteVariant: RemoteProductVariant,
): ProductVariant => ({
  id: remoteVariant.id,
  title: remoteVariant.title,
  quantityAvailable: remoteVariant.quantityAvailable,
  availableForSale: remoteVariant.availableForSale,
  price: remoteVariant.price,
  selectedOptions: remoteVariant.selectedOptions,
  imageUrl: remoteVariant.image.url,
});
