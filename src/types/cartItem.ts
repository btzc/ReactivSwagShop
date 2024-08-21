import {Money} from './product';

export interface CartItem {
  id: string;
  title: string;
  price: Money;
  imageUrl: string;
  quantity: number;
}
