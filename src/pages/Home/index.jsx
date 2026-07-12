import Banner from '../../components/Banner'
import ProductsList from '../../components/ProductsList'
import { useState, useEffect } from 'react'
import { getHighlightedProducts } from '../../api/service'

const Home = () => {
	
	const [products, setProducts] = useState([]);

	useEffect(() => {
	  getHighlightedProducts()
	    .then(setProducts)
	    .catch(console.error);
	}, []);
	
	return (
		<>
			<Banner />
			<ProductsList title="Em destaque" background="black" products={products}/>
		</>
	);
}

export default Home;

