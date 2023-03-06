import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
      <nav className='navbar navbar-expand-lg bg-body-tertiary'>
        <div className='container-fluid'>
          <NavLink
            to={'/'}
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            Navbar
          </NavLink>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarNav'
            aria-controls='navbarNav'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarNav'>
            <ul className='navbar-nav'>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <li className='nav-item'>
                <NavLink
                  to={'/'}
                  className={({ isActive }) => (isActive ? 'active' : '')}
                >
                  Home
                </NavLink>
              </li>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <li className='nav-item'>
                <NavLink
                  to={'/users'}
                  className={({ isActive }) => (isActive ? 'active' : '')}
                >
                  Users
                </NavLink>
              </li>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <li className='nav-item'>
                <NavLink
                  to={'/about'}
                  className={({ isActive }) => (isActive ? 'active' : '')}
                >
                  About Me
                </NavLink>
              </li>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <li className='nav-item'>
                <NavLink
                  to={'/dashboard'}
                  className={({ isActive }) => (isActive ? 'active' : '')}
                >
                  DashBoard
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
