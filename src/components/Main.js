import { addToCart, emptyCart, removeToCart } from '../redux/action';

import {Link} from 'react-router-dom';
import { productList } from '../redux/productAction';
import { useDispatch } from 'react-redux'
import { useEffect } from 'react';
import {useSelector} from 'react-redux'

function Main() {
  const dispatch = useDispatch();
  let data = useSelector((state)=>state.rootReducer.productData);
  console.warn("data in main component", data);
  
  useEffect(()=>{
    dispatch(productList())
  },[])
  return (
    <div className='container border my-5 px-auto'>
      <div>
      <button className='btn btn-danger my-3' onClick={() => dispatch(emptyCart())}>Empty Cart</button>
      </div>
      
      <div className='product-container '>
        {
          data.map((item)=><div className='product-item' key={item.id}>
            <img src={item.photo} width="200px" height={"200px"} alt="" />
            <div>Name : {item.name} </div>
            <div>Color : {item.color} </div>
            <div>Price : {item.price} </div>
            <div>Category : {item.category} </div>
            <div>Brand : {item.brand} </div>
            <div>
              <button className='btn btn-success m-3' onClick={() => dispatch(addToCart(item))} >Add to Cart</button>
              <button className='btn btn-primary m-3' onClick={() => dispatch(removeToCart(item.id))}>Remove to Cart</button>

              </div>
          </div>)
        }
      </div>
      <div><Link to={"/users"}>go to users page</Link></div>
    </div>
  );
}

export default Main;