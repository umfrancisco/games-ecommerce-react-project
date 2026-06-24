import ProductsList from '../../components/ProductsList'
import { useState, useEffect } from 'react'
import { getProductsByCategory } from '../../api/service'

const Games = () => {
	
	const [action, setAction] = useState([]);
	const [adventure, setAdventure] = useState([]);
	const [fantasy, setFantasy] = useState([]);
	const [fps, setFps] = useState([]);
	
	useEffect(() => {
	  getProductsByCategory("action")
	    .then(setAction)
	    .catch(console.error);
	  getProductsByCategory("adventure")
	    .then(setAdventure)
	    .catch(console.error);
	  getProductsByCategory("fantasy")
	    .then(setFantasy)
	    .catch(console.error);
	  getProductsByCategory("fps")
		 .then(setFps)
		 .catch(console.error);
	}, []);
	
	return (
		<>
			<ProductsList title="Ação" background="gray" products={action} />		
			<ProductsList title="Aventura" background="black" products={adventure}/>
			<ProductsList title="Fantasia" background="gray" products={fantasy}/>		
			<ProductsList title="FPS" background="black" products={fps}/>
		</>
	);
}

export default Games;

