export default interface Sneaker {
  id: string;
  name: string;
  variant: string;
  price: number;
  sizes: {
    size: number;
    outOfStock?: boolean;
  }[];
  description: string;
  rating: number;
}
