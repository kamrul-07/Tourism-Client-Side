import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Details = () => {
    const {id}=useParams()
    const [details,setDetails] = useState([])
    const [specificDetails,setScificDetails] = useState({})


    useEffect(() => {
        fetch("https://immense-cliffs-49717.herokuapp.com/services")
        .then (res => res.json())
        .then (data => setDetails(data))
    },[])

    
    useEffect(()=>{
        if(details.length>0){
            const matchdata= details.find (detail=>detail.key===id)
            setScificDetails(matchdata);
        }
        
    }
    ,[details])
    
    
    
    return (
        <div>
        
            <img src={specificDetails?.img} alt="" />
            <p className="">Name:{specificDetails?.name}</p>
            <p>Description:{specificDetails?.description}</p>
            <p>price:{specificDetails?.price}</p>
            
        </div>
    );
};

export default Details;