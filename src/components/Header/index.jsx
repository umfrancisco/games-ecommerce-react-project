import { HeaderBar, Links, LinkItem, LinkCart } from './styles'
import logo from '../../assets/images/logo.svg'
import carrinho from '../../assets/images/cart.svg'
import login from '../../assets/images/login.svg'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getHello } from '../../api/service'

const Header = () => {
	
	const [username, setUsername] = useState('');
	
	useEffect(() => {
		getHello()
			.then(setUsername)
			.catch(console.error);
	}, [username]);
	
	return (
		<HeaderBar>
			<div>
				<img src={logo} alt="logo" />
				<nav>
					<Links>
						<LinkItem>
							<Link to="/">Home</Link>
						</LinkItem>
						<LinkItem>
							<Link to="/games">Games</Link>
						</LinkItem>
						<LinkItem>
							<Link to="/hardware">Hardware</Link>
						</LinkItem>
					</Links>
				</nav>
			</div>
			<LinkCart>
				{username === '' ? <p></p> : <p>Olá, {username}</p>}
				<Link to="/login">
					<img src={login} alt="carrinho icone" />
				</Link>
				<Link to="/cart">
					<img src={carrinho} alt="carrinho icone" />
				</Link>
			</LinkCart>
		</HeaderBar>
	);
}

export default Header