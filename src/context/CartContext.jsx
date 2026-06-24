import { createContext, useContext, useState } from 'react'
import { createCart } from '../api/service'

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  
  const confirmPurchase = async () => {
    if (cart.length === 0) {
      alert("Seu carrinho está vazio!");
      return;
    }

    const total = getTotal();

    const confirmed = window.confirm(
      `Total da compra: R$ ${total.toFixed(2)}\nDeseja finalizar a compra?`
    );

    if (!confirmed) return;
	
	const reducedCart = cart.map((item) => ({
	  id: item.id,
	  name: item.name,
	  price: item.price,
	  quantity: item.quantity,
	}));
	
	// axios put
	try {
	  const response = await createCart(reducedCart);

	  console.log("Resposta da API:", response.data);
	  console.log("Compra realizada:", reducedCart);

	  alert("Compra realizada com sucesso!");
	  setCart([]);
	  window.location.reload();
	} catch (error) {
	  console.error("Erro ao finalizar compra:", error);
	  alert("Erro ao finalizar compra");
	}
  };
  
  const addToCart = (product) => {
    setCart((prev) => {
		
      const exists = prev.find((item) => item.id === product.id);

      if (exists) {
		const message = document.getElementById("message");
		if (message) message.textContent = "Você já adicionou este item";

		return prev;
      }
	  
	  const message = document.getElementById("message");
	  message.textContent = "Item adicionado ao carrinho";
	  
      return [...prev, { ...product, quantity: 1 }];
    });
  };
  
  const addOneToCart = (id) => {
    setCart((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          if (item.quantity >= item.stock) {
			alert(`Limite máximo de '${item.name}' atingido`);
            return item;
          }
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      })
    );
  };

  const removeFromCart = (id) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const getTotal = () => {
    return cart.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, addOneToCart, removeFromCart, getTotal, confirmPurchase }}>
      {children}
    </CartContext.Provider>
  );
};