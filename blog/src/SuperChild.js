function SuperChild(params)
{
	return (
		<div className="App">
			<h1>This is Super Chile Component</h1>
			<button onClick={params.name}>Get</button>
		</div>
	);
}

export default SuperChild;