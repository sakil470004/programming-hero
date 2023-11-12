import React, { useContext, useEffect, useState } from 'react';
import SectionTittle from '../../Shared/SectionTittle';
import { AuthContext } from '../../../providers/AuthProvider';
import SelectedCoursesCard from './SelectedCoursesCard';
import { toast } from 'react-hot-toast';

const SelectedCourses = () => {
    const [classes, setClasses] = useState([])
    const { user } = useContext(AuthContext)
    const handleDelete = (id) => {
        fetch(`https://fighting-spirit-server.vercel.app/selectedClass/${id}`,{
            method:'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            if (data.deletedCount > 0) {
                const remaining = classes.filter(c => c._id !== id)
                setClasses(remaining)
                toast.success('Deleted')
            }
        })
    }
    useEffect(() => {
        fetch(`https://fighting-spirit-server.vercel.app/selectedClass/${user.email}`)
            .then(res => res.json())
            .then(data => setClasses(data))
    }, [])
    // {console.log(classes)}
    return (
        <div>
            <SectionTittle heading={'Selected Courses'}></SectionTittle>
            <div className='grid md:grid-cols-3 gap-6'>
                {classes.map(singleClass => {
                    return (<SelectedCoursesCard handleDelete={handleDelete} key={singleClass._id} singleClass={singleClass}>

                    </SelectedCoursesCard>)
                })
                }

            </div>
        </div>
    );
};

export default SelectedCourses;