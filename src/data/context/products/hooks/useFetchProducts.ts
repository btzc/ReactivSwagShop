import {RemoteProduct} from '../../../types/remoteProduct';
import testProducts from '../__MOCK__/testProducts.json';
import {mapRemoteProductToDomain} from '../helpers';

export const useFetchProducts = () => {
  const fetchProducts = async () => {
    await new Promise(resolve => setTimeout(resolve, 3000));
    const remoteProducts = testProducts as RemoteProduct[];

    return remoteProducts.map(mapRemoteProductToDomain);
  };

  return {
    fetchProducts,
  };
};
