import { teams } from '../data/data';
import TeamCard from '../components/TeamCard';
import '../css/Teams.css';

function Teams(){
    teams.sort((a, b) => a.name.localeCompare(b.name))

    return (
        <div className='teams'>
            {teams.map((t) => (
                <TeamCard key={t.id} team={t} />
            ))}
        </div>
    )
}
export default Teams