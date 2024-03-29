// producto generado con https://quicktype.io/
export interface Product {
  id:          string;
  title:       string;
  price:       string;
  description: string;
  category:    Category;
  images:      string[];
}

export interface Category {
  id:    number;
  categoryName:  string;
  image: string;
}
