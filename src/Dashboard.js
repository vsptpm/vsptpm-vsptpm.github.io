import React from 'react';
import "./Dashboard.css";
import por1 from"./img/auto/porsche1.jpeg"
import por2 from"./img/auto/porsche2.jpeg"
import por3 from"./img/auto/porsche3.jpeg"
import por4 from"./img/auto/porsche4.jpeg"
import por5 from"./img/auto/porsche5.jpeg"
import por6 from"./img/auto/porsche6.jpeg"


function Dashboard() {
    return (
        <div className="dashboard">
            <img src= {por1} alt="pic"></img>
            <h2 className="text">Porsche 718 Spyder</h2>
            <img src= {por3} alt="pic"></img>
            <h4 className="content">The 718 Spyder is an exclamation mark in a world full of 'what ifs'.<br/> A roadster like no other. Without compromise. <br/> Without regrets. Without rational arguments.</h4>
            <img src= {por4} alt="pic"></img>
            <img src= {por2} alt="pic"></img>
            <img src= {por5} alt="pic"></img>
            <img src= {por6} alt="pic"></img>

        </div>
    )
};

export default Dashboard
