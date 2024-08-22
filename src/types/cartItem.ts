import {Money} from './product';

export interface CartItem {
  productId: string;
  variantId: string;
  variantTitle: string;
  productTitle: string;
  price: Money;
  imageUrl: string;
  quantity: number;
}
