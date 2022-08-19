import { useDispatch, useSelector } from 'react-redux'

import { Link } from 'react-router-dom';
import { productSearch } from '../redux/productAction'

const Header = () => {
    const result = useSelector((state) => state.rootReducer.cartData);
    const dispatch = useDispatch();
    console.warn("data in header", result);
    return (
        <div className="header">
            <Link to="/"><h1 className='logo'>E-Comm Website</h1></Link>
            <div className='search-box'>
                <input className='form-control py-3' type="text" onChange={(event) => dispatch(productSearch(event.target.value))} placeholder='Search Product By Anything!!' />
            </div>
            <Link to="/cart">
                <div className="cart-div">
                    <span>{result.length}</span>
                    <img src="https://cdn-icons-png.flaticon.com/512/263/263142.png" alt="" />
                </div></Link>
        </div>
    )
}

export default Header;