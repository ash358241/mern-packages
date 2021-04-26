import React from 'react';

const FrontEnd = () => {
    return (
        <div>
      <h1 className="animate__animated animate__fadeIn">All The Essential Front-End Packages You Need To Install: </h1>
      <hr style={{backgroundColor: 'black', width:'95%', marginLeft: '0'}}/>
      <div>
        <div className="createReact shadow p-3 mb-5 bg-body rounded">
          <h3 className="animate__animated animate__shakeX" style={{animationDelay: ".5s"}}>Create React App:</h3>
          <p><span>step-1</span> npx create-react-app my-app</p>
          <p><span>step-2</span> cd my-app</p>
          <p><span>step-3</span> npm start</p>
        </div>

        <div className="reactRouter shadow p-3 mb-5 bg-body rounded">
          <h3 className="animate__animated animate__shakeY" style={{animationDelay: "1.3s"}}>React Router</h3>
          <p><span>step-1</span> npm install react-router-dom</p>
          <p><span>step-2</span> import (2nd bracket) <br/>
          BrowserRouter as Router, <br/>
          Switch, <br/>
          Route, <br/>
          Link, <br/>
         (2nd bracket) from "react-router-dom";</p>
         <h4>Above code will be applied in App.js file</h4>
        </div>

        <div className="reactBootstrap shadow p-3 mb-5 bg-body rounded">
          <h3 className="animate__animated animate__flash" style={{animationDelay: "2.2s"}}>React Bootstrap:</h3>
          <p><span>step-1</span> npm install react-bootstrap bootstrap</p>
          <p><span>step-2</span> Inside index.js --> import 'bootstrap/dist/css/bootstrap.min.css';</p>
        </div>

        <div className="reactFontAwesome shadow p-3 bg-body rounded">
          <h3 className="animate__animated animate__bounceIn" style={{animationDelay: "3s"}}>React FontAwesome:</h3>
          <p>
          npm i --save @fortawesome/fontawesome-svg-core <br/>
          npm install --save @fortawesome/free-solid-svg-icons <br/>
          npm install --save @fortawesome/react-fontawesome
          </p>
          <p>
          npm install --save @fortawesome/free-brands-svg-icons <br/>
          npm install --save @fortawesome/free-regular-svg-icons
          </p>
          <h4>Import these 2 lines to your component where you want to add icons--></h4>
          <p>
          import (second-bracket) FontAwesomeIcon (second-bracket) from '@fortawesome/react-fontawesome' <br/>
          import (second-bracket) faCoffee (second-bracket) from '@fortawesome/free-solid-svg-icons'
          </p>
          <p>FontAwesomeIcon icon = (second-bracket) faCoffee (second-bracket) --> <strong>Add this tag with with your html tag where you want to put icon.</strong> </p>
        </div>
      </div>
    </div>
    );
};

export default FrontEnd;