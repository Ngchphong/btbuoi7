// src/App.js
import React, { useState } from 'react';
import Image from './components/Image';
import SearchBar from './components/SearchBar';
import CategoryButtons from './components/CategoryButtons';
import './App.css'; 

const imagesData = [
  { src: 'url_to_image1.jpg', title: 'Ảnh 1', category: 'Nature' },
  { src: 'url_to_image2.jpg', title: 'Ảnh 2', category: 'City' },
 
];

const categories = ['All', 'Nature', 'City'];

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredImages = imagesData.filter((image) => {
    const matchesSearch = image.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || image.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="app">
      <SearchBar onSearch={setSearchQuery} />
      <CategoryButtons categories={categories} onSelectCategory={setSelectedCategory} />
      <div className="gallery">
        {filteredImages.map((image) => (
          <Image key={image.title} src={image.src} title={image.title} />
        ))}
      </div>
    </div>
  );
}

export default App;
