import { useState, useEffect } from "react";
import CharacterListItem from "./CharacterListItem.jsx";

import styles from "./CharactetList.module.css";

const base_url = "https://swapi.dev/api";

const CharacterList = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const abortController = new AbortController();
    fetch(`${base_url}/people`, {signal:abortController.signal})
      .then((res) => res.json())
      .then((data) => {
        setCharacters(data.results);
      });

      return () => {
        abortController.abort();
      }
  }, []);

  return (
    <div className={styles.CharacterList}>
      {characters.map((character, index) => (
        <CharacterListItem key={character.name} id={index + 1} {...character} />
      ))}
    </div>
  );
};

export default CharacterList;
