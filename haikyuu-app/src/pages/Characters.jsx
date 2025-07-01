import { characters } from '../data/data';
import CharacterCard from '../components/CharacterCard';
import NavBar from '../components/NavBar'
import '../css/Characters.css'

function Characters() {
    const chars = characters
    chars.sort((a, b) => a.name.split(' ')[1].localeCompare(b.name.split(' ')[1]))
    
    return (
        <>
            <NavBar></NavBar>
            <div className='characters'>
                {chars.map((char) => (
                    <CharacterCard key={char.id} character={char} />
                ))}
            </div>
        </>
    )
}

export default Characters