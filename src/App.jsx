import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import CardList from './components/Cards';
import ProductDetails from './components/ProductsDetails';

const texts = {
  en: {
    home: "Home",
    about: "About",
    products: "Products",
    subscribe: "Subscribe",
    clone: "Clone now",
  },
  uz: {
    home: "Bosh sahifa",
    about: "Haqida",
    products: "Mahsulotlar",
    subscribe: "Obuna bo‘lish",
    clone: "Klone qil",
  },
  ru: {
    home: "Главная",
    about: "О нас",
    products: "Продукты",
    subscribe: "Подписаться",
    clone: "Клонировать сейчас",
  },
};

function App() {
  const language = useSelector((state) => state.language.lang);

  return (
    <Router>
      <div className={`App ${language}`}>
        <Header texts={texts[language]} />

        <Routes>
          <Route path="/" element={<Hero texts={texts[language]} />} />
          <Route path="/products" element={<CardList />} />
          <Route path="/products/:model" element={<ProductDetails />} />
        </Routes>

        <Footer texts={texts[language]} />
      </div>
    </Router>
  );
}

export default App;
