import React from "react";
import CodeBlock from "./CodeBlock";

const DocumentationPage = (props) => {

    document.title = props.title;



    return (
        <div className="documentation-page">

            <div className="content-wrapper">

                <aside className="sidebar-wrapper">
                    
                    <div className="sidebar">
                        <ul>
                            <li className="section">
                                <a href="#introduction" className="section__link section__link_main">Introduction</a>
                                <ul>
                                    <li><a href="#rest" className="section__link">REST</a></li>
                                </ul>
                            </li>
                            <li className="section">
                                <a href="#character" className="section__link section__link_main">Character</a>
                                <ul>
                                    <li><a href="#character-schema" className="section__link">Chracter schema</a></li>
                                    <li><a href="#get-all-characters" className="section__link">Get all characters</a></li>
                                    <li><a href="#get-one-character" className="section__link">Get single character</a></li>
                                    <li><a href="#get-multiple-characters" className="section__link">Get multiple characters</a></li>
                                </ul>
                            </li>
                            <li className="section">
                                <a href="#episode" className="section__link section__link_main">Episode</a>
                                <ul>
                                    <li><a href="#episode-schema" className="section__link">Episode schema</a></li>
                                    <li><a href="#get-all-episodes" className="section__link">Get all episodes</a></li>
                                    <li><a href="#get-one-episode" className="section__link">Get single episode</a></li>
                                    <li><a href="#get-multiple-episodes" className="section__link">Get multiple episodes</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </aside>


                <div className="container docs-wrapper main-content">
                    <article>

                        <div className="main-title">
                            <p>DOCUMENTATION</p>
                            <div className="break-line"></div>
                        </div>

                        <p id="introduction" className="secondary-title">Introduction</p>
                        <p className="text">
                            This documentation will show you how to use the Dark API and how to make different queries,
                            so that you can get the most out of it.
                        </p>
                        <p id="rest" className="secondary-title">REST</p>
                        <p className="text">
                            <strong>Base url:</strong><a className="link link_text" href="http://localhost:3000/api" target={"_blank"}>http://localhost:3000/api</a>
                        </p>
                        <p className="text">
                            The base url contains information about all available API's resources. 
                            All requests are 
                            <code className="code_text">GET</code>
                            requests and go over http. All responses will return data in 
                            <code className="code_text">json</code>.
                        </p>
                        <CodeBlock endpoint=""/>


                        <p id="character" className="secondary-title">Character</p>
                        <p className="text">
                            There is a total of <code className="code_text">73</code> characters sorted by id.
                        </p>
                        <p id="character-schema" className="secondary-title">Character schema</p>
                        <table className="text">
                            <thead>
                                <tr className="table-row">
                                    <th>Key</th>
                                    <th>Type</th>
                                    <th>Description</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="table-row">
                                    <td>id</td>
                                    <td>int</td>
                                    <td>The id of the character</td>
                                </tr>
                                <tr className="table-row">
                                    <td>name</td>
                                    <td>string</td>
                                    <td>The name of the character</td>
                                </tr>
                                <tr className="table-row">
                                    <td>born</td>
                                    <td>string</td>
                                    <td>Year or full date of birth of the character</td>
                                </tr>
                                <tr className="table-row">
                                    <td>occupation</td>
                                    <td>array (string)</td>
                                    <td>Сharacter's occupation</td>
                                </tr>
                                <tr className="table-row">
                                    <td>img</td>
                                    <td>string (url)</td>
                                    <td>Link to the character`s image</td>
                                </tr>
                                <tr className="table-row">
                                    <td>status</td>
                                    <td>string</td>
                                    <td>The status of the character ('Alive', 'Deceased', 'Ceased to exist' or 'Unknown')</td>
                                </tr>
                                <tr className="table-row">
                                    <td>aliases</td>
                                    <td>array (string)</td>
                                    <td>The aliases of the character</td>
                                </tr>
                                <tr className="table-row">
                                    <td>appeaance</td>
                                    <td>array (urls)</td>
                                    <td>The list of episods in which this character appeared</td>
                                </tr>
                                <tr className="table-row">
                                    <td>portarayed</td>
                                    <td>object</td>
                                    <td>Actors who played this character</td>
                                </tr>
                                <tr className="table-row">
                                    <td>first_appearance</td>
                                    <td>object</td>
                                    <td>The episode in which the character first appeared</td>
                                </tr>
                                <tr className="table-row">
                                    <td>residence</td>
                                    <td>string</td>
                                    <td>The character's place of residence</td>
                                </tr>
                                <tr className="table-row">
                                    <td>url</td>
                                    <td>string (url)</td>
                                    <td>Link to the character's own URL endpoint</td>
                                </tr>
                            </tbody>
                        </table>
                        <p id="get-all-characters" className="secondary-title">Get all characters</p>
                        <p className="text">
                            Just add <code className="code_text">/character</code> endpoint to base url to get list of all characters
                        </p>
                        <CodeBlock endpoint="/character"/>
                        <p id="get-one-character" className="secondary-title">Get single character</p>
                        <p className="text">
                            To get only one character add the <code className="code_text">id</code> to the endpoint as a parameter <code className="code_text">/character/3</code>
                        </p>
                        <CodeBlock endpoint="/character/3"/>
                        <p id="get-multiple-characters" className="secondary-title">Get multiple characters</p>
                        <p className="text">
                            To get multiple characters add array of <code className="code_text">ids</code> to the endpoint as a parameter <code className="code_text">/character/1,73</code>
                        </p>
                        <CodeBlock endpoint="/character/1,73"/>


                        <p id="episode" className="secondary-title">Episode</p>
                        <p className="text">
                            There is a total of <code className="code_text">26</code> episodes sorted by id.
                        </p>
                        <p id="episode-schema" className="secondary-title">Episode schema</p>
                        <table className="text">
                            <thead>
                                <tr className="table-row">
                                    <th>Key</th>
                                    <th>Type</th>
                                    <th>Description</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="table-row">
                                    <td>id</td>
                                    <td>int</td>
                                    <td>The id of the episode</td>
                                </tr>
                                <tr className="table-row">
                                    <td>name</td>
                                    <td>string</td>
                                    <td>The name of the episode</td>
                                </tr>
                                <tr className="table-row">
                                    <td>air_date</td>
                                    <td>string</td>
                                    <td>The air date of the episod</td>
                                </tr>
                                <tr className="table-row">
                                    <td>episode</td>
                                    <td>string</td>
                                    <td>The code of the episode</td>
                                </tr>
                                <tr className="table-row">
                                    <td>characters</td>
                                    <td>array (urls)</td>
                                    <td>The list of characters which appeared in this episode</td>
                                </tr>
                                <tr className="table-row">
                                    <td>url</td>
                                    <td>string (url)</td>
                                    <td>Link to the episode's own URL endpoint</td>
                                </tr>
                            </tbody>
                        </table>
                        <p id="get-all-episodes" className="secondary-title">Get all episodes</p>
                        <p className="text">
                            Just add <code className="code_text">/episode</code> endpoint to base url to get list of all episodes
                        </p>
                        <CodeBlock endpoint="/episode"/>
                        <p id="get-one-episode" className="secondary-title">Get single episode</p>
                        <p className="text">
                            To get only one episode add the <code className="code_text">id</code> to the endpoint as a parameter <code className="code_text">/episode/3</code>
                        </p>
                        <CodeBlock endpoint="/episode/3"/>
                        <p id="get-multiple-episodes" className="secondary-title">Get multiple episodes</p>
                        <p className="text">
                            To get multiple episodes add array of <code className="code_text">ids</code> to the endpoint as a parameter <code className="code_text">/episode/1,26</code>
                        </p>
                        <CodeBlock endpoint="/episode/1,26"/>

                    </article>
                </div>

            </div>

        </div>
    )
};

export default DocumentationPage;