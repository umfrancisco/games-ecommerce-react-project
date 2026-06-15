import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Games from './pages/Games'
import Hardware from './pages/Hardware'
import Product from './pages/Product'
import Cart from './pages/Cart'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'

const Rotas = () => (
	<Routes>
		<Route path='/' element={<Home />} />
		<Route path='/games' element={<Games />} />
		<Route path='/hardware' element={<Hardware />} />
		<Route path='/product/:id' element={<Product />} />
		<Route path='/cart' element={<Cart />} />
		<Route path='/login' element={<LoginPage />} />
		<Route path='/signup' element={<SignupPage />} />
	</Routes>
);

export default Rotas;