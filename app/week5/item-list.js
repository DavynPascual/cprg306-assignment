"use client";

import React, {useState} from "react";
import Item from "./item";
import items from './item.json';


function ItemList(){
    const [sortBy, setSortBy ] = useState('name');
    const sortItems = (itemsToSort, sortingProperty) => {
        return itemsToSort.slice().sort((a, b) => {

            if (a[sortingProperty] < b[sortingProperty]) return -1; 
      
            if (a[sortingProperty] > b[sortingProperty]) return 1; 
      
            return 0;
      
          });
    };

    const sortedItems = sortItems(items, sortBy);

    return (
        <div>
          <div className="sorting-buttons">
            Sort by:
            <button
              onClick={() => setSortBy('name')}
              style={{ backgroundColor: sortBy === 'name' ? 'blue' : 'grey' , marginRight: '20px',
              marginLeft: '35px',
              padding: '12px 45px',
              borderRadius: '10px'
    
           
            }}
    
            >
               Name
            </button>
            <button
              onClick={() => setSortBy('category')}
              style={{ backgroundColor: sortBy === 'category' ? 'blue' : 'grey' ,
              marginRight: '40px',
              padding: '12px 42px',
              borderRadius: '10px'
            }}
    
            >
               Category
            </button>
          </div>
    
        {sortedItems.map((item, index) => (
            <Item
                key={index}
                name={item.name}    
                quantity={item.quantity}   
                category={item.category}  
            />
    


        ))}
    </div>
    );
}
export default ItemList;
