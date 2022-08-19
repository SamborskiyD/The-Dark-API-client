import React from "react";
import img from "../kofi.png"

const SupportPage = (props) => {

    document.title = props.title;

    return (

        <div className="container support-page">

            <article>
                <div className="secondary-title">
                    <p>Support The Dark API</p>
                </div>
                <p className="text">
                    I created this project to improve my skills in web development, but if 
                    you are using the API for your own project or your coding challenges, 
                    please consider supporting us to help develop this project.
                </p>
                <p className="text">
                    Every contribution, however big or small, is super valuable for my future.
                </p>
                <p className="text">
                    Thanks!
                </p>
                <div className="support-link">
                    <a href="https://ko-fi.com/dsamborskyi" target={"_blank"} rel="noreferrer">
                        <img src={img} alt={"By Me a coffee"}></img>
                    </a>
                </div>
            </article>
        </div>
        

    )
};

export default SupportPage;