import React from 'react';

const AddCoffee = () => {
    const handleAddCoffee = (e) => {
        e.preventDefault()
        const form = e.target;
        const coffeename = form.coffeename.value;
        const chefname = form.chefname.value;
        const suppliername = form.suppliername.value;
        const coffeetaste = form.coffeetaste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const coffeeDetails = { coffeename, chefname, suppliername, coffeetaste, category, details, photo }
        fetch('http://localhost:5000/coffee',{
            method:'POST',
            headers:{
                "Content-Type":'application/json'
            },
            body:JSON.stringify(coffeeDetails)
        })
        .then(res=>res.json())
        .then(data=>{
            form.reset();
            if(data.insertedId){
                alert('Added Coffee')
            }
        })
    }

    return (
        <div className='bg-[#f4f3f0 py-10' >
            <h3 className='text-5xl text-center my-5'>Add New Coffee</h3>
            <div className='flex items-center justify-center'>
                <form className=" flex flex-col gap-2 "
                    onSubmit={handleAddCoffee}
                >
                    <label className="input-group">
                        <span>Name</span>
                        <input type="text"
                            name='coffeename'
                            placeholder="Enter Coffee Name" className="input input-bordered" />
                    </label>
                    <label className="input-group">
                        <span>Chef</span>
                        <input type="text" placeholder="Enter Coffee Chef Name"
                            name='chefname'
                            className="input input-bordered" />
                    </label>

                    <label className="input-group">
                        <span>Supplier</span>
                        <input type="text" placeholder="Enter Coffee Supplier"
                            name='suppliername'
                            className="input input-bordered" />
                    </label>
                    <label className="input-group">
                        <span>Taste</span>
                        <input type="text"
                            name='coffeetaste'
                            placeholder="Enter Coffee Taste" className="input input-bordered" />
                    </label>
                    <label className="input-group">
                        <span>Category</span>
                        <input type="text" placeholder="Ente        r Coffee Category"
                            name='category'
                            className="input input-bordered" />
                    </label>
                    <label className="input-group">
                        <span>Details</span>
                        <input type="text" placeholder="Ente        r Coffee details"
                            name='details'
                            className="input input-bordered" />
                    </label>
                    <label className="input-group">
                        <span>Photo Url</span>
                        <input type="text" placeholder="Ente        r Coffee Photo Url"
                            name='photo'
                            className="input input-bordered" />
                    </label>
                    <input className='btn bg-red-300' type="submit" value='Add Coffee' />
                </form>
            </div>
        </div>
    );
};

export default AddCoffee;