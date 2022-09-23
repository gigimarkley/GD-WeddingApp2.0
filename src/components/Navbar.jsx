import React from "react";
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
        <div style={{width: '100%', padding: 10, backgroundColor: colors.dustyBlue}}>
            <Navbar style={{marginLeft: '5%', marginRight: '5%', backgroundColor: colors.lightBlue, width: '90%'}} expand="md">
                <NavbarToggler onClick={() => { setIsOpen(!isOpen) }} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav style={{justifyContent: 'space-between',display:'flex', width:'100%'}} className="mr-auto" navbar>
                        <NavItem>
                            <NavLink style={navTabs}  href="/">Home</NavLink>
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