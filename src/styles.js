import { createGlobalStyle } from 'styled-components';

export const cores = {
	branca: '#EEE',
	preta: '#111',
	cinza: '#333',
	cinzaClaro: '#A3A3A3',
	verde: '#10AC84'
};

export const GlobalCss = createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		list-style: none;
	}
	
	body {
		background-color: ${cores.preta};
		color: ${cores.branca};
		padding-top: 40px;
	}
	
	.container {
		max-width: 1024px;
		width: 100%;
		margin: 0 auto;
	}
	
	.cart {
		max-width: 1024px;
		width: 100%;
		margin: 16px auto;
		padding-top: 32px;
		
		h2, div, p {
			margin: 16px 0;
		}
		
		a {
			text-decoration: none;
			color: ${cores.branca};
		}
	}
	
	.login {
		max-width: 1024px;
		width: 100%;
		margin: 16px auto;
		padding-top: 32px;

		h2, p {
			margin: 8px 0;
		}
		
		a {
			text-decoration: none;
			color: ${cores.branca};
		}
	}
`;

