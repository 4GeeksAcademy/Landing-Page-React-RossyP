import React from "react";

export const NavBar = () =>{
    return(
<nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 position-fixed w-100" style={{marginTop: "-120px", zIndex: 1000}}>
    <div className="container-fluid">
      <a className="navbar-brand fs-3" href="#">Start Bootstrap</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
      </button>
    </div>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav fs-5">
        <a className="nav-link active " aria-current="page" href="#">Home</a>
        <a className="nav-link " href="#">About</a>
        <a className="nav-link " href="#">Services</a>
        <a className="nav-link" href="#" >Contact</a>
      </div>
    </div>
</nav>
    )
}