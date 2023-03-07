import Child from "./Child";

function Parent()
{
	function demo()
	{
		alert("From Parent Component");
	}
	return(
		<div>
			<h1>This is Parent Component</h1>
			<Child name={demo}/>
		</div>
	);
}

export default Parent;