import Hero from '../../components/Hero'
import Section from '../../components/Section'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getProductById } from '../../api/service'

const Product = () => {
	
	const { id } = useParams();
	
	const [product, setProduct] = useState([]);
	useEffect(() => {
	  getProductById(id)
	    .then(setProduct)
	    .catch(console.error);
	}, [id]);
	
	if (product.category === 'notebook' || product.category === 'peripheral') {
		return (
			<>	
				<Hero product={product}/>
				<Section title={'Saiba mais'} background='black'>
					<p>{product.description}</p>
					<br/>
				</Section>
			</>
		);
	}
	
	return (
		<>	
			<Hero product={product}/>
			<Section title={'Saiba mais'} background='black'>
				<p>{product.longDescription}</p>
				<br/>
				<h4>Disponível para</h4>
				<br/>
				<p>
					{product.platforms?.map(
						(platform) => (<span key={platform}>{platform}<br /></span>)
					)}
				</p>
			</Section>
		</>
	);
}

export default Product;