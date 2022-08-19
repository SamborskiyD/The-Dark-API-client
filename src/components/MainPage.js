import React, {useState, useEffect} from "react";
import CharacterCard from "./CharacterCard";

const MainPage = (props) => {

    document.title = props.title;

    const [characters, setCharacters] = useState([]);

    useEffect(() => {
    
        const createArray = () => {
            let idArr = [], id;
            while(idArr.length !== 8) 
            {
                id = Math.floor(Math.random() * 74);
                if (!idArr.includes(id))
                {
                    idArr.push(id);
                } 
            }
            setCharacters(idArr)
        };
        createArray();
    }, []);

    return(
        <div className="main-page">

            <div className="banner">
                <div className="banner__title">
                    <p>DARK API</p>
                </div>
                <div className="break-line"></div>
            </div>

            <div className="row cards-wrapper">
                {characters.map((character) => {
                    return (
                        <CharacterCard id={character} />
                    )
                })}
            </div>
        </div>
    )

};

export default MainPage;
