import React from 'react'

import { useTheme } from '../contexts/ThemeProvider.tsx'

const Header = () => {

	const {theme, toggleTheme} = useTheme();

	const headerStyle = {
		heigth:"4rem",
		display:"flex",
		justifyContent:"space-between",
		padding: "0rem",
		margin: "0 10rem",
		fontWeight:"bold",
	}

	const buttonStyle = {
		alignSelf: "center",
		fontSize:"1.5rem",
		backgroundColor:"lightseagreen",
		borderRadius: "100%",
};

		return (
			<header style={headerStyle}>
				<div>
					<h1>
						Prueba técnica INNOCV
					</h1>
				</div>
				<button style={buttonStyle} onClick={toggleTheme}>
						{theme==='light' ? '🌞' : '🌜'}
				</button>
			</header>
		)
}

export default Header