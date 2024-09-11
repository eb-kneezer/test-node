const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");
const swaggerJsdoc = require("swagger-jsdoc");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors());

// Swagger definition
const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Product API",
      version: "1.0.0",
      description: "A simple Express API for managing product data",
    },
    servers: [
      {
        url: `http://localhost:${PORT}`,
        description: "Development server",
      },
    ],
  },
  apis: ["./index.js"], // Path to the API docs
};

const swaggerDocs = swaggerJsdoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

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
 *         - stock
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

// Enhanced initial product data
let products = [
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

// Helper function to check if a product is one of the default 5
const isDefaultProduct = (id) => id <= 5;

/**
 * @swagger
 * /api/products:
 *   get:
 *     summary: Retrieve a list of products
 *     description: Retrieve a list of products with optional filtering, pagination, and sorting.
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *         description: Page number
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *         description: Number of items per page
 *       - in: query
 *         name: category
 *         schema:
 *           type: string
 *         description: Filter by category
 *       - in: query
 *         name: subCategory
 *         schema:
 *           type: string
 *         description: Filter by subcategory
 *       - in: query
 *         name: minPrice
 *         schema:
 *           type: number
 *         description: Minimum price filter
 *       - in: query
 *         name: maxPrice
 *         schema:
 *           type: number
 *         description: Maximum price filter
 *       - in: query
 *         name: search
 *         schema:
 *           type: string
 *         description: Search term for product name, description, or brand
 *       - in: query
 *         name: sort
 *         schema:
 *           type: string
 *         description: Field to sort by
 *       - in: query
 *         name: order
 *         schema:
 *           type: string
 *           enum: [asc, desc]
 *         description: Sort order (ascending or descending)
 *     responses:
 *       200:
 *         description: A list of products
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 totalProducts:
 *                   type: integer
 *                 totalPages:
 *                   type: integer
 *                 currentPage:
 *                   type: integer
 *                 products:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Product'
 */
app.get("/api/products", (req, res) => {
  const {
    page = 1,
    limit = 10,
    category,
    subCategory,
    minPrice,
    maxPrice,
    search,
    sort = "id",
    order = "asc",
  } = req.query;

  let filteredProducts = [...products];

  if (category) {
    filteredProducts = filteredProducts.filter(
      (p) => p.category.toLowerCase() === category.toLowerCase()
    );
  }

  if (subCategory) {
    filteredProducts = filteredProducts.filter(
      (p) => p.subCategory.toLowerCase() === subCategory.toLowerCase()
    );
  }

  if (minPrice) {
    filteredProducts = filteredProducts.filter(
      (p) => p.price >= parseFloat(minPrice)
    );
  }

  if (maxPrice) {
    filteredProducts = filteredProducts.filter(
      (p) => p.price <= parseFloat(maxPrice)
    );
  }

  if (search) {
    const searchLower = search.toLowerCase();
    filteredProducts = filteredProducts.filter(
      (p) =>
        p.name.toLowerCase().includes(searchLower) ||
        p.description.toLowerCase().includes(searchLower) ||
        p.brand.toLowerCase().includes(searchLower)
    );
  }

  // Sorting
  filteredProducts.sort((a, b) => {
    if (a[sort] < b[sort]) return order === "asc" ? -1 : 1;
    if (a[sort] > b[sort]) return order === "asc" ? 1 : -1;
    return 0;
  });

  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;
  const paginatedProducts = filteredProducts.slice(startIndex, endIndex);

  res.json({
    totalProducts: filteredProducts.length,
    totalPages: Math.ceil(filteredProducts.length / limit),
    currentPage: parseInt(page),
    products: paginatedProducts,
  });
});

/**
 * @swagger
 * /api/products/{id}:
 *   get:
 *     summary: Get a product by id
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The product id
 *     responses:
 *       200:
 *         description: The product data
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *       404:
 *         description: Product not found
 */
app.get("/api/products/:id", (req, res) => {
  const product = products.find((p) => p.id === parseInt(req.params.id));
  if (!product) return res.status(404).json({ message: "Product not found" });
  res.json(product);
});

/**
 * @swagger
 * /api/products:
 *   post:
 *     summary: Create a new product
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/NewProductPayload'
 *     responses:
 *       201:
 *         description: The created product
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *       400:
 *         description: Maximum product limit reached
 */
app.post("/api/products", (req, res) => {
  if (products.length >= 50) {
    return res.status(400).json({ message: "Maximum product limit reached" });
  }

  const newProduct = {
    id: products.length + 1,
    ...req.body,
    rating: 0,
    reviews: 0,
  };

  products.push(newProduct);
  res.status(201).json(newProduct);
});

/**
 * @swagger
 * /api/products/{id}:
 *   put:
 *     summary: Update a product
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The product id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Product'
 *     responses:
 *       200:
 *         description: The updated product
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *       403:
 *         description: Cannot update default products
 *       404:
 *         description: Product not found
 */
app.put("/api/products/:id", (req, res) => {
  const id = parseInt(req.params.id);
  if (isDefaultProduct(id)) {
    return res.status(403).json({ message: "Cannot update default products" });
  }

  const index = products.findIndex((p) => p.id === id);
  if (index === -1)
    return res.status(404).json({ message: "Product not found" });

  products[index] = { ...products[index], ...req.body, id };
  res.json(products[index]);
});

/**
 * @swagger
 * /api/products/{id}:
 *   delete:
 *     summary: Delete a product
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The product id
 *     responses:
 *       204:
 *         description: Product deleted
 *       403:
 *         description: Cannot delete default products
 *       404:
 *         description: Product not found
 */
app.delete("/api/products/:id", (req, res) => {
  const id = parseInt(req.params.id);
  if (isDefaultProduct(id)) {
    return res.status(403).json({ message: "Cannot delete default products" });
  }

  const index = products.findIndex((p) => p.id === id);
  if (index === -1)
    return res.status(404).json({ message: "Product not found" });

  products.splice(index, 1);
  res.status(204).send();
});

/**
 * @swagger
 * /api/categories:
 *   get:
 *     summary: Get all product categories and subcategories
 *     responses:
 *       200:
 *         description: A list of categories and subcategories
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               additionalProperties:
 *                 type: array
 *                 items:
 *                   type: string
 */
app.get("/api/categories", (req, res) => {
  const categories = {};
  products.forEach((p) => {
    if (!categories[p.category]) {
      categories[p.category] = new Set();
    }
    categories[p.category].add(p.subCategory);
  });

  // Convert Sets to arrays
  for (let category in categories) {
    categories[category] = Array.from(categories[category]);
  }

  res.json(categories);
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Something went wrong!" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(
    `Swagger documentation is available at http://localhost:${PORT}/api-docs`
  );
});
