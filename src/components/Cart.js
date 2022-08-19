import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Cart = () => {
    const cartData = useSelector((state) => state.rootReducer.cartData);
    let amount = cartData.length && cartData.map(item=>item.price).reduce((prev, next)=>prev+next)
    console.warn(amount)
    return (<div>
        <Link to="/" >Go to Products Link</Link>
        <h1>Cart Page</h1>
        <div className="cart-page-container">
            <table className="table">
                <tr>
                    <td>Name</td>
                    <td>Color</td>
                    <td>Price</td>
                    <td>Brand</td>
                    <td>Category</td>
                    <td>Image</td>
                </tr>
                {
                    cartData.map((item) => <tr key={item.id}>
                        <td>{item.name}</td>
                        <td>{item.color}</td>
                        <td>{item.price}</td>
                        <td>{item.brand}</td>
                        <td>{item.category}</td>
                        <td>{<img src={item.photo} width="90px" height={"90px"}/>}</td>
                    </tr>)
                }
            </table>
            
                    </div>
        <div className="border my-5 container w-25">
            <h4>Total Bill</h4>
        <table className="table">
                <thead>
                    <tr>
                        <th>Amount</th>
                        <th>Discount (10%)</th>
                        <th>Tax</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{amount}</td>
                        <td>{amount/10}</td>
                        <td>00.00</td>
                        <td>{amount-(amount/10)}</td>
                    </tr>
                </tbody>
            </table>

        </div>
    </div>)
}

export default Cart;