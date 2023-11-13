import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CharacterDetails = () => {
    const {id} = useParams();
    const [character, setCharacters] = useState({});

    useEffect(() => {
        fetch(`http://swapi.dev/api/people/${id}`)
        .then(res => res.json())
        .then(setCharacters)
    }, [id]);

  return (
    <>
      <h1>{character.name}</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique esse
        enim quidem iure consequuntur nesciunt accusamus facilis. Eveniet quis
        unde earum illum inventore voluptatibus nam tenetur dolores, vel ab
        corporis?
      </p>
    </>
  );
};

export default CharacterDetails;
