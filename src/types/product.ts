export interface SelectedOption {
  name: string;
  value: string;
}

export interface ProductVariant {
  id: string;
  title: string;
  quantityAvailable: number;
  availableForSale: boolean;
  price: Money;
  selectedOptions: SelectedOption[];
  imageUrl: string;
}

export interface ProductOption {
  id: string;
  name: string;
  values: string[];
}

export interface Money {
  amount: string;
  currencyCode: string;
}

export interface Product {
  id: string;
  title: string;
  description: string;
  availableForSale: boolean;
  imageUrl: string;
  options: ProductOption[];
  variants: ProductVariant[];
}
