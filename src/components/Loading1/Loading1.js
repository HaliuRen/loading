import React, { useEffect, useState } from "react";
import ReactLoading from "react-loading";
import './Loading1.css';

export const Loading1 = () => {

    const [data, setData] = useState([]);
    const [done, setDone] = useState(undefined);

    useEffect(() => {
        setTimeout(() => {
            fetch("https://jsonplaceholder.typicode.com/posts")
                .then((response) => response.json())
                .then((json) => {
                    console.log(json);
                    setData(json);
                    setDone(true);
                });
        }, 2000);
    }, []);

    return (
        <>
            {!done ? (
                <div className="loading-container">
                    <ReactLoading
                        type={"spin"}
                        color={"#395273"}
                        height={50}
                        width={50}
                    />
                </div>

            ) : (
                <ul>
                    {data.map((post) => (
                        <li key={post.id}>{post.title}</li>
                    ))}
                </ul>
            )}
        </>
    )
};

export default Loading1;
