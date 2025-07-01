import '../css/RosterCard.css'

function RosterCard({character}) {
    if (character.type == 'Player') {
        return (
            <div className='roster-card'>
                <img src={character.image}/>             
                <div className='text'>
                    <h2>{character.name}</h2>
                    <h3>{character.position}</h3>
                    <p>Year: {character.year}</p>
                    <p>Height: {character.height + ' cm'}</p>
                </div>
                <h1>{character.jerseyNumber}</h1>
            </div>
        )
    } else if (character.type == 'Manager') {
        return (
            <div className='roster-card'>
                <img src={character.image}/>
                <div className='text'>
                    <h2>{character.name}</h2>
                    <h3>{character.type}</h3>
                    <p>Year: {character.year}</p>
                </div>
            </div>
        )
    } else {
        return (
            <div className='roster-card'>
                <img src={character.image}/>
                <div className='text'>
                    <h2>{character.name}</h2>
                    <h3>{character.type}</h3>
                </div>
            </div>
        )
    }

}
export default RosterCard