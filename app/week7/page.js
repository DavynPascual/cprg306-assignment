"use client";

import { useState } from "react";
import ItemList from './item-list.js';
import dataset from './item.json';
import NewItem from "./new-item.js";
import MealIdeas from "./meal-ideas.js";


export default function Page(){

    const [items, setItems] = useState(dataset);
    const [selectedItemName, setSelectedItemName] = useState('');

    const handleAddItem = (newItem) => {
        const updatedItems = [...items, newItem];
        setItems(updatedItems);
    };

    const handleItemSelect = (itemName) => {
        const cleanedItemName = itemName.trim();
        setSelectedItemName(cleanedItemName);
    };

    return (
        <main className="bg-gray-100 min-h-screen p-4">
            <h1 className="text-black text-3xl font-bold mb-4">Shopping List</h1>
            <NewItem onAddItem={handleAddItem} />
            <ItemList items={items} onItemClick={handleItemSelect} />
            {selectedItemName && <MealIdeas ingredient={selectedItemName} />}
        </main>
    );
}
