import React from "react";

export default function Item({name, quantity, category, onSelect}) {
    return (
        <li className="bg-white text-black border rounded-lg p-2 mb-3 shadow-md" onClick={onSelect}>
            <strong className="text-l">{name}</strong>
            <p className="text-black">Quantity: {quantity}</p>
            <p className="text-black">Category {category}</p>
        </li>
    );
}
