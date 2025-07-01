import RosterCard from '../components/RosterCard';
import { characters } from '../data/data';
import '../css/TeamRoster.css'

function TeamRoster({team}) {
    const roster = characters.filter(char => char.team === team.name);

    const players = roster.filter(char => char.type === 'Player');
    const managers = roster.filter(char => char.type === 'Manager');
    const coaches = roster.filter(char => char.type.includes('Coach'))

    return (
        <div className='team-roster'>
            <h1 className='team-name'>{team.name}</h1>
            <h3 className='prefecture'>{team.prefecture} Prefecture</h3>
            <div className='players'>
                <h2 className='category'>Players</h2>
                {players.map((char) => (
                <RosterCard key={char.id} character={char}/>
                ))}
            </div>
            {managers.length > 0 && 
                <div className='managers'>
                    <h2 className='category'>Managers</h2>
                    {managers.map((char) => (
                        <RosterCard key={char.id} character={char}/>
                    ))}
                </div>
            }
            <div className='coaches'>
                <h2 className='category'>Coaches</h2>
                {coaches.map((char) => (
                    <RosterCard key={char.id} character={char}/>
                ))}
            </div>
        </div>
    )
}

export default TeamRoster