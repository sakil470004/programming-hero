import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const AddItem = () => {
    const { register, handleSubmit, reset} = useForm();
    const imageHostingUrl=`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_image_secret}`
    const [axiosSecure]=useAxiosSecure()
    const onSubmit = data =>{
        const formData=new FormData();
   
        formData.append('image',data.image[0])
        console.log(data)
        fetch(imageHostingUrl,{
            method:'POST',
            body:formData
        })
        .then(res=>res.json())
        .then(imageData=>{
            if(imageData.success){
                const imageURL=imageData.data.display_url;
                const {name,category,recipe,price}=data;
                const newItem={name,price:parseFloat(price),category,recipe,image:imageURL}
              
                axiosSecure.post('/menu', newItem)
                .then(data => {
                    console.log('after posting new menu item', data.data)
                    if(data.data.insertedId){
                        reset();
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Item added successfully',
                            showConfirmButton: false,
                            timer: 1500
                          })
                    }
                })
            }
        })
    };

    return (
        <div className='w-full py-10 px-5 '>
            <SectionTitle heading={'Add an Item'} subHeading={'What"s New?'}></SectionTitle>
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-4'>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text font-bold">"Recipe Name*</span>
                    </label>
                    <input  {...register("name", { required: true })} type="text" placeholder="Recipe Name*" className="input input-bordered w-full " />
                </div>
                <div className='flex gap-4'>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text font-bold">Category Name*</span>
                        </label>
                        <select defaultValue={'Pick One'} {...register("category", { required: true })} className="select select-bordered w-full max-w-xs">
                            <option disabled>Pick One</option>
                            <option>Salad</option>
                            <option>Pizza</option>
                            <option>Soup</option>
                            <option>Dessert</option>
                            <option>Drinks</option>
                        </select>
                    </div>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text font-bold">Price*</span>
                        </label>
                        <input {...register("price", { required: true })} type="number" placeholder="Enter Price Here" className="input input-bordered w-full " />
                    </div>
                </div>

                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text font-bold">Recipe Details*</span>
                    </label>
                    <textarea {...register("recipe", { required: true })} className="textarea textarea-bordered" placeholder="Recipe Details"></textarea>
                </div>
                <input {...register("image", { required: true })} type="file" className="file-input file-input-bordered file-input-sm w-full " />
                <div>
                    <input className='btn btn-sm' type="submit" value="Add Item" />
                </div>
            </form>
        </div>
    );
};

export default AddItem;