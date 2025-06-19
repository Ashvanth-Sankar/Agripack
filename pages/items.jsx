
// import React, { useState } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import { FaTimes, FaArrowLeft } from 'react-icons/fa';
// import { useCart } from '../context/CartContext';
// import { products } from '../data/products';
// import './iteams.css';

// export default function Items() {
//   const navigate = useNavigate();
//   const { cartItems, addToCart, removeFromCart, updateQuantity } = useCart();

//   const q = new URLSearchParams(useLocation().search).get('q')?.toLowerCase() || '';
//   const matched = q ? products.filter((p) => p.name.toLowerCase().includes(q)) : [];

//   const [total, setTotal] = useState(null);
//   const [addedItems, setAddedItems] = useState([]);

//   const calculateTotal = () => {
//     const totalAmount = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
//     setTotal(totalAmount);
//   };

//   const handleAddToCart = (p) => {
//     addToCart(p);
//     setAddedItems((prev) => [...prev, p.id]);
//   };

//   return (
//     <div className="items-page">
//       <h2 id='ith2'>Your Products</h2>

//       {cartItems.length === 0 ? (
//         <p>No items in cart.</p>
//       ) : (
//         <>
//           <ul className="cart-list">
//             {cartItems.map((item, idx) => (
//               <li key={idx} style={{ display: 'flex', alignItems: 'center' }}>
//                 <img src={item.image} alt={item.name} width="80" />
//                 <span>{item.name}</span>

//                 {/* Quantity Controls */}
//                 <div className='Quantity-Controls'>
//                   <button
//                     onClick={() => updateQuantity(item.id, -1)}
//                     disabled={item.quantity <= 1}
//                     id='qubtn'
//                   >
//                     -
//                   </button>
//                   <span>{item.quantity}</span>
//                   <button
//                     onClick={() => updateQuantity(item.id, 1)}
//                     id='qubtn'
//                   >
//                     +
//                   </button>
//                 </div>

//                 {/* Total per item */}
//                 <span>₹ {item.price * item.quantity}</span>

//                 {/* Remove item */}
//                 <button onClick={() => removeFromCart(item)} id='Xbtn'>
//                   <FaTimes />
//                 </button>
//               </li>
//             ))}
//           </ul>

//           {/* Bill and continue buttons */}
//           <div className="bill-button">
//             <button onClick={() => navigate('/form')} id='conbtn'>
//               <FaArrowLeft /> Continue Shopping
//             </button>

//             <button onClick={calculateTotal} id='bilbtn'>
//               Bill Amount
//             </button>

//             {total !== null && (
//               <p id='tot'>Total: ₹ {total}</p>
//             )}
//           </div>
//         </>
//       )}

//       {/* Search results */}
//       {q && (
//         <>
//           <h2 style={{ marginTop: '2rem' }} id='serh2'>
//             Search results for “<em>{q}</em>”
//           </h2>

//           {matched.length === 0 ? (
//             <p>Nothing matched.</p>
//           ) : (
//             <div className="search-results">
//               {matched.map((p) => {
//                 const isAdded = addedItems.includes(p.id);
//                 return (
//                   <div
//                     className={`result-card ${isAdded ? 'added' : 'fresh'}`}
//                     key={p.id}
//                   >
//                     <img src={p.image} alt={p.name}  id='seimg'/>
//                     <p>{p.name}</p>
//                     <p>₹ {p.price}</p>
//                     <button onClick={() => handleAddToCart(p)}>
//                       Add to Cart
//                     </button>
//                   </div>
//                 );
//               })}
//             </div>
//           )}
//         </>
//       )}
//     </div>
//   );
// }



// ashu1
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaTimes, FaArrowLeft } from 'react-icons/fa';
import { useCart } from '../context/CartContext';
import { products } from '../data/products';
import './iteams.css';

export default function Items() {
  const navigate = useNavigate();
  const location = useLocation();
  const { cartItems, addToCart, removeFromCart, updateQuantity } = useCart();

  const from = location.state?.from || '/form'; // 👈 Get source page

  const q = new URLSearchParams(location.search).get('q')?.toLowerCase() || '';
  const matched = q ? products.filter((p) => p.name.toLowerCase().includes(q)) : [];

  const [total, setTotal] = useState(null);
  const [addedItems, setAddedItems] = useState([]);

  const calculateTotal = () => {
    const totalAmount = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    setTotal(totalAmount);
  };

  const handleAddToCart = (p) => {
    addToCart(p);
    setAddedItems((prev) => [...prev, p.id]);
  };

  return (
    <div className="items-page">
      <h2 id='ith2'>Your Products</h2>

      {cartItems.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <>
          <ul className="cart-list">
            {cartItems.map((item, idx) => (
              <li key={idx} style={{ display: 'flex', alignItems: 'center' }}>
                <img src={item.image} alt={item.name} width="80" />
                <span>{item.name}</span>

                <div className='Quantity-Controls'>
                  <button
                    onClick={() => updateQuantity(item.id, -1)}
                    disabled={item.quantity <= 1}
                    id='qubtn'
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, 1)} id='qubtn'>+</button>
                </div>

                <span>₹ {item.price * item.quantity}</span>

                <button onClick={() => removeFromCart(item)} id='Xbtn'>
                  <FaTimes />
                </button>
              </li>
            ))}
          </ul>

          <div className="bill-button">
            <button onClick={() => navigate(from)} id='conbtn'> {/* 👈 Back to source page */}
              <FaArrowLeft /> Continue Shopping
            </button>

            <button onClick={calculateTotal} id='bilbtn'>
              Bill Amount
            </button>

            {total !== null && <p id='tot'>Total: ₹ {total}</p>}
          </div>
        </>
      )}

      {/* Search results */}
      {q && (
        <>
          <h2 style={{ marginTop: '2rem' }} id='serh2'>
            Search results for “<em>{q}</em>”
          </h2>

          {matched.length === 0 ? (
            <p>Nothing matched.</p>
          ) : (
            <div className="search-results">
              {matched.map((p) => {
                const isAdded = addedItems.includes(p.id);
                return (
                  <div className={`result-card ${isAdded ? 'added' : 'fresh'}`} key={p.id}>
                    <img src={p.image} alt={p.name} id='seimg' />
                    <p>{p.name}</p>
                    <p>₹ {p.price}</p>
                    <button onClick={() => handleAddToCart(p)}>Add to Cart</button>
                  </div>
                );
              })}
            </div>
          )}
        </>
      )}
    </div>
  );
}
















// src/pages/Items.js
// import React from 'react';
// import { useLocation } from 'react-router-dom';
// import { products } from '../data/products';

// const Items = () => {
//   const location = useLocation();
//   const searchParams = new URLSearchParams(location.search);
//   const q = searchParams.get('q')?.toLowerCase() || '';

//   const matched = q
   
//     : [];

//   return (
//     <div className="p-4">
//       <h2 className="text-xl font-bold mb-4">Search Results</h2>
//       {matched.length === 0 ? (
//         <p>No items found for "{q}"</p>
//       ) : (
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//           {matched.map((product) => (
//             <div key={product.id} className="border p-4 rounded shadow">
//               <img src={product.image} alt={product.name} className="h-32 w-full object-cover" />
//               <p className="mt-2 text-sm font-medium">{product.name}</p>
//               <p className="text-green-600">₹{product.price}</p>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Items;
