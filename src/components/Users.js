import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {Link} from "react-router-dom";
import {getUser} from "../redux/usersAction";

export default function Users() {
    const dispatch = useDispatch();
    let data = useSelector((state)=>state.rootReducer.usersReducer);
    useEffect(()=>{
        dispatch(getUser());
    },[])
  return <div>
    <Link to="/">Go to home page</Link>
    <h1>List of users</h1>
    <table style={{border:"1px solid black",padding:"20px",margin:"auto"}}>
        <thead>
            <tr>
                <th>Id</th>
                <th>UserName</th>
                <th>Email</th>
                <th>Phone</th>
            </tr>
        </thead>
        <tbody>
            {
                data.map((user)=>(
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.username}</td>
                        <td>{user.email}</td>
                        <td>{user.phone}</td>
                    </tr>
                ))
            }
        </tbody>
    </table>

  </div>;
}
