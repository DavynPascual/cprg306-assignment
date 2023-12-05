import { useState, useEffect } from "react";
import { useUserAuth } from "./user-auth.js";
import ItemList from './item-list.js';
import NewItem from "./new-item.js";
import MealIdeas from "./meal-ideas.js";
import getItems from "./_services/shopping-list-service.js";
import addItem from "./_services/shopping-list-service.js";

export default function Page(){

    const [items, setItems] = useState([]);
    const [selectedItemName, setSelectedItemName] = useState('');
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            const user = await useUserAuth();
            setUser(user);
        };

        fetchUser();
    }, []);

    useEffect(() => {
        const loadItems = async () => {
            if (user) {
                const userId = user.uid;
                const shoppingListItems = await getItems(userId);
                setItems(shoppingListItems);
            }
        };

        loadItems();
    }, [user]);

    const handleAddItem = async (newItem) => {
        if (user) {
            const userId = user.uid;
            const addedItem = await addItem(userId, newItem);
            const updatedItems = [...items, { ...addedItem, id: addedItem.id }];
            setItems(updatedItems);
        }
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
