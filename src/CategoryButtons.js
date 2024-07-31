
import React from 'react';
import './CategoryButtons.css'; 

const CategoryButtons = ({ categories, onSelectCategory }) => {
  return (
    <div className="category-buttons">
      {categories.map((category) => (
        <button key={category} onClick={() => onSelectCategory(category)}>
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryButtons;
