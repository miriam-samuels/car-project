import React, { useState } from 'react';

function List() {
    const [names, setNames] = useState(["Miram", "Micheal", "Joshua"])

    return (
        <ul>
            {
                names.map((name, index) => (
                    <li key={index}>{name}</li>
                ))
            }
        </ul>
    )
}

export default List