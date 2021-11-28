import { useHistory } from 'react-router-dom';
import React, { useEffect, useState } from 'react';


// const Service = (props) => {
//   const [services,setServices]=useState([]);
  
//     const {key,img,name,description}=props.service ||{};

//     const history = useHistory()
//     useEffect(()=>{     
//       fetch('http://localhost:8000/services')
//    .then (res =>res.json())
//    .then (data => setServices(data))
// },[])

//     const handleDetails = (key) =>{
//         const uri =`/details/${key}`
//         history.push(uri)
//     }

//     const handleDelete =(id) => {
//      fetch(`http://localhost:8000/deleteService/${id}`,
//      {
//       method:"DELETE",
//       headers:{"content-type":"application/json"}
//      })
//      .then (res => res.json())
//      .then ( (result => {
//        console.log(result);
//        if(result.deletedCount){
//          alert('deleted')
//         const remaining = services.filter(service  =>service._id !== id);
//         setServices(remaining)
//        }
       
//      }))
     
//     }
//     return (
//   //       <div>
//   //          <div class="col ">
//   //   <div className="card">
//   //     <img src={img} class="card-img-top" alt="..."/>
//   //     <div className="card-body">
//   //       <h1>{name}</h1>
//   //       <p className="card-text">{description}</p>
//   //     </div>
//   //    <div className=' mb-2 text-center '> 
//   //    <div>
//   //        <button onClick={() => handleDetails(key)} className="btn btn-primary"> Booking </button>
//   //    </div>
//   //    <div className="m-2">
      
//   //      <button className="btn btn-success m-1">Update</button>
//   //      <button onClick={ () => handleDelete(id)} className="btn btn-danger">delete</button>
//   //    </div>
//   //    </div>
     
     
//   //    <div className=' mb-2'> </div>
//   //   </div>
//   // </div>
//   //       </div>
//     );
// };

// export default Service;