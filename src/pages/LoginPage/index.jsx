import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { ButtonContainer } from '../../components/Button/styles';
import { getHello, logout } from '../../api/productService'

const LoginPage = () => {
	
	const [login, setLogin] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const history = useNavigate();
	
	useEffect(() => {
		getHello()
			.then(setLogin)
			.catch(console.error);
	}, [login]);
	
	const handleLogout = () => {
		logout();
		console.log("logout method called");
		history('/');
		window.location.reload();
	};

    const handleLogin = async () => {
        try {
            if (!username || !password) {
                setError('Please enter both username and password.');
                return;
            }

            const response = await axios.post('http://localhost:8080/auth/login', { username, password });
			console.log("RESPONSE=", response.data);
			
			const token = response.data;
			localStorage.setItem("token", token);
			console.log("TOKEN SAVED:", token);
			
            history('/');
			window.location.reload();
        } catch (error) {
            console.error('Login failed:', error.response ? error.response.data : error.message);
            setError('Invalid username or password.');
        }
    };
	
	if (login !== '') {
		return (
			<div className="login">
			    <h2>Página de login</h2> <br />
				<h2>Olá, {login}! Seja bem-vindo.</h2> <br />
			    <ButtonContainer onClick={handleLogout}>Logout</ButtonContainer>
			</div>
		);
	}

    return (
        <div className="login">
            <h2>Página de login</h2>
			<input placeholder='Nome do usuário' id='username' value={username} type='text' onChange={(e) => setUsername(e.target.value)} />
            <br />
			<input placeholder='Senha' id='password' type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
			{error && <p>{error}</p>} {/* Render error message if exists */}
			<br />
			<br />
	        <ButtonContainer onClick={handleLogin}>Faça login</ButtonContainer>
            <ButtonContainer><Link to="/signup">Registre-se</Link></ButtonContainer>
        </div>
    );
}

export default LoginPage;