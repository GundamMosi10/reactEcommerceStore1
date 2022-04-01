import React, {useState, useEffect} from "react";
import './shoppingcart.css';
import axios from "axios";


const baseURL = "api/cart/find";

export default function Cart() {
  const [post, setPost] = useState(null);
  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
      console.log(response.data)
    });
    
  }, []);
  

  if (!post) return null;
  console.log(post)

  return (
    <div className="cart-container">
      <div className="cart-wrapper">
        <div className="cart-card-container">
          <h1 className="cart-title">Your Bag</h1>
          <p className="cart-description">View your items below</p>
            <div className="cart-items">
                <li className="cart-list">
                    <ul>{post.map((cart) => {
                    return (
                      <div key={cart}>
                      <div>Title:{cart.title}</div>
                      <div>Description:{cart.description}</div>
                      <img className='cart-product-img' alt='cart product'src={cart.img}></img>
                      <div>Category:{cart.category}</div>
                      <div>Size:{cart.size}</div>
                      <div>Price:{cart.price}</div>
                      <div>Location:{cart.location}</div>
                      </div>
                      // <div key={product}>
                      // <div>Title:{product.title}</div>
                      // <div>Description:{product.description}</div>
                      // <img className='product-img' src={product.img}></img>
                      // <div>Category:{product.category}</div>
                      // <div>Size:{product.size}</div>
                      // <div>Price:{product.price}</div>
                      // <div>Location:{product.location}</div>
                      // </div>
                    )})}
                    </ul>
                </li>
            </div>
          <button className="cart-button">Finish Checkout</button>
        </div>
      </div>
    </div>
  )
  }

