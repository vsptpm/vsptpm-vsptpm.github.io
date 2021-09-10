import React from 'react'
import "./Nav.css"
import img1 from"./img/auto/porsche1.jpeg"
import img2 from"./img/nature/anchankovil.jpg"
import img3 from"./img/random/jump.jpg"

function Nav() {
    return (
        <div className="nav">
            <div className="auto">
                <h3>Automotive</h3>
                <img src= {img1} alt="pic"></img>
            </div>
            <div className="nature">
                <h3>Nature</h3>
                <img src= {img2} alt="pic"></img>

            </div>
            <div className="random">
                <h3>Random</h3>
                <img src= {img3} alt="pic"></img>
            </div>
                    
        </div>
    )
}

export default Nav
