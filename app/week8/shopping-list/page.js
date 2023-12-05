"use client";

import { useState } from "react";
import { useUserAuth } from "./user-auth.js"; // Assuming the useUserAuth hook is imported from user-auth.js
import ItemList from './item-list.js';
import dataset from './item.json';
import NewItem from "./new-item.js";
import MealIdeas from "./meal-ideas.js";


export default function Page(){

    const [items, setItems] = useState(dataset);
    const [selectedItemName, setSelectedItemName] = useState('');
    const user = useUserAuth(); // Assuming useUserAuth returns the user object or null

    const handleAddItem = (newItem) => {
        const updatedItems = [...items, newItem];
        setItems(updatedItems);
    };

    const handleItemSelect = (itemName) => {
        const cleanedItemName = itemName.trim();
        setSelectedItemName(cleanedItemName);
    };

    if (!user) {
        // User is not logged in, you can redirect to the landing page or show a message
        return (
            <main className="bg-gray-100 min-h-screen p-4">
                <h1 className="text-black text-3xl font-bold mb-4">Please log in to view the shopping list</h1>
            </main>
        );
    }

    return (
        <main className="bg-gray-100 min-h-screen p-4">
            <h1 className="text-black text-3xl font-bold mb-4">Shopping List</h1>
            <NewItem onAddItem={handleAddItem} />
            <ItemList items={items} onItemClick={handleItemSelect} />
            {selectedItemName && <MealIdeas ingredient={selectedItemName} />}
        </main>
    );
}
