export interface Product {
  _id: string;
  name: string;
  description: string;
  image: string; 
  category: { _id: string; name: string };
  isBlocked: boolean;
}