import React from "react";
import {
  Navbar,
  NavbarBrand,
  Collapse,
  NavbarToggler,
  Nav,
  NavLink,
} from "reactstrap";

const Navi = () => {
  return (
    <Navbar className="mb-3 rounded" color="info" expand="md" light>
      <NavbarBrand href="/">QR Yoklama Sistemi</NavbarBrand>
      <NavbarToggler onClick={function noRefCheck() {}} />
      <Collapse navbar>
        <Nav className="me-auto" navbar></Nav>
        <NavLink href="/sign-in">Giriş Yap</NavLink>
      </Collapse>
    </Navbar>
  );
};

export default Navi;
