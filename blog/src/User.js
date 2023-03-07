// export const User = ()=>{
// 	return(
// 		<h1>User Component</h1>
// 	)
// }

// export default User;


// import React,{Component} from "react";

// const User = ()=>{
// 	return React.createElement('div',null,"Hello User");
// }

// export default User;



import React from "react";

function User(props)
{
	return(
		<div>
			<h1>User Component</h1>
			<button onClick={props.data}>Call data function</button>
		</div>
	);
}

export default User;