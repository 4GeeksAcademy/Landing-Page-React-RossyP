import React from "react";

export const Jumbotron = () => {
    return(
    <div className="mx-5 mb-5 p-5 mb-4 bg-light rounded-3" style={{marginTop: "120px"}}>
        <div className="container-fluid py-5 d-flex flex-column align-items-start">
            <h1 className="text-start fw-normal" style={{fontSize: "4rem"}}>A Warm Welcome</h1>
            <p className="col-md-8 fs-4 text-start">Using a series of utilities, you can create this jumbotron, just like the one in previous versions of Bootstrap. Check out the examples below for how you can remix and restyle it to your liking.</p>
            <button className="btn btn-primary btn-lg align-items-start" type="button">Example button</button>
        </div>
    </div>
    )
}