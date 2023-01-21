import { useNavigate } from "react-router";
import { useUserAuth } from "../context/userAuthContext";
import { useState } from "react";
import React from "react";
import {
  Container,
  Row,
  Col,
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";


 const Home = () =>{


  const { user, logOut } = useUserAuth();
  const navigate = useNavigate();

  
     const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  }

   const [sidebarExpanded, setSidebarExpanded] = useState(false);
   return (
     <div>
       <Navbar bg="light" expand="lg">
         <Container>
           <Navbar.Brand href="#home">Welcome {user.email}</Navbar.Brand>
           <Navbar.Toggle
             onClick={() =>  setSidebarExpanded(!sidebarExpanded) }
             aria-controls="basic-navbar-nav"
           />
           <Navbar.Collapse
             id="basic-navbar-nav"
             className={sidebarExpanded ? "show" : ""}
           >
             <Nav className="ml-auto">
               <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                 <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                 <NavDropdown.Item href="#action/3.2">
                   Another action
                 </NavDropdown.Item>
                 <NavDropdown.Item href="#action/3.3">
                   Something
                 </NavDropdown.Item>
                 <NavDropdown.Divider />
                 <NavDropdown.Item href="#action/3.4">
                   Separated link
                 </NavDropdown.Item>
               </NavDropdown>
               <Nav.Link href="#deets">More deets</Nav.Link>
               <Nav.Link eventKey={2} href="#memes">
                 Dank memes
               </Nav.Link>
             </Nav>
             <Form inline>
               <FormControl
                 type="text"
                 placeholder="Search"
                 className="mr-sm-2"
               />
               <Button variant="outline-success">Search</Button>
             </Form>
             <Nav>
               <Button variant="outline-danger" className="ml-auto" onClick={handleLogout}>
                 Logout
               </Button>
             </Nav>
           </Navbar.Collapse>
         </Container>
       </Navbar>
       <Container fluid>
         <Row>
           <Col md={2} className={`sidebar ${sidebarExpanded ? "show" : ""}`}>
             <Nav defaultActiveKey="/home" className="flex-column">
               <Nav.Link href="/home">Home</Nav.Link>
               <Nav.Link href="/link">Link</Nav.Link>
               <Nav.Link href="/another-link">Another Link</Nav.Link>
             </Nav>
           </Col>
           <Col md={10}>{/* Main content goes here */}</Col>
         </Row>
       </Container>
     </div>
   );
 }
 
export default Home;



