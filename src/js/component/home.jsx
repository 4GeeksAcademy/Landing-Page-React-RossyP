import React from "react";
import { NavBar } from "./navbar";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Jumbotron } from "./main";
import { Cards } from "./card";
import { Footer } from "./footer";

//create your first component
const Home = () => {

	let arrayTitles = ["Title 1", "Title 2", "Title 3", "Title 4"] 

	return (
		<div className="text-center">
			<NavBar/>
			<Jumbotron/>
			<div className="d-flex row gap-5 ms-1 px-5 py-2 w-100 mx-sm-0 px-sm-0 justify-content-center align-items-center">
				{arrayTitles.map(arr =>
					<Cards title={arr}/>
				)}
			</div>
			<Footer/>
		</div>
	);
};

export default Home;
