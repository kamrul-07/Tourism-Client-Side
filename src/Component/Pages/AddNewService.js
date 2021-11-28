import React from 'react';

import { useForm } from "react-hook-form";

const AddNewService = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
const onSubmit = data => {
    fetch('https://immense-cliffs-49717.herokuapp.com/addnewService',{
        method:"POST",
        headers:{"content-Type":"application/json"},
        body:JSON.stringify(data),
      
    })
    .then(res => res.json())
    .then (result => console.log(result));
    console.log(data);
}

  
    return (
        <div className="m-5">
            <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <input className="p-2 m-2"  {...register("name")} Placeholder="name" />
      
      {/* include validation with required or other standard HTML validation rules */}
      <input className="p-2 m-2"  type="number" {...register("price", { required: true })} Placeholder="price" />
      <input  className="p-2 m-2"  {...register("url", { required: true })} Placeholder="img url" />
      <input  className="p-2 m-2"  {...register("description", { required: true })} Placeholder="dercription" />
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>}
      <br />
      
      <input className="btn btn-success"   type="submit" />
    </form>
            
        </div>
    );
};

export default AddNewService;