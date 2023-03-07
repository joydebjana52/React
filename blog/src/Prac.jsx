import React from "react";

class Prac extends React.Component{
	constructor()
	{
		super();
		// {
			this.state = {
				// data:"I am practicing"
				data :1
			}
		// }
	}
	updateData()
	{
		// this.setState({data:"I've learned, Happy Learning..."});
		this.setState({data: this.state.data+1});
		// alert("data updated")
	}

	render()
	{
		return(
			<div className="App">
				<h1>{this.state.data}</h1>
				<button onClick={()=>this.updateData()}>Update</button>
			</div>
		);
	}
}

export default Prac;