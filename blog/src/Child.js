import SuperChild from "./SuperChild";

function Child(params)
{
	return(
		<div className="App">
			<h1>This is Child Component</h1>
			<button onClick={params.name}>Click</button>
			<SuperChild name={params.name} />
		</div>
	)
}

export default Child;