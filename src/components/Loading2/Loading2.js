import React, { useEffect, useState } from "react";
// import ReactLoading from "react-loading";
import './Loading2.css';

export const Loading2 = () => {

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
                <div className="spinner">
                    <div className="spin"></div>
                    <span>Cargando...</span>
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

export default Loading2;