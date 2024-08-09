import React from "react";
import { NavBar } from "./navbar";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Jumbotron } from "./main";
import { Cards } from "./card";
import { Footer } from "./footer";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<NavBar/>
			<Jumbotron/>
			<Cards/>
			<Footer/>
			{/* <h1 className="text-center mt-5">Hello Rigo!</h1>
			<p>
				<img src={rigoImage} />
			</p>
			<a href="#" className="btn btn-success">
				If you see this green button... bootstrap is working...
			</a>
			<p>
				Made by{" "}
				<a href="http://www.4geeksacademy.com">4Geeks Academy</a>, with
				love!
			</p> */}
		</div>
	);
};

export default Home;
