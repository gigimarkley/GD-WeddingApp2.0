import React from "react";
import logo from '../images/gd-logo.jpg'
import { colors, navTabs } from "../styling";


import 'bootstrap/dist/css/bootstrap.min.css';
import {
   Navbar,
    NavItem,
    NavbarToggler,
    Collapse,
    NavLink,
    Nav,
} from 'reactstrap';

function NavbarComponent() {
    const [isOpen, setIsOpen] = React.useState(false);
  
    return (
        <div style={{
           display: 'block', width: '100%', padding: 30, backgroundColor: colors.dustyBlue
       }}>
            <Navbar style={{ backgroundColor: colors.lightBlue }} expand="md">
                <img src={logo} className="App-logo" alt="logo" width="10%" height="10%" />
                <NavbarToggler onClick={() => { setIsOpen(!isOpen) }} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink style={navTabs} href="/">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink style={navTabs} href="/ourstory">Our Story</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink style={navTabs} href="/details">Details</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink style={navTabs} href="/weddingparty">Wedding Party</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink style={navTabs} href="/photos">Photos</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink style={navTabs} href="/gifts">Gifts</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink style={navTabs} href="/rsvp">RSVP</NavLink>
                        </NavItem>
                        {/* Only display for Daniel and Gillian */}
                        <NavItem>
                            <NavLink style={navTabs} href="/admin">Admin</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div >)
}

export default NavbarComponent;