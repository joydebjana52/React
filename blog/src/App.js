import React,{Component, useState} from "react";
import "./App.css";
import Student from "./Student";
import Profile from "./Profile";
import Login from "./Login";
import User from "./User";
import Member from "./Member";


// function App(){
//   const [name, setName] = useState("Joy");
//   function updateName()
//   {
//     setName("Joydeb Jana");
//   }
//   return (
//     <div className="App">
//       <h1>{name}</h1>
//       <button onClick={updateName}>Change</button>
//     </div>
//   );
// }

// class App extends Component{

//   constructor()
//   {
//     super()
//     this.state = {
//       name : "Joy"
//     }
//   }
//   updateName()
//   {
//     this.setState({name:"Joydeb Jana"})
//   }
//   render()
//   {
//     return(
//       <div className="App">
//         <h1>{this.state.name}</h1>
//         <button onClick={()=>this.updateName()}>Change</button>
//       </div>
//     );
//   }
// }

// function App()
// {
//   const [data, setData] = useState("Hey!");
//   function myFun()
//   {
//     setData("Hare Krishna")
//   }
//   return(
//     <div className="App">
//       {/* <h1>{data}</h1> */}
//       {/* <button onClick={()=>{setData("Hey! Hello!")}}>Update</button> */}
//       {/* <Student name={data} fun={myFun}/> functional Component */}
//       <Student name="Joydeb"/>
//     </div>
//   );
// }

// function App()
// {
//   const [name,setState] =useState("Joydeb")
//   function demo()
//   {
//     alert("demo called");
//   }
//   return(
//     <div className="App">
//       <Student name={name} fun={demo}/>
//       <button onClick={()=>{setState("Name changed")}}>update name</button>
//     </div>
//   );
// }

// class App extends React.Component{
//   render()
//   {
//     return(
//       <div className="App">
//         <Student name="Joydeb" email="joydeb@gmail.com" />
//       </div>
//     );
//   }
// }

// function App()
// {
//   const [data, setData] = useState("Joy");
//   const [print,setPrint] = useState(false);
//   function getData(val)
//   {
//     console.log(val.target.value);
//     setData(val.target.value);
//     setPrint(false);
//   }
//   function showData()
//   {
//     setPrint(true);
//   }
//   return(
//     <div className="App">
//       {
//         print ? <h1>{data}</h1> : <h1>{print}</h1>
//       }
//       <input autoFocus="true" type="text" onChange={getData}/>
//       <button onClick={showData} >Click</button>
//     </div>
//   );
// }

// function App()
// {
//   const [data,setData]=useState(false);
//   function myFunction()
//   {
//     console.log(data);
//     setData(!data);
//   }
//   return(
//     <div className="App">
//       <input type="checkbox" onChange={myFunction} /> <i>Hello! </i>
//       <h2>Checkbox checked : {data ? 'Yeah' : 'Nope' }</h2>
//     </div>
//   );
// }


// Hide show an element or toggling an Element with React.JS
// function App()
// {
// 	const [status,setStatus]=useState(true);
// 	const [data, setData]=useState("Hide");
// 	const [count, setCount]=useState(0);
// 	function demo()
// 	{
// 		setStatus(!status);	
// 		status ? setData("Show") : setData("Hide");
// 	}
// 	return(
// 		<div className="App">
// 			{/* <button onClick={()=>{setStatus(!status)}}>{data}</button> */}
// 			<button onClick={demo} className="btn btn-success" >{data}</button>
// 			{
// 				status ? <Student name="Joydeb" /> : null 
// 			}
// 		</div>
// 	);
// }


// Form Handeling in React.JS
// function App()
// {
// 	const [name, setName]=useState("");
// 	const [tnc, setTnc]=useState(false);
// 	const [interest, setInterest]=useState("");

// 	function getFormData(e)
// 	{
// 		console.log(name, tnc, interest);
// 		e.preventDefault()
// 	}
// 	return(
// 		<div className="App">
// 			<h1>Handel form in React</h1>
// 			<form onSubmit={getFormData}>
// 				<input type="text" placeholder="Enter name" onChange={(e)=>setName(e.target.value)} /> <br/>
// 				<select onChange={(e)=>setInterest(e.target.value)}>
// 					<option>Select option</option>
// 					<option>Marvel</option>
// 					<option>DC</option>
// 					<option>Bollywood</option>
// 					<option>Hollywood</option>
// 				</select> <br/><br/>
// 				<input type="checkbox" onChange={(e)=>setTnc(e.target.checked)} /> <span>I agree with Terms & conditions</span>
// 				<br/><br/>
// 				<button type="submit">submit</button>		
// 			</form>		
// 		</div>
// 	);
// }
/*
function App()
{
	const [name, setName]=useState("");
	const [tnc, setTnc]=useState(false);
	const [interest, setInterest]=useState("");

	function getFormData(e)
	{
		console.log(`name: ${name} Terms: ${tnc} Interest: ${interest}`);
		e.preventDefault()
	}
	function clearFormData()
	{
		setName("");
		setInterest("");
		setTnc(false);
	}
	return(
		<div className="App">
			<h1>Basics Form Handeling in React</h1>
			<form>
				<input type="text" value={name} onChange={(e)=>setName(e.target.value)} /> <br/><br/>
				<select value={interest} onChange={(e)=>setInterest(e.target.value)}>
					<option>Select an option</option>
					<option>Marvel</option>
					<option>Hollywood</option>
					<option>DC comics</option>
					<option>Bollywood</option>
					<option>Tollywood</option>	
				</select> <br/><br/>
				<input type="checkbox" checked={tnc} value={tnc} onChange={(e)=>setTnc(e.target.checked)} /> <label>I agree with terms & conditions</label>
				<br/><br/>
				<button type="submit" onClick={getFormData}>submit</button>
				<br/><br/>
			</form>
			<button onClick={clearFormData}>Clear Form</button>
		</div>
	);
} */

// function App()
// {
// 	function getData()
// 	{
// 		alert("Hello from app")
// 	}
// 	return (
// 		<div className="App">
// 			{/* conditional rendering */}
// 			{/* <Profile/> */}
// 			{/* <Login/> */}
// 			<h1>Pass function as Props</h1>
// 			<User data={getData} />
// 			<div style={{float:"right"}}>
// 				<Member data={getData}/>
// 			</div>
// 		</div>
// 	);
// }

// function App()
// {
// 	return(
// 		<div className="App">

// 		</div>
// 	);
// }

class App extends Component
{
	constructor(props)
	{
		console.log("From Constructor");
		console.log(props.name);
		super()
		this.state = {
			name:"Joy"
		}
	}
	render()
	{
		console.log("From render");
		return(
			<h1>Hello World {this.state.name}</h1>
		);
	}
}


export default App;