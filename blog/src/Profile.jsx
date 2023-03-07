import React, { useState } from 'react';

function Profile() {
	// const [loggedIn, setLoggedIn] = useState(2);
	const loggedIn=2;
	// const [loggedIn, setLoggedIn] = useState(false);
	// if (loggedIn) {
	// 	return (
	// 		<div className="App">
	// 			<h1>Welcome Joydeb</h1>
	// 		</div>
	// 	);
	// }
	// else {			******* Not recommended at all *******
	// 	return (
	// 		<div className="App">
	// 			<h1>Welcome Guest</h1>
	// 		</div>
	// 	);
	// }

	return (  // ******* Recommeded *******
		<div className="App">
			{/* {loggedIn ? <h1>Welcome Joydeb</h1> : <h1>Welcome Guest</h1> } */}
			{loggedIn == 1 ?
				<h1>Welcome user 1</h1>
				: loggedIn == 2 ?
					<h1>Welcome user 2</h1>
					: <h1>Welcome user 3</h1>}
		</div>
	);

}

export default Profile;