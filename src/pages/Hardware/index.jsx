import ProductsList from '../../components/ProductsList'
import { useState, useEffect } from 'react'
import { getProductsByCategory } from '../../api/service'

const Hardware = () => {
	
	const [notebook, setNotebook] = useState([]);
	const [peripheral, setPeripheral] = useState([]);
	
	useEffect(() => {
	  getProductsByCategory("notebook")
	    .then(setNotebook)
	    .catch(console.error);
	  getProductsByCategory("peripheral")
		 .then(setPeripheral)
		 .catch(console.error);
	}, []);
	
	return (
		<>
			<ProductsList title="Computadores" background="gray" products={notebook} type='hardware' />
			<ProductsList title="Periféricos" background="black" products={peripheral} type='hardware' />
		</>
	);
}

export default Hardware;

