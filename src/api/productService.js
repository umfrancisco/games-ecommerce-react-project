import { apiService } from "./api";

// GET all products
export const getProducts = () => apiService.get("/api/product");

// GET single product
export const getProductById = (id) => apiService.get(`/api/product/${id}`);

// GET products by category
export const getProductsByCategory = (category) => apiService.get(`/api/product/category/${category}`);

// GET product to banner if stock not zero
export const getBannerProduct = () => apiService.get("/api/product/banner");

// POST create product
export const createProduct = (product) => apiService.post("/api/product", product);

// GET all carts
//export const getCarts = () => apiService.get("/cart");
export const getCarts = () => {
	const token = localStorage.getItem("token");

	return apiService.get("/api/cart/customer", {
	  headers: {
	    Authorization: `Bearer ${token}`,
	  },
	});
}

// POST create cart
//export const createCart = (cart) => apiService.post("/api/cart", cart);
export const createCart = (cart) => {
	const token = localStorage.getItem("token");

	return apiService.post("/api/cart", cart, {
	  headers: {
	    Authorization: `Bearer ${token}`,
	  },
	});
}

// PUT update product
export const updateProduct = (id, product) => apiService.put(`/api/product/${id}`, product);

// DELETE product
export const deleteProduct = (id) => apiService.delete(`/api/product/${id}`);

// GET hello
export const getHello = () => {
  const token = localStorage.getItem("token");

  return apiService.get("/hello", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

// GET logout
export const logout = () => apiService.get("/auth/logout");

