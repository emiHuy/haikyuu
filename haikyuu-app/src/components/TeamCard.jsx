import { useNavigate } from 'react-router-dom';
import '../css/TeamCard.css';

function TeamCard({team}) {
    const teamName = team.name.toLowerCase().replace(' ', '-')
    const navigate = useNavigate();
    
    return (
        <div className='team-card' onClick={() => navigate(`/teams/${teamName}`)}>
            <img src={`${import.meta.env.BASE_URL}${team.banner}`} alt={team.name}/>
            <h2>{team.name}</h2>
        </div>
    )
}

export default TeamCard