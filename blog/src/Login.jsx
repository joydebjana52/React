import React,{useState} from 'react';
import "./Login.css"

function Login()
{
	const [userId, setUser]=useState("");
	const [password, setPassword]=useState("");
	const [userErr, setUserErr]=useState(false);
	const [passErr, setPassErr]=useState(false);
	function loginHandel(e)
	{
		if(userId.length < 4 || password.length < 4)
		{
			alert('Type correct values');
		}
		else
		{
			alert("All good")
		}
		e.preventDefault()
	}
	function userHandeler(e)
	{
		let item=e.target.value;
		if(item.length < 4)
		{
			setUserErr(true);
			console.log("Invalid");
		}
		else
		{
			setUserErr(false);
		}
		setUser(item)
		console.log(e.target.value)
	} 
	function passHandeler(e)
	{
		let item=e.target.value;
		if(item.length < 4)
		{
			setPassErr(true);
		}
		else
		{
			setPassErr(false);
		}
		setPassword(item)
	}
	return(
		<div>
			<h1>Login</h1>
			<form onSubmit={loginHandel}>
				<input type="text" placeholder='Enter name' onChange={userHandeler} /> {userErr ? <span style={{color:"red"}} >Invalid User</span> : null }
					<br/><br/>
				<input placeholder='Enter password' type="password" onChange={passHandeler}/> {passErr ? <span style={{color:"red"}} >Invalid Password</span> : null }
					<br/><br/> 
				<button className='btn btn-primary' type="submit">Login</button>
			</form>
		</div>
	);
}

export default Login;