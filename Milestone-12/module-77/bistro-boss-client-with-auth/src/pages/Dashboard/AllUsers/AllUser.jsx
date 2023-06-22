import React from 'react';
import { Helmet } from 'react-helmet-async';
import { MdOutlineDelete, MdPerson2 } from 'react-icons/md';
import { useQuery } from 'react-query';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../hooks/useAxiosSecure';


const AllUser = () => {
const [axiosSecure]=useAxiosSecure()
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await axiosSecure.get('/users')
        console.log(res)
        return res.data
    })
    // todo: to delete user you also need remove user form firebase
    const handleDeleteItem=(id)=>{

    }

    const handleAdmin=(id)=>{
        fetch(`http://localhost:5000/users/admin/${id}`,{
            method:'PATCH',
        })
        .then(res=>res.json())
        .then(data=>{
         if(data.modifiedCount>0){
          refetch()
            Swal.fire('New Admin added!', '', 'success')
         }
        })
    }
    return (
        <div>
            <Helmet>
                <title>Dashboard | All User</title>
            </Helmet>
            <h3 className='text-3xl my-8'>Total User {users.length}</h3>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) =>
                            <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user?.name}</td>
                                <td>{user.email}</td>
                                <td>{user?.role === 'admin' ? 'Admin' : <button onClick={() => handleAdmin(user._id)} className="btn btn-ghost font-2xl"><MdPerson2 /></button>}</td>
                                <td>  <button onClick={() => handleDeleteItem(user._id)} className="btn btn-ghost font-2xl text-red-400"><MdOutlineDelete /></button></td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );

};

export default AllUser;