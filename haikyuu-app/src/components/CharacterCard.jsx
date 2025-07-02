import '../css/CharacterCard.css';

function CharacterCard({character}) {
    let [firstName, lastName] = character.name.split(' ');
    return (
        <div className='character-card'>
            <img src={character.image} alt={character.name} width='250' height='250'/>
            <h3>{firstName}</h3>
            <h2>{lastName}</h2>
            <p>{character.team}</p>
            <div className='hover-layer'>
                {character.type.includes('Coach') && 
                    <div className='hover-text'>
                        <h3>{character.type}</h3>
                    </div>
                }
                {character.type === 'Manager' && 
                    <div className='hover-text'>
                        <h3>{character.type}</h3>
                        <p>Year: {character.year}</p>
                    </div>}   
                {character.type === 'Player' &&
                    <div className='hover-text'>
                        <h3>{character.position}</h3>
                        <h4>No. {character.jerseyNumber}</h4>
                        <div className='bottom-info'>
                            <p>Year: {character.year}</p>
                            <p>Height: {character.height} cm</p>
                        </div>
                    </div>}
            </div>
        </div>
    )
}

export default CharacterCard