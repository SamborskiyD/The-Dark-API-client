import React from "react";

const AboutPage = (props) => {

    document.title = props.title

    return (
        <div className="container about-page">
            <div className="main-title">
                <p>ABOUT</p>
                <div className="break-line"></div>
            </div>
            
            <article className="main-content">
                <article>
                    <div className="secondary-title">
                        <p>What is this?</p>
                    </div>
                    <div className="text">
                        <p>
                            The Dark API is a clone 
                            of <a className="link link_text" href="https://rickandmortyapi.com/" target="_blank">The Rick and Morty API</a> and 
                            a REST API based on the television 
                            show <a className="link link_text" href="https://www.netflix.com/ua-en/title/80100172" target="_blank">Dark</a> by Netflix. 
                            You will have access to all characters, episods and images.
                            The Dark API is filled with canonical information taken 
                            from <a className="link link_text" href="https://dark-netflix.fandom.com/wiki/Dark_Wiki" target="_blank">Dark Wiki</a>.
                         </p>
                    </div>
                </article>

                <article>
                    <div className="secondary-title">
                        <p>Who are you?</p>
                    </div>
                    <div className="text">
                        <p>
                            I am <a className="link link_text" href="https://github.com/SamborskiyD" target="_blank">Dmitry Samborskyi</a>, 
                            a big fan of this TV show and a novice web developer.
                        </p>
                    </div>
                </article>

                <article>
                    <div className="secondary-title">
                        <p>Why did you build this?</p>
                    </div>
                    <div className="text">
                        <p>
                            Because Dark is my favorite show, and also because I want to improve my knowledge of REST API,
                             Node.js, databases, especially MongoDB, so I decided to create this project.
                        </p>
                    </div>
                </article>

                <article>
                    <div className="secondary-title">
                        <p>Technical stuff?</p>
                    </div>
                    <div className="text">
                        <p>
                            I use <a className="link link_text" href="https://nodejs.org/en/" target="_blank">Node.js </a> 
                             and <a className="link link_text" href="https://www.mongodb.com/" target="_blank">MongoDB </a> 
                             to serve the API. All the data is formatted 
                             in <a className="link link_text" href="https://www.json.org/json-en.html" target="_blank">json</a>. 
                        </p>
                    </div>
                </article>

                <article>
                    <div className="secondary-title">
                        <p>How can I contribute to the project?</p>
                    </div>
                    <div className="text">
                        <p>
                            You can <a className="link link_text" href="/support">support us</a> and you can also contribute 
                            on <a className="link link_text" target={"_blank"} href="https://github.com/SamborskiyD/The-Dark-API">GitHub</a>.
                        </p>
                    </div>
                </article>

                <article>
                    <div className="secondary-title">
                        <p>Copyright?</p>
                    </div>
                    <div className="text">
                        <p>
                        Dark is created by Baran bo Odar and Jantje Friese 
                        for <a className="link link_text" href="https://www.netflix.com/ua-en/">Netflix</a>.
                        The data and images are used without claim of ownership and belong to their respective owners.
                        </p>
                    </div>
                </article>

            </article>
        </div>
    )
};


export default AboutPage;