import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../Firebase/useAuth';
import Banner from './Banner/Banner';



const Home = () => {
    const {user,logOut}=useAuth();
    const [services,setServices]=useState([]);
    useEffect(()=>{     
           fetch('https://immense-cliffs-49717.herokuapp.com/services')
        .then (res =>res.json())
        .then (data => setServices(data))
    },[])

    const history = useHistory()

     const handleDetails = (key) =>{
        const uri =`/details/${key}`
        history.push(uri)
    }
    const handleDelete =(id) => {
        fetch(`https://immense-cliffs-49717.herokuapp.com/deleteService/${id}`,
        {
         method:"DELETE",
         headers:{"content-type":"application/json"}
        })
        .then (res => res.json())
        .then ( (result => {
          console.log(result);
          if(result.deletedCount){
            alert('deleted')
           const remaining = services.filter(service  => service._id !== id);
           setServices(remaining)
          }
          
        }))
        
       }

       const addToCart=(index)=>{
           const data=services[index];
           data.email=user?.email;
           
           fetch('https://immense-cliffs-49717.herokuapp.com/addToCart',{
               method:"POST",
               headers:{'content-type':'application/json'},
               body:JSON.stringify(data)
           })

       }

    return (
        <div>
            <div>
                <Banner></Banner>
            </div>
            <div className="text-center">
                <h1 className='text-danger'>PARIS TOP TOURS</h1>
                <p className="text-muted">Each item listed with Carousel and Lazy Load Feature</p>
            </div>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {
                   services.map ((service,index) => <div key={service.key}>
                    <div class="col ">
             <div className="card">
               <img src={service.img} class="card-img-top" alt="..."/>
               <div className="card-body">
                 <h1>{service.name}</h1>
                 <p className="card-text">{service.description}</p>
               </div>
              <div className=' mb-2 text-center '> 
              <div>
                  <button onClick={() => handleDetails(service.key)} className="btn btn-primary"> Details </button>
                  <button onClick={() => addToCart(index)} className='btn btn-success'>Booking</button>
              </div>
              <div className="m-2">
               
                <Link to ={`/update/${service._id}`}>
                    <button className="btn btn-secondary">Update</button>
                </Link>
                <button onClick={ () => handleDelete(service._id)} className="btn btn-danger">delete</button>
              </div>
              </div>
              
              
              <div className=' mb-2'> </div>
             </div>
           </div>
                 </div>)
                }
            </div>

            <div className="mt-3 mb-3">
                <h1 className="text-center">PLAN <span className="text-danger">YOUR TOUR</span> EASLY</h1>
                <p className="text-center">Quisque at tortor a libero posuere laoreet vitae sed arcu. Curabitur consequat.</p>
                <div className="row row-cols-1 row-cols-md-3 g -4 mb-3 ">
                    <div>
                        <h1 className="fs-1 fw-bold text-center text-danger"><i className="fas fa-suitcase-rolling "></i></h1>
                        <h4 className="text-center"> Itineraries studied in detail</h4>
                        <p>Suscipit invenire petentium per in. Ne magna assueverit vel. Vix movet perfecto facilisis in, ius ad maiorum corrumpit, his esse docendi in.</p>
                    </div>
                    <div>
                        <h1 className="fs-1 fw-bold text-center text-danger"><i class="fas fa-industry"></i></h1>
                        <h4 className="text-center">Room and food included</h4>
                        <p>Cum accusam voluptatibus at, et eum fuisset sententiae. Postulant tractatos ius an, in vis fabulas percipitur, est audiam phaedrum electram</p>
                    </div>
                    <div>
                        <h1 className="fs-1 fw-bold text-center text-danger"><i class="fas fa-sitemap"></i></h1>
                        <h4 className="text-center">Everything organized</h4>
                        <p>Integre vivendo percipitur eam in, graece suavitate cu vel. Per inani persius accumsan no. An case duis option est, pro ad fastidii contentiones.</p>
                    </div>
                </div>
            </div>



            <h1 className="text-danger text-center">LATES BLOG NEWS</h1>
            <p className="text-muted text-center">Quisque at tortor a libero posuere laoreet vitae sed arcu. Curabitur consequat.</p>

            <div className="row row-cols-1 row-cols-md-2 g -4 mb-2">
                <div className="d-flex">
                    <div>
                    <img className="img-fluid" src="http://www.ansonika.com/citytours/img/news_home_1.jpg" alt="" />
                    </div>
                    <div className="ms-2">
                    <h5>MARK TWAIN - 20.11.2017</h5>
                    <h4>Pri oportere scribentur eu</h4>
                    <p>Cu eum alia elit, usu in eius appareat, deleniti sapientem honestatis eos ex. In ius esse ullum vidisse....</p>
                    </div>
                </div>

                <div className="d-flex">
                    <div>
                        <img className="img-fluid" src="http://www.ansonika.com/citytours/img/news_home_2.jpg" alt="" />
                    </div>
                    <div className="ms-2" >
                    <h5>JHON DOE - 20.11.2017</h5>
                    <h4>Duo eius postea suscipit ad</h4>
                    <p>Cu eum alia elit, usu in eius appareat, deleniti sapientem honestatis eos ex. In ius esse ullum vidisse....</p>
                </div>
                </div>

                <div className="d-flex">
                    <div>
                        <img className="img-fluid" src="http://www.ansonika.com/citytours/img/news_home_3.jpg" alt="" />
                    </div>
                    <div className="ms-2">
                    <h5>LUCA ROBINSON - 20.11.2017</h5>
                    <h4>Elitr mandamus cu has</h4>
                    <p>Cu eum alia elit, usu in eius appareat, deleniti sapientem honestatis eos ex. In ius esse ullum vidisse....</p>
                </div>
                </div>

                <div className="d-flex">
                    <div>
                        <img className="img-fluid" src="http://www.ansonika.com/citytours/img/news_home_4.jpg" alt="" />
                    </div>
                    <div className="ms-2">
                    <h5>PAULA RODRIGEZ - 20.11.2017</h5>
                    <h4>Id est adhuc ignota delenit</h4>
                    <p>Cu eum alia elit, usu in eius appareat, deleniti sapientem honestatis eos ex. In ius esse ullum vidisse....</p>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Home;