import React, {useEffect, useState}  from "react";
import axios from "axios";



const CodeBlock = (props) => {

    const base_url = "/api";
    const endpoint = props.endpoint;
    const [data, setData] = useState();
    const url = base_url + endpoint;

    useEffect(() => {

        axios.get(url)
        .then(response => {
            if(endpoint.includes("/character"))
            {
                let newData = response.data.slice(0, 2);
                newData.map(elem => {
                    elem.appearance = elem.appearance.slice(0, 5);
                    elem.appearance.push("...")
                })
                setData(newData);
            }
            else if (endpoint.includes("/episode"))
            {
                let newData = response.data.slice(0, 2);
                newData.map(elem => {
                    elem.characters = elem.characters.slice(0, 5);
                    elem.characters.push("...")
                })
                setData(newData);
            }
            else
            {
                setData(response.data);
            }
        })
    }, [endpoint]);


    if (data)
    {

        let strData = JSON.stringify(data, null, 4);

        return (
            <div className="code-block">
                <div>
                    <pre className="query-wrapper">
                        <code>
                            <span className="request">GET</span>
                            <span className="base-url">{base_url}</span>
                            <span className="endpoint">{endpoint}</span>
                        </code>
                    </pre>
                </div>
                <div>
                    <pre className="code-wrapper">
                        <code>
                            {strData}
                        </code>
                    </pre>
                </div>
            </div>
        )
    }
};

export default CodeBlock;