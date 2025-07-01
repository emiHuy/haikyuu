import { Link } from 'react-router-dom';
import '../css/NavBar.css'

function NavBar() {
    return (
        <div className='nav-bar'>
            <div className="nav-bar-brand">
                <Link to='/'>
                    <img src='/assets/images/haikyuu-logo.png' alt='haikyuu logo' width='160'/>
                </Link>
            </div>
            <div className='nav-bar-links'>
                <Link to="/characters" className="nav-link">
                    <img src='/assets/images/character-icon.png' alt='characters' width='30' height='25'/>
                    Characters
                </Link>
                <Link to="/teams" className="nav-link">
                    <img src='/assets/images/team-icon.png' alt='teams' width='32.5' height='28.5'/>
                    Teams
                </Link>
            </div>
        </div>
    )
}

export default NavBar 