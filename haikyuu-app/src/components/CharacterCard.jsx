import '../css/CharacterCard.css';

function CharacterCard({character}) {
    let [firstName, lastName] = character.name.split(' ');
    return (
        <div className='character-card'>
            <img src={character.image} alt={character.name} width='250' height='250'/>
            <h3>{firstName}</h3>
            <h2>{lastName}</h2>
            <p>{character.team}</p>
        </div>
    )
}

export default CharacterCard