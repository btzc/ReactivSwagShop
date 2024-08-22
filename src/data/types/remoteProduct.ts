interface Price {
  amount: string;
  currencyCode: string;
}

interface ProductImage {
  id: string;
  url: string;
}

interface MediaImage {
  url: string;
  id: string;
  altText?: string | null;
  width: number;
  height: number;
}

interface Media {
  mediaContentType: string;
  image: MediaImage;
}

export interface RemoteProductOption {
  id: string;
  name: string;
  values: string[];
}

interface SelectedOption {
  name: string;
  value: string;
}

export interface RemoteProductVariant {
  id: string;
  title: string;
  quantityAvailable: number;
  availableForSale: boolean;
  currentlyNotInStock: boolean;
  price: Price;
  compareAtPrice?: Price;
  sku: string;
  selectedOptions: SelectedOption[];
  image: ProductImage;
  product: {
    id: string;
    handle: string;
    options: RemoteProductOption[];
  };
}

interface ProductPriceRange {
  maxVariantPrice: Price;
  minVariantPrice: Price;
}

export interface RemoteProduct {
  id: string;
  title: string;
  description: string;
  descriptionHtml: string;
  availableForSale: boolean;
  handle: string;
  productType: string;
  tags: string[];
  vendor: string;
  priceRange: ProductPriceRange;
  compareAtPriceRange: ProductPriceRange;
  images: ProductImage[];
  options: RemoteProductOption[];
  requiresSellingPlan: boolean;
  onlineStoreUrl: string;
  media: Media[];
  variants: RemoteProductVariant[];
  collections: string[];
}
