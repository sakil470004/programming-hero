import React from 'react';
import { Helmet } from 'react-helmet-async';
import useCart from '../../hooks/useCart';
import { MdOutlineDelete } from 'react-icons/md'
import Swal from 'sweetalert2';

const MyCart = () => {
    const [cart, refetch] = useCart()
    const total = cart.reduce((sum, item) => item.price + sum, 0)

    const handleDeleteItem = (id) => {
        const url = `http://localhost:5000/carts/${id}`
        Swal.fire({
            title: 'Are You Sure You Want to delete it ?',
            showCancelButton: true,
            confirmButtonText: 'Delete',
            denyButtonText: `No`,
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                fetch(url, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount) {
                            refetch()
                            Swal.fire('Deleted!', '', 'success')
                        }

                    })
            }
        })
    }
    return (
        <div className='mt-10'>
            <Helmet>
                <title>Dashboard | My Cart</title>
            </Helmet>
            <div className='uppercase flex justify-around'>
                <div className="text-2xl">Total Items : {cart.length}</div>
                <div className="text-2xl">Total Price :$ {total}</div>
                <button className="btn btn-warning btn-sm">pay</button>
            </div>
            {/* table */}
            <div className="overflow-x-auto w-full mt-10">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>Image</th>
                            <th>Item Name</th>
                            <th>Price</th>
                            <th>Action</th>

                        </tr>
                    </thead>
                    <tbody>

                        {cart.map((item, index) => <tr key={item?._id}>
                            <td>
                                {index + 1}
                            </td>
                            <td>
                                <div className="avatar">
                                    <div className="mask mask-squircle w-12 h-12">
                                        <img src={item?.image} alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div>

                            </td>
                            <td>
                                {item.name}
                            </td>
                            <td>{item.price}</td>
                            <th>
                                <button onClick={() => handleDeleteItem(item._id)} className="btn btn-ghost font-2xl text-red-400"><MdOutlineDelete /></button>
                            </th>
                        </tr>)}

                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default MyCart;