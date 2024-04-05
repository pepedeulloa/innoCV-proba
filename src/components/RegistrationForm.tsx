import React,{ useState } from 'react';
import { useTheme } from '../contexts/ThemeProvider.tsx'


const RegistrationForm: React.FC = () => {
  const [inputs, setInputs] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  
  const { theme } = useTheme();

  const validateInputs = () => {
    let valid = true;
		const emailRegex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4})$/;

    if (!inputs.username || inputs.username.length < 3) {
      setErrors((prevErrors) => ({ ...prevErrors, username: 'Username is required' }));
      valid = false;
    }
    if (!emailRegex.test(inputs.email)) {
      setErrors((prevErrors) => ({ ...prevErrors, email: 'Email is invalid' }));
      valid = false;
    }
    // Password must be at least 8 characters
    if (inputs.password.length < 8) {
      setErrors((prevErrors) => ({ ...prevErrors, password: 'Password is too short' }));
      valid = false;
    }
    // Check if passwords match
    if (inputs.password !== inputs.confirmPassword) {
      setErrors((prevErrors) => ({ ...prevErrors, confirmPassword: 'Passwords do not match' }));
      valid = false;
    }
    return valid;
  };


  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (validateInputs()) {
      console.log('Registration successful!', inputs);
      // Registration logic
    }
  };


  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setInputs({
      ...inputs,
      [name]: value
    });
    // Clear the error of the input field when the user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const emptyFields = () => {
    return Object.values(inputs).some(input => input === '');
  };

		const formStyle = {
			display: "flex",
			flexDirection: "column",
			justifyContent: "center",
	};

		const buttonStyle = {
			height: "2rem",
			width: "225px",
			marginBottom: "0.5rem",
			alignSelf: "end",
			backgroundColor:"lightseagreen",
			borderRadius: "3px",
	};

	const inputContainerStyle = {
		display: "flex",
		flexDirection: "column",
		gap: "0.25rem",
		margin: "0.5rem 0"
	}

	const inputStyle = {
		height: "1.75rem",
		width: "100%",
		marginBottom: "0.5rem",
		padding: "0",
		border: "1px solid grey",
		borderRadius: "3px",
		textIndent: "1rem"
};

	const errorStyle= {
		fontSize:"1.05rem", 
		fontWeight:"bold", 
		color:"red"
	}

  return (
	<div style={{margin: "1rem 10rem"}}>
		<h2>Registration Form</h2>
    <p style={{fontSize:"1.15rem"}}>Current theme: {theme}</p>
    <form style={formStyle} onSubmit={handleSubmit}>
      <div style={inputContainerStyle}>
        <label style={{fontSize: "1.15rem"}} htmlFor="username">Username:</label>
        <input
          id="username"
          name="username"
          type="text"
          placeholder="Must have at least 3 characters"
          value={inputs.username}
          onChange={handleChange}
										style={inputStyle}
        />
        {errors.username && <div style={errorStyle} className="error">{errors.username}</div>}
      </div>
      <div style={inputContainerStyle}>
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="example@domain.com"
          value={inputs.email}
          onChange={handleChange}
										style={inputStyle}
        />
        {errors.email && <div style={errorStyle} className="error">{errors.email}</div>}
      </div>
      <div style={inputContainerStyle}>
        <label htmlFor="password">Password:</label>
        <input
          id="password"
          name="password"
          type="password"
          placeholder="Must have at least 8 characters"
          value={inputs.password}
          onChange={handleChange}
										style={inputStyle}
        />
        {errors.password && <div style={errorStyle} className="error">{errors.password}</div>}
      </div>
      <div style={inputContainerStyle}>
        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          placeholder="Confirm your password"
          value={inputs.confirmPassword}
          onChange={handleChange}
										style={inputStyle}
        />
        {errors.confirmPassword && <div style={errorStyle} className="error">{errors.confirmPassword}</div>}
      </div>
      <button style={{...buttonStyle, cursor: emptyFields() ? "not-allowed": "pointer" }} disabled={emptyFields()} type="submit">Register</button>
    </form>
	</div>
  );
};


export default RegistrationForm;