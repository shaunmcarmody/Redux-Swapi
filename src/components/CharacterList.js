import React from "react";

import Character from "./Character";

const CharacterList = props => {
  return (
    <ul>
      {
        props.characters && (
          props.characters.map(character => (
            <Character key={character.name} character={character} />
          ))
        )
      }
    </ul>
  );
};

export default CharacterList;
