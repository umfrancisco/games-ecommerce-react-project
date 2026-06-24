import Banner from '../../components/Banner'
import ProductsList from '../../components/ProductsList'
import { useState, useEffect } from 'react'
import { getProductsByCategory } from '../../api/service'

const Home = () => {
	
	const [products, setProducts] = useState([]);

	useEffect(() => {
	  getProductsByCategory("action")
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

