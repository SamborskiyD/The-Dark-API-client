import React, {useEffect, useState} from "react";
import axios from "axios";

const CharacterCard = (props) => {
 
    const id = props.id;
    const url = process.env.BASE_URL + `api/character/${id}`;
    const [character, setCharacter] = useState();

    useEffect(() => {

        axios.get(url)
        .then(response => {
            setCharacter(response.data[0])
        })
    }, [url]);


    if (character)
    {
        return (
            <div className="col s12 m6 l4 xl3">
                <div className="card">
                    <div className="card__img-wrapper">
                        <img src={character.img} alt={character.name} className="card__img"></img>
                    </div>
                    <div className="card__content-wrapper">
                        <div className="card__section card__section_name">
                            <a href={character.url} target="_blank" className="link">{character.name}</a>
                        </div>
                        <div className="card__section">
                            <span>Born - {character.born}</span>
                        </div>
                        <div className="card__section">
                            <span>Status - {character.status}</span>
                        </div>
                        <div className="card__section">
                            <span>First seen in: 
                                <a href={character.first_appearance.url} target="_blank" className="link">{"\t"+ character.first_appearance.name}</a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

};

export default CharacterCard;