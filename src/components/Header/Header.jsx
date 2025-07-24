import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    // Step 1: State to control the visibility of the drawer
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    // Step 2: Toggle the drawer visibility
    const toggleDrawer = () => {
        setIsDrawerOpen(prevState => !prevState);
    };

    // Step 3: Close the drawer
    const closeDrawer = () => {
        setIsDrawerOpen(false);
    };

    return (
        <>
            {/* <header className='Header1'>
                <div className='college-name'>Vivekanand College</div>
                <nav className="navbar desktop-nav">
                    <Link to="/home" className='nav-item'>Home</Link>
                    <Link to="/about" className='nav-item'>About</Link>
                    <Link to="/cources" className='nav-item'>Courses</Link>
                    <Link to="/contact" className='nav-item'>Contact</Link>
                    <a className='nav-item btn1' href="/admission">Apply Now!</a> */}

                    {/* Hamburger Button */}
                    {/* <button className='Hidebtn-menu' onClick={toggleDrawer}>
                        <span className='Hidebtn-icon'></span>
                        <span className='Hidebtn-icon'></span>
                        <span className='Hidebtn-icon'></span>
                    </button>
                </nav> */}

                {/* Drawer Navigation */}
                {/* <nav className={`drawer-nav ${isDrawerOpen ? 'drawer-nav-open' : ''}`}>
                    <button className='close-drawer-btn' onClick={closeDrawer}>X</button>
                    <Link className='nav-item' to='/home'>Home</Link>
                    <Link className='nav-item' to='/about'>About</Link>
                    <Link className='nav-item' to='/cources'>Cources</Link>
                    <Link className='nav-item' to='/contact'>Contact</Link>
                    <Link className='nav-item-btn1' to='/admission'>Apply Now!</Link>
                </nav> */}

                {/* Overlay to close the drawer when clicked outside */}
                {/* {isDrawerOpen && <div className="drawer-overlay" onClick={closeDrawer}></div>}
            </header> */}

<header className='Header1'>
  <div className='college-name'>Vivekanand College</div>

  {/* Hamburger Button - visible on mobile */}
  <button className='Hidebtn-menu' onClick={toggleDrawer}>
    <span className='Hidebtn-icon'></span>
    <span className='Hidebtn-icon'></span>
    <span className='Hidebtn-icon'></span>
  </button>

  {/* Desktop navigation - hidden on mobile */}
  <nav className="navbar desktop-nav">
    <Link to="/home" className='nav-item'>Home</Link>
    <Link to="/about" className='nav-item'>About</Link>
    <Link to="/cources" className='nav-item'>Courses</Link>
    <Link to="/contact" className='nav-item'>Contact</Link>
    <a className='nav-item btn1' href="/admission">Apply Now!</a>
  </nav>

  {/* Drawer Navigation */}
  <nav className={`drawer-nav ${isDrawerOpen ? 'drawer-nav-open' : ''}`}>
    <button className='close-drawer-btn' onClick={closeDrawer}>X</button>
    <Link className='nav-item' to='/home'>Home</Link>
    <Link className='nav-item' to='/about'>About</Link>
    <Link className='nav-item' to='/cources'>Courses</Link>
    <Link className='nav-item' to='/contact'>Contact</Link>
    <Link className='nav-item-btn1' to='/admission'>Apply Now!</Link>
  </nav>

  {isDrawerOpen && <div className="drawer-overlay" onClick={closeDrawer}></div>}
</header>

        </>
    );
}

export default Header;
