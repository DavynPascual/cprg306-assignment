"use client";

import { useState } from "react";
import ItemList from './item-list.js';
import dataset from './item.json';
import NewItem from "./new-item.js";


export default function Page(){

const [items, setItems] = useState(dataset);

const handleAddItem = (newItem) => {
    const updatedItems = [...items, newItem];

    setItems(updatedItems);
    };


    return (
    <main className="bg-gray-100 min-h-screen p-4">
        <h1 className="text-black text-3xl font-bold mb-4">Shopping List</h1>
        <NewItem onAddItem={handleAddItem} />
        <ItemList items= {items} />
    </main>
    );
}
