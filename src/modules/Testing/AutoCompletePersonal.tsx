import { useState } from 'react';

const Autocomplete = ({ suggestions, onSelect, placeholder }:any) => {
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [userInput, setUserInput] = useState('');

  return (
    <div>
      <input
        type="text"
        placeholder={placeholder}
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      />
      <ul>
        {filteredSuggestions.map((suggestion, index) => (
          <li key={index} onClick={() => onSelect(suggestion)}>
            {suggestion}
          </li>
        ))}
      </ul>
    </div>
  );
};


