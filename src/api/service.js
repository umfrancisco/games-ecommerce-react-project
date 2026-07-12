import { apiService } from "./api";

// GET all products
export const getProducts = () => apiService.get("/api/public/product");

// GET single product
export const getProductById = (id) => apiService.get(`/api/public/product/${id}`);

// GET products by category
export const getProductsByCategory = (category) => apiService.get(`/api/public/product/category/${category}`);

// GET product to banner 
export const getBannerProduct = () => apiService.get("/api/public/product/highlight");

// POST create product
export const createProduct = (product) => apiService.post("/api/admin/product", product);

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
export const updateProduct = (id, product) => apiService.put(`/api/admin/product/${id}`, product);

// DELETE product
export const deleteProduct = (id) => apiService.delete(`/api/admin/product/${id}`);

// GET hello
export const getHello = () => {
  const token = localStorage.getItem("token");

  return apiService.get("/auth/hello", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

// GET logout
export const logout = () => apiService.get("/auth/logout");

