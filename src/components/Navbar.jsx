import React from "react";
import { colors, navTabs } from "../styling";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
   Navbar,
    NavItem,
    NavbarToggler,
    Collapse,
    // NavLink,
    Nav,
} from 'reactstrap';
import {NavLink} from "./NavbarElements"

function NavbarComponent() {
    const [isOpen, setIsOpen] = React.useState(false);
  
    return (
        <div style={{width: '100%', padding: 10, backgroundColor: colors.navyBlue}}>
            <Navbar style={{marginLeft: '0%', marginRight: '5%', backgroundColor: colors.navyBlue}} expand="md">
                <NavbarToggler onClick={() => { setIsOpen(!isOpen) }} style={{backgroundColor: colors.mediumBlue}}/>
                <Collapse isOpen={isOpen} navbar>
                    <Nav style={{justifyContent: 'space-between',display:'flex', width:'100%'}} className="mr-auto" navbar>
                        <NavItem>
                            <NavLink style={navTabs}  to="/home" activestyle="true">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink style={navTabs} to="/ourstory">Our Story</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink style={navTabs} to="/details">Details</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink style={navTabs} to="/weddingparty">Wedding Party</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink style={navTabs} to="/photos">Photos</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink style={navTabs} to="/gifts">Gifts</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink style={navTabs} to="/rsvp">RSVP</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div >
        )
}

export default NavbarComponent;