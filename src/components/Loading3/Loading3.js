import React, { useEffect, useState } from "react";
import './Loading3.css';

export const Loading3 = () => {

    const [activeIndex, setActiveIndex] = useState(null);

    const handleClick = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

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
                // <ul>
                //     {data.map((post) => (
                //         <li key={post.id}>{post.title}</li>
                //     ))}
                // </ul>

                <div className="accordion">
                    {data.map((post, index) => (
                        <div key={index} className="accordion-item">
                            <div
                                className={`${index === activeIndex ? 'active' : ''}` + "accordion-header"}
                                onClick={() => handleClick(index)}
                            >
                                {post.title}
                            </div>
                            {index === activeIndex && (
                                <div className="accordion-body">
                                    {post.body}
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                // <div className="accordion">
                //     <div key={index} className="accordion-item">
                //         <div
                //             className={`${index === activeIndex ? 'active' : ''}` + "accordion-header"}
                //             onClick={() => handleClick(index)}>
                //             Acordeon 1
                //         </div>

                //         <div className="accordion-body">
                //             <ul>
                //                 {data.map((post) => (
                //                     <li key={post.id}>{post.title}</li>
                //                 ))}
                //             </ul>
                //         </div>

                //     </div>
                // </div >
            )}
        </>
    )
};

export default Loading3;