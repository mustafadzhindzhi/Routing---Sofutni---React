import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const CharacterDetails = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const [character, setCharacters] = useState({});

    useEffect(() => {
        fetch(`http://swapi.dev/api/people/${id}`)
        .then(res => {
            if(!res.ok) {
                throw new Error('Not found')
            };
            return res.json();
        })
        .then(setCharacters)
        .catch((err) => {
            navigate('/characters')
        });
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
