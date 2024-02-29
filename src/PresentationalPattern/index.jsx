import React, { useEffect, useState } from "react";

const ContainerComp = () => {
    const [cats, setCats] = useState([]);

    useEffect(() => {
        fetch("https://api.thecatapi.com/v1/images/search?limit=10")
            .then((res) => res.json())
            .then((data) => setCats(data));
    }, []);

    return <DogImages cats={cats} />;
};

// Presentational Component
const DogImages = ({ cats }) => {
    return (
        <div className="cats">
            {cats.map((cat, i) => (
                <img
                    src={cat.url}
                    key={i}
                    alt="Cat"
                    width={100}
                    height={100}
                    className="images"
                />
            ))}
        </div>
    );
};

export default ContainerComp;
