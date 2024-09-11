// Types
interface Product {
  id: number;
  name: string;
  category: string;
  subCategory: string;
  price: number;
  stock: number;
  brand: string;
  description: string;
  imageUrl: string;
  rating: number;
  reviews: number;
  specifications: Record<string, any>;
}

interface ProductFilters {
  page?: number;
  limit?: number;
  category?: string;
  subCategory?: string;
  minPrice?: number;
  maxPrice?: number;
  search?: string;
  sort?: keyof Product;
  order?: "asc" | "desc";
}
