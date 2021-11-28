import React, { useEffect, useState } from 'react';
import useAuth from './Firebase/useAuth';


const Myorder = () => {
    const {user} =useAuth();
    const [order,setOrder] = useState([])

    const email = user?.email;
    useEffect(()=>{
        fetch(`https://immense-cliffs-49717.herokuapp.com/myOrders/${email}`)
        .then(res => res.json())
        .then (data =>setOrder(data))
        
    },[])
    
    return (
        <div>
            <h1 className="text-center m-5">MY orders {order?.length}</h1>
            <div className="card">
            <img src={order?.img} class="card-img-top" alt="..."/>
               <div className="card-body">
                 <h1>{order.name}</h1>
                 <p className="card-text">{order.description}</p>
               </div>
            </div>
            
        </div>
    );
};

export default Myorder;