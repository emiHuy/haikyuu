import { useState } from 'react';
import { characters } from '../data/data';
import CharacterCard from '../components/CharacterCard';
import SearchBar from '../components/SearchBar';
import '../css/Characters.css';

function normalizeString(str) {
  const normalized = str
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // Remove standard diacritics

  // Replace macron vowels with normal vowels
  const replacedMacrons = normalized
    .replace(/ā/g, 'a')
    .replace(/ē/g, 'e')
    .replace(/ī/g, 'i')
    .replace(/ō/g, 'o')
    .replace(/ū/g, 'u')
    .replace(/Ā/g, 'A')
    .replace(/Ē/g, 'E')
    .replace(/Ī/g, 'I')
    .replace(/Ō/g, 'O')
    .replace(/Ū/g, 'U');

    return replacedMacrons.toLowerCase();
}

function Characters() {
    const [searchTerm, setSearchTerm] = useState('');

    const chars = characters
        .filter(char => 
            normalizeString(char.name).includes(normalizeString(searchTerm))
        )
        .sort((a, b) => a.name.split(' ')[1].localeCompare(b.name.split(' ')[1]))
    
    return (
        <div className>
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm}></SearchBar>
            <div className='characters'>
                {chars.map((char) => (
                    <CharacterCard key={char.id} character={char} />
                ))}
            </div>
        </div>
    )
}

export default Characters