import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ButtonContainer } from '../../components/Button/styles';

const SignupPage = () => {
	
	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [error, setError] = useState(''); // State to manage error messages
	const history = useNavigate(); // Get the history object for redirection
	const role = 'ROLE_CUSTOMER';

	const handleSignup = async () => {
	    try {
	        // Check for empty fields
	        if (!username || !email || !password || !confirmPassword) {
	            setError('Por favor, preencha todos os dados');
	            return;
	        }

	        if (password !== confirmPassword) {
	            throw new Error("Passwords do not match");
	        }

	        const response = await axios.post('https://descending-science-margaret-one.trycloudflare.com/auth/signup', {
	            email,
				username,
	            password,
	            role
	        });
	        // Handle successful signup
	        console.log(response.data);
	        history('/login');
			window.location.reload();
	    } catch (error) {
	        // Handle signup error
	        console.error('Signup failed:', error.response ? error.response.data : error.message);
	        setError(error.response ? error.response.data : error.message);
	    }
	};

    return (
        <div className="login">
			<h2>Página de cadastro</h2>
			{/* Render error message if exists */}
			{error && <p>{error}</p>}
			<input placeholder='Nome de usuário' id='username' value={username} type='text'
			                              onChange={(e) => setUsername(e.target.value)}/>
			<br />
			<input placeholder='Email' id='email' value={email} type='text'
			          onChange={(e) => setEmail(e.target.value)}/>
			<br />
			<input placeholder='Senha' id='password' type='password' value={password}
			          onChange={(e) => setPassword(e.target.value)}/>
			<br />
			<input placeholder='Confirme a senha' id='confirmPassword' type='password'
			          value={confirmPassword}
			          onChange={(e) => setConfirmPassword(e.target.value)}/>
			<br />
			<br />
	        <ButtonContainer onClick={handleSignup}>Registre-se</ButtonContainer>
        </div>
    );
}

export default SignupPage;
