import React, { useEffect, useState } from 'react';

const LocalStorage = () => {

    const [name, setName] = useState("");

    console.log(name);

    useEffect(() => {
        localStorage.setItem("uname", name);
    }, [name]);

    return (
        <div>
            <input
                type="text"
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
            />
        </div>
    );
};

export default LocalStorage;