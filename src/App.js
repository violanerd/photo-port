//import logo from './logo.svg'; //deleted it so this won't work
import React, { useState } from 'react';
import './App.css';
import About from './components/About/index';
import Nav from './components/Nav/index';
import Gallery from './components/Gallery';
import ContactForm from './components/Contact';

function App() {
      const categories = [ //why did we have to initialize this with use state? instead of just declaring an array?
        {
          name: "commercial",
          description:
            "Photos of grocery stores, food trucks, and other commercial projects",
        },
        { name: "portraits", description: "Portraits of people in my life" },
        { name: "food", description: "Delicious delicacies" },
        {
          name: "landscape",
          description: "Fields, farmhouses, waterfalls, and the beauty of nature",
        },
      ];
      // const [categories] = useState([ //why did we have to initialize this with use state? instead of just declaring an array?
      //   {
      //     name: "commercial",
      //     description:
      //       "Photos of grocery stores, food trucks, and other commercial projects",
      //   },
      //   { name: "portraits", description: "Portraits of people in my life" },
      //   { name: "food", description: "Delicious delicacies" },
      //   {
      //     name: "landscape",
      //     description: "Fields, farmhouses, waterfalls, and the beauty of nature",
      //   },
      // ]);
      const [currentCategory, setCurrentCategory] = useState(categories[0]);
      const [contactSelected, setContactSelected] = useState(false);
  return (
    <div>
      <Nav
      categories={categories}
      setCurrentCategory={setCurrentCategory}
      currentCategory={currentCategory}
      contactSelected={contactSelected}
      setContactSelected={setContactSelected}>
      </Nav>
      <main>
      {!contactSelected ? (
        <>
          <Gallery currentCategory={currentCategory}></Gallery>
          <About></About>
        </>
      ) : (
          <ContactForm></ContactForm>
        )}
      </main>
    </div>
  );
}

export default App;
