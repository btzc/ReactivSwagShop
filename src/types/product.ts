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
  price: Money;
}
