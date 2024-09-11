// Product schema for Swagger
/**
 * @swagger
 * components:
 *   schemas:
 *     Product:
 *       type: object
 *       required:
 *         - name
 *         - category
 *         - subCategory
 *         - price
 *         - stock
 *         - brand
 *         - description
 *       properties:
 *         id:
 *           type: integer
 *           description: The auto-generated id of the product
 *         name:
 *           type: string
 *           description: The name of the product
 *         category:
 *           type: string
 *           description: The category of the product
 *         subCategory:
 *           type: string
 *           description: The subcategory of the product
 *         price:
 *           type: number
 *           description: The price of the product
 *         stock:
 *           type: integer
 *           description: The number of items in stock
 *         brand:
 *           type: string
 *           description: The brand of the product
 *         description:
 *           type: string
 *           description: A description of the product
 *         imageUrl:
 *           type: string
 *           description: URL of the product image
 *         rating:
 *           type: number
 *           description: The average rating of the product
 *         reviews:
 *           type: integer
 *           description: The number of reviews for the product
 *         specifications:
 *           type: object
 *           description: Additional specifications of the product
 *     NewProductPayload:
 *      type: object
 *      required:
 *        - name
 *        - category
 *        - subCategory
 *        - price
 *        - stock
 *        - brand
 *        - description
 *      properties:
 *        name:
 *          type: string
 *          description: The name of the product
 *        category:
 *          type: string
 *          description: The category of the product
 *        subCategory:
 *          type: string
 *          description: The subcategory of the product
 *        price:
 *          type: number
 *          description: The price of the product
 *        stock:
 *          type: integer
 *          description: The number of items in stock
 *        brand:
 *          type: string
 *          description: The brand of the product
 *        description:
 *          type: string
 *          description: A description of the product
 *        imageUrl:
 *          type: string
 *          description: URL of the product image
 *        specifications:
 *          type: object
 *          description: Additional specifications of the product
 */

export interface Product {
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
  specifications: Record<string, string | number | boolean>;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Ultra-Slim Laptop Pro",
    category: "Electronics",
    subCategory: "Computers",
    price: 1299.99,
    stock: 50,
    brand: "TechMaster",
    description:
      "Powerful and lightweight laptop with 16GB RAM, 512GB SSD, and a 4K display.",
    imageUrl: "https://example.com/images/laptop-pro.jpg",
    rating: 4.7,
    reviews: 128,
    specifications: {
      processor: "Intel Core i7",
      screenSize: "15.6 inches",
      weight: "1.8 kg",
      battery: "Up to 12 hours",
    },
  },
  {
    id: 2,
    name: "SmartPhone X",
    category: "Electronics",
    subCategory: "Phones",
    price: 899.99,
    stock: 100,
    brand: "Galactica",
    description:
      "5G-enabled smartphone with a triple-lens camera system and all-day battery life.",
    imageUrl: "https://example.com/images/smartphone-x.jpg",
    rating: 4.5,
    reviews: 256,
    specifications: {
      screenSize: "6.5 inches",
      storage: "256GB",
      camera: "Triple 12MP Ultra Wide",
      waterResistant: "IP68",
    },
  },
  {
    id: 3,
    name: "Noise-Cancelling Headphones",
    category: "Electronics",
    subCategory: "Audio",
    price: 249.99,
    stock: 200,
    brand: "SoundWave",
    description:
      "Over-ear headphones with active noise cancellation and 30-hour battery life.",
    imageUrl: "https://example.com/images/headphones.jpg",
    rating: 4.6,
    reviews: 89,
    specifications: {
      type: "Over-ear",
      wireless: true,
      batteryLife: "30 hours",
      weight: "250g",
    },
  },
  {
    id: 4,
    name: "Pro Runner 3000",
    category: "Sports",
    subCategory: "Footwear",
    price: 129.99,
    stock: 75,
    brand: "SprintMaster",
    description:
      "Lightweight running shoes with responsive cushioning and breathable mesh upper.",
    imageUrl: "https://example.com/images/running-shoes.jpg",
    rating: 4.4,
    reviews: 62,
    specifications: {
      type: "Road running",
      weight: "255g",
      dropHeight: "8mm",
      material: "Synthetic mesh",
    },
  },
  {
    id: 5,
    name: "Smart Coffee Maker",
    category: "Home",
    subCategory: "Kitchen Appliances",
    price: 79.99,
    stock: 30,
    brand: "BrewGenius",
    description:
      "Wi-Fi enabled coffee maker with scheduling and customizable brew strength.",
    imageUrl: "https://example.com/images/coffee-maker.jpg",
    rating: 4.2,
    reviews: 45,
    specifications: {
      capacity: "12 cups",
      programmable: true,
      filterType: "Permanent",
      warranty: "2 years",
    },
  },
];
