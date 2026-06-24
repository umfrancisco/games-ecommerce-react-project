import { useEffect, useState } from 'react';

export default function ProductInfo({ id }) {
  const [product, setProduct] = useState(null);
  
  const priceFormat = (price) => {
  	return new Intl.NumberFormat('pt-BR', {
  		style: 'currency',
  		currency: 'BRL'
  	}).format(price);
  }

  useEffect(() => {
    async function fetchProduct() {
      const res = await fetch(`http://localhost:8080/api/public/product/${id}`);
      const data = await res.json();
      setProduct(data);
    }

    fetchProduct();
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return <span>{product.name}, {priceFormat(product.price)}</span>;
}