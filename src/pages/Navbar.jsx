import './../App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState } from 'react';

const PNavbar = () => {
    const [search, setSearch] = useState("");
    const handleSubmit = (event) => {
      event.preventDefault();
      window.location.href=`/trans/${search}`;
    }
    return (
      <div className="NavBar">
      <Navbar bg="#282c34" expand="lg">
        <Container fluid>
        <Navbar.Brand className="nav-item" href="/">
              <img
                alt=""
                src="/icong.png"
                width="30"
                height="30"
                className="d-inline-block align-top"
              />{' '}
              RWT Blockchain
            </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link className="nav-item" href="/trans">Transactions</Nav.Link>
            </Nav>
            <form className="form-group">
              <label>
                <input 
                  className="form-control"
                  onSubmit={handleSubmit}
                  type="search"
                  value={search}
                  placeholder="Search"
                  aria-label="Search"
                  onChange={(e) => setSearch(e.target.value)}
                />
              </label>
              <Button type="submit" variant="outline-success" className="searchint" onClick={handleSubmit}>Search</Button>
            </form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      </div>
    );
}

  export default PNavbar;