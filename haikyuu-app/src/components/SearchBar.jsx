import { useRef } from 'react';
import '../css/SearchBar.css';

function SearchBar({ searchTerm, setSearchTerm, placeholder='Search character...'}) {
    const inputRef = useRef(null);
    const handleClick = () => {
        inputRef.current?.focus();
    };

    return (
        <div className='search-bar-container' onClick={handleClick}>
            <div className='search-bar'>
                <img src='/assets/images/search-icon.png' width='25'></img>
                <input
                    ref={inputRef}
                    type='text'
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder={placeholder}
                />
            </div>
        </div>
    )
}

export default SearchBar