import { useState, useEffect } from 'react'
import { Imagem, Titulo, Precos } from './styles'
import Tag from '../Tag'
import bannerImg from '../../assets/images/mfakurian_black.jpg'
import Button from '../Button'
import { getBannerProduct } from '../../api/service'

const Banner = () => {

	const [product, setProduct] = useState(null);
	
	useEffect(() => {
	  getBannerProduct()
	    .then(setProduct)
	    .catch(console.error)
	}, []);
	
	const priceFormat = (price) => {
		if (price === undefined) {
			return "";
		}
		return new Intl.NumberFormat('pt-BR', {
			style: 'currency',
			currency: 'BRL'
		}).format(price);
	}
	
	if (product == null) {
		return (
		  <Imagem style={{ backgroundImage: `url(${bannerImg})` }}>
		    <div className='container'>
		      <p>Carregando produto...</p>
		    </div>
		  </Imagem>
		)
	}
	
	return (
		<Imagem style={{ backgroundImage: `url(${bannerImg})` }}>
			<div className='container'>
				<Tag size='big'>Destaque do dia</Tag>
				<div>
					<img 
						src={product.imageUrl} 
						alt="destaque"/>
					<Titulo>{product.name}</Titulo>
					<Precos>
						Por {priceFormat(product.price)}
					</Precos>
				</div>
				<Button type="link" to={`/product/${product.id}`} title='Clique aqui'>
					Veja a oferta
				</Button>
			</div>
		</Imagem>
	);
}

export default Banner;