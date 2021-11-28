import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useForm } from "react-hook-form";

const Update = () => {
    const {upId}  = useParams();
    const [singleService,setSingleService]=useState({});

    useEffect(() => {
        fetch(`https://immense-cliffs-49717.herokuapp.com/singleService/${upId}`)
        .then(res =>res.json())
        .then (data => setSingleService(data))
        
    },[])
    console.log(singleService);


    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
    fetch(`https://immense-cliffs-49717.herokuapp.com/update/${upId}`,{
        method:'PUT',
        headers:{"content-type":"application/json"},
        body:JSON.stringify(data)
    })
    .then (res => res.json())
    .then ((result) => {
        if(result.modifiedCount){
            alert('Update successful')
        }

    })
}
    return (
        <div>
            <h1>Updated Name:{singleService.name}</h1>
            <form className="p-2 m-5" onSubmit={handleSubmit(onSubmit)} placeholder="name">
      {/* register your input into the hook by invoking the "register" function */}
      <input type="text" defaultValue={singleService.name} {...register("name") } placeholder="name" />
      
      {/* include validation with required or other standard HTML validation rules */}
      <input defaultValue={singleService.price} type="number" {...register("number", { required: true })}placeholder="price" />
      <input defaultValue={singleService?.img} type="img" {...register("img", { required: true })}placeholder="img" />
      <input defaultValue={singleService?.description} type="text" {...register("description", { required: true })}placeholder="description" />
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>}
      
      <input type="submit" />
    </form>
        </div>
    );
};

export default Update;