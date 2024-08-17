import testProducts from './testProducts.json';

import type {RemoteProduct} from '../types/remoteProduct';
import {Product} from '../../types/product';

const mapRemoteProductToDomain = (remoteProduct: RemoteProduct): Product => {
  return {
    id: remoteProduct.id,
    title: remoteProduct.title,
    description: remoteProduct.description,
    availableForSale: remoteProduct.availableForSale,
    imageUrl: remoteProduct.images[0].url,
    price: remoteProduct.variants[0].price,
  };
};

const remoteProducts = testProducts as RemoteProduct[];
export const products = remoteProducts.map(mapRemoteProductToDomain);
