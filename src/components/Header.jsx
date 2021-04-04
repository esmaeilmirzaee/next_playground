import Link from 'next/link'
import Head from 'next/head'
import { useState } from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'

function Header({ signInVisibility, setSignInVisiblity, registerVisibility, setRegisterVisibility }) {
  return (
    <>
      <Head>
        {/* <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" /> */}
      </Head>

      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Navbar.Brand>
          <Link href="/">
            <>
              <img src='https://www.flaticon.com/svg/vstatic/svg/3884/3884466.svg?token=exp=1617359001~hmac=c874397d70928fe92b16bc1d620cef78' width='30' height='30' className="d-inline-block align-top" />
              <span className='ml-2'>Mocka</span>
            </>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Link href="/"><a className="mr-2 mt-1">About Us</a></Link>
          </Nav>
          {!true &&
            <Nav>
              <NavDropdown title={`Welcome`} id="basic-nav-dropdown">
                <NavDropdown.Item onClick={() => console.log('sign out')}>Sign Out</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          }
          {!false &&
            <Nav>
              <Nav.Link onClick={() => setSignInVisiblity(!signInVisibility)}>
                Sign In
              </Nav.Link>
              <Nav.Link onClick={() => setRegisterVisibility(!registerVisibility)}>
                Register
              </Nav.Link>
            </Nav>
          }
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}


export default Header
