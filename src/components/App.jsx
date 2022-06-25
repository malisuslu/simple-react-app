import React, { useState } from 'react';

import Header from './Header';
import Footer from './Footer';
import Note from './Note';
import CreateNote from './CreateNote';


function App() {
  const[items, setItems] = useState([]);

  function addItem(item) {
    setItems([...items, item]);
  }

  function removeItem(id) {
    setItems(items.filter((item, index) => index.toString() !== id));
  }

  console.log(items);

  return (
      <div className="app">
        <Header />
        <CreateNote onAdd={addItem} />
        {items.map((item, index) => <Note key={index} id={index} onDelete={removeItem} {...item}/>)}
        <Footer />
      </div>
  );
}

export default App;