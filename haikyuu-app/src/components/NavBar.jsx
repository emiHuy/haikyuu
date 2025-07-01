import { NavLink } from 'react-router-dom';
import '../css/NavBar.css';

function NavBar() {

    return (
        <div className='nav-bar'>
            <div className='nav-bar-brand'>
                <NavLink to='/'>
                    <img src='/assets/images/haikyuu-logo.png' alt='haikyuu logo' width='160'/>
                </NavLink>
            </div>
            <div className='nav-bar-links'>
                <NavLink to='/characters' className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
                    <img src='/assets/images/character-icon.png' alt='characters' width='30' height='25'/>
                    Characters
                </NavLink>
                <NavLink to='/teams' className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
                    <img src='/assets/images/team-icon.png' alt='teams' width='32.5' height='28.5'/>
                    Teams
                </NavLink>
            </div>
        </div>
    )
}

export default NavBar 