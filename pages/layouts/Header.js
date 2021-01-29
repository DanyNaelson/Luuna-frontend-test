import Link from 'next/link'
import { Navbar, Nav } from 'react-bootstrap';

const styles = {
    navbar: {
        backgroundColor: '#6080bb'
    },
    navbarBrand: {
        color: '#fff',
        cursor: 'pointer'
    }
}

const Header = () => (
    <Navbar style={styles.navbar}>
        <Link href="/">
            <Navbar.Brand style={styles.navbarBrand}>Luuna</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Link href="/usuarios">
                    <Nav.Link href="/usuarios">Usuarios</Nav.Link>
                </Link>
                <Link href="/repositorios">
                    <Nav.Link href="/repositorios">Repositorios</Nav.Link>
                </Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
  );
  
  export default Header;