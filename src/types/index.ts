export interface Review {
  id: number;
  username: string;
  comment: string;
  date: string;
  star: number | null;
}

export interface Product {
  id: number;
  img_url: string;
  name: string;
  comment: string;
  price: number;
  reviews: Review[];
}
