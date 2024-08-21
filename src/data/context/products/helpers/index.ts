import type {RemoteProduct} from '../../../types/remoteProduct';
import {Product} from '../../../../types/product';

export const mapRemoteProductToDomain = (
  remoteProduct: RemoteProduct,
): Product => {
  return {
    id: remoteProduct.id,
    title: remoteProduct.title,
    description: remoteProduct.description,
    availableForSale: remoteProduct.availableForSale,
    imageUrl: remoteProduct.images[0].url,
    price: remoteProduct.variants[0].price,
  };
};
