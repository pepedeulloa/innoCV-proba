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

	const togglerContainerStyles = {
		display: "flex",
		flexDirection: "column",
		gap: "0.5rem",
		alignItems: "center"
	}

		return (
			<header style={headerStyle}>
				<div>
					<h2>
						Prueba técnica
					</h2>
				</div>
				<div style={togglerContainerStyles}>
					<p>Current theme: {theme}</p>
					<button style={{width:"100%"}} onClick={toggleTheme}>
							Toggle
					</button>
				</div>
			</header>
		)
}

export default Header