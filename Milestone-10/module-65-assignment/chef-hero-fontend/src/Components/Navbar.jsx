import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { Button, NavLink } from 'react-bootstrap';
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import BiUserCircle from '../assets/icons/User';
import ActiveLink from './ActiveLink/ActiveLink';

function MainNav() {
    const { user, logOut } = useContext(AuthContext)
    const handleLogOUt = () => {
        logOut()
            .then(details => { console.log(details) })
            .catch(error => console.log(error))
    }
    return (
        <nav>
            <Navbar className='px-2' bg="light" expand="lg">
                <Link className='text-decoration-none text-danger' to={'/'}><h1 >Chef Hero</h1></Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <div className="ms-auto d-flex align-items-center gap-3 me-3">
                        <ActiveLink to={'/'}>Home</ActiveLink>
                        <ActiveLink to={'/blog'}>Blog</ActiveLink>
                        {!user && <ActiveLink to={'/login'}>Login</ActiveLink>}
                        {!user && <ActiveLink to={'/register'}>Register</ActiveLink>}
                        {user?.photoURL && <img alt='profile' src={user.photoURL} width={40} height={40} className='rounded-circle' title={user?.displayName} />}
                        {/* if user image not here but user is here and it's name */}
                        {(user && !user.photoURL) && <div width={40} height={40} title={user?.displayName}><BiUserCircle /></div>}

                        {user && <Button
                            onClick={handleLogOUt}
                            variant='danger'>Logout</Button>}

                    </div>
                </Navbar.Collapse>

            </Navbar>
        </nav>
    );
}

export default MainNav;