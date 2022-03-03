import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import * as ReactBootStrap from "react-bootstrap";
import "./navbar.css";


function Navbar(){
    return(
      <div>
        <div class="nav">
          <a class="active" href="/">
            <div class="svg-container">
            <svg xmlns="http://www.w3.org/2000/svg" height="70%" viewBox="0 0 24 24" width="70%" fill="#FFFFFF"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 5.69l5 4.5V18h-2v-6H9v6H7v-7.81l5-4.5M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z"/></svg>
            </div>
          </a>
          <h1 class="logo">GrocerBrochure</h1>
          <div class="search-container">
          <svg xmlns="http://www.w3.org/2000/svg" height="50px" viewBox="0 0 24 24" width="50px" fill="#74B88D"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
            <input type="text" class="search-bar" placeholder="Search"></input>
          </div>
          <a href="/About" id="about-tag">
            <div class="svg-container">
              <p>About</p>
            </div>
          </a>
          <a href="/Signup" id="signup-tag">
            <div class="svg-container">
              <p>Sign Up</p>
            </div>
          </a>
          <a href="/Settings">
            <div class="svg-container">
            <svg xmlns="http://www.w3.org/2000/svg" height="70%" viewBox="0 0 24 24" width="70%" fill="#FFFFFF"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M19.43 12.98c.04-.32.07-.64.07-.98 0-.34-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.09-.16-.26-.25-.44-.25-.06 0-.12.01-.17.03l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.06-.02-.12-.03-.18-.03-.17 0-.34.09-.43.25l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98 0 .33.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.09.16.26.25.44.25.06 0 .12-.01.17-.03l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.06.02.12.03.18.03.17 0 .34-.09.43-.25l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zm-1.98-1.71c.04.31.05.52.05.73 0 .21-.02.43-.05.73l-.14 1.13.89.7 1.08.84-.7 1.21-1.27-.51-1.04-.42-.9.68c-.43.32-.84.56-1.25.73l-1.06.43-.16 1.13-.2 1.35h-1.4l-.19-1.35-.16-1.13-1.06-.43c-.43-.18-.83-.41-1.23-.71l-.91-.7-1.06.43-1.27.51-.7-1.21 1.08-.84.89-.7-.14-1.13c-.03-.31-.05-.54-.05-.74s.02-.43.05-.73l.14-1.13-.89-.7-1.08-.84.7-1.21 1.27.51 1.04.42.9-.68c.43-.32.84-.56 1.25-.73l1.06-.43.16-1.13.2-1.35h1.39l.19 1.35.16 1.13 1.06.43c.43.18.83.41 1.23.71l.91.7 1.06-.43 1.27-.51.7 1.21-1.07.85-.89.7.14 1.13zM12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/></svg>
            </div>
          </a>
        </div>
      </div>

//     <div>
//              <ReactBootStrap.Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
//   <ReactBootStrap.Container>
//   <ReactBootStrap.Navbar.Brand href="/">GrocerBrochure</ReactBootStrap.Navbar.Brand>
//   <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
//   <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
//     <ReactBootStrap.Nav className="me-auto">
//       <ReactBootStrap.Nav.Link href="/Login">Log in</ReactBootStrap.Nav.Link>
//       <ReactBootStrap.Nav.Link href="#pricing">Pricing</ReactBootStrap.Nav.Link>
//       <ReactBootStrap.NavDropdown title="Dropdown" id="collasible-nav-dropdown">
//         <ReactBootStrap.NavDropdown.Item href="#action/3.1">Action</ReactBootStrap.NavDropdown.Item>
//         <ReactBootStrap.NavDropdown.Item href="#action/3.2">Another action</ReactBootStrap.NavDropdown.Item>
//         <ReactBootStrap.NavDropdown.Item href="#action/3.3">Something</ReactBootStrap.NavDropdown.Item>
//         <ReactBootStrap.NavDropdown.Divider />
//         <ReactBootStrap.NavDropdown.Item href="#action/3.4">Separated link</ReactBootStrap.NavDropdown.Item>
//       </ReactBootStrap.NavDropdown>
//     </ReactBootStrap.Nav>
//     <ReactBootStrap.Nav>
//       <ReactBootStrap.Nav.Link href="/About">About</ReactBootStrap.Nav.Link>
//       <ReactBootStrap.Nav.Link href="/SignUp"> Sign Up</ReactBootStrap.Nav.Link>
//     </ReactBootStrap.Nav>
//   </ReactBootStrap.Navbar.Collapse>
//   </ReactBootStrap.Container>
// </ReactBootStrap.Navbar>

//     </div>
    );
}
export default Navbar;