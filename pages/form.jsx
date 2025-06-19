
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FaSearch, FaStar, FaShoppingCart, FaHeart } from 'react-icons/fa';
import Seedb3 from '../assets/prod/seedb3.jpg';
import { products as allProducts } from '../data/products'; // all products
import { useCart } from '../context/CartContext';
import './form.css';

export default function Form() {
  const [query, setQuery] = useState('');
  const [favorites, setFavorites] = useState([]);
  const navigate = useNavigate();
  const { hash } = useLocation();
  const { addToCart, cartItems } = useCart();

  // Filter only farm products
  // const farmProducts = allProducts.filter((p) => p.category === 'farm');
  // const farmProducts = products.filter((p) => p.category === 'farm');
const farmProducts = allProducts.filter((p) => p.category === 'farm');
  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  }, [hash]);

  const goToItems = () => navigate(`/items?q=${encodeURIComponent(query)}`);

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fid) => fid !== id) : [...prev, id]
    );
  };

  return (
    <section className="form">
      <div className="form-page">
        <div className="form-img">
          <div className="form-text">
            <p id="fpar">
              With high-yielding varieties of paddy and vegetable seed, flower seeds with <br /> 
              high germination rates, and AgriPacK guarantees only the best organic seeds <br />
              for you and your garden!
            </p>
            <img src={Seedb3} alt="seeds banner" id="Sef" />
          </div>
        </div>
      </div>

      <div className="form-item">
        <h2 id="fhead">Farm Products</h2>

        <div className="form-search">
          <input
            id="foinp"
            placeholder="your products"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && goToItems()}
          />
          <span id="foser" onClick={goToItems}><FaSearch /></span>

          <div className="shop-cards">
            <button className="shop-card" onClick={() => navigate('/items')} title="Go to cart">
              <FaShoppingCart />
              {cartItems.length > 0 && (
                <span className="cart-badge">
                  {cartItems.length > 9 ? '9+' : cartItems.length}
                </span>
              )}
            </button>
          </div>

          <div className="shop-hearts">
            <button className="shop-heart" title="Favorites">
              <FaHeart color={favorites.length ? 'green' : 'gray'} />
              {favorites.length > 0 && (
                <span className="fav-badge">
                  {favorites.length > 9 ? '9+' : favorites.length}
                </span>
              )}
            </button>
          </div>
        </div>

        <div className="form-item-center">
          {farmProducts.map((p) => (
            <div className="form-rice1" key={p.id}>
              <div className="heart-overlay" onClick={() => toggleFavorite(p.id)}>
                <FaHeart color={favorites.includes(p.id) ? 'green' : 'gray'} />
              </div>
              <img src={p.image} alt={p.name} id="smal" />
              <strong id="foname">{p.name}</strong>
              <p id="pric">₹ {p.price}</p>
              <span id="star">
                <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
              </span><br />
              <button
                onClick={() => {
                  addToCart(p);
                  navigate('/items');
                }}
                id="adbtn"
              >
                Add&nbsp;<FaShoppingCart />
              </button>
            </div>
          ))}
        </div>

        <div className="form-last-text">
          {/* You can keep your existing closing or promotional content here */}
           <h2 id='foh1'><span id='dot'>&#9679;</span>  AgriPack Brings You a Carefully Crafted Selection of Organic Seeds</h2>
                    <p id='forp1'>With AgriPack, you can buy seeds  online and choose from a wide variety of seeds from a carefully put-together collection. Whether you're in the mood to buy rice seeds online,  <br />or simply want to growsome herbs in your field or garden, we've got you covered! Not only do we guarantee you a stunning harvest and great variety, but also a quality that  <br />will allow your garden to thrive and bloom with vibrant and successful crops.</p>
           <h2 id='foh1'><span id='dot'>&#9679;</span>  Affordable Prices for Pocket-friendly Online Seed Purchase</h2>
           <p id='forp1'>Quality and variety are sure to flourish through your garden with our online seeds store, but your garden isn't the only thing that will be content. Our seed selection is also affordable  <br />and pocket-friendly, which allows you to start your home garden without having to worry too much about how heavy it will be in your pocket!</p>
           <h2 id='foh1'><span id='dot'>&#9679;</span>  AgriPacK Guarantee of the Best Quality Organic Seeds</h2>
           <p id='forp1'>Growing your fruit and vegetables at home has never been easier! With AgriPacK wide range of organic seeds, you can rest assured that you will find unparalleled quality for all your produce <br />plants, herbs, and flowering plants. Our organic seeds provide high germination rates and are non-GMO, which ensures that your plants get only the best. They are also fit for container gardening <br /> and all our seeds are high-yielding varieties, which allows you to conveniently grow the best plants, indoors and outdoors.</p>
        </div>
      </div>
    </section>
  );
}
