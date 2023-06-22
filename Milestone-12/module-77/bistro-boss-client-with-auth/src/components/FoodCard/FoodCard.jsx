import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import useCart from "../../hooks/useCart";


const FoodCard = ({ item }) => {
    const { name, price, recipe, _id } = item;
    const img='https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
    const navigate = useNavigate();
    const { user } = useContext(AuthContext)
    const [,refetch]=useCart()
    const handleAddCart = (item) => {
        const orderItems = { name, image:img, price, menuItemId: _id, email: user.email }
       console.log(image)
        // console.log(item)
        refetch()//update the number of items in the cart
        if (user && user.email) {
            fetch('http://localhost:5000/carts', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(orderItems)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                      new  Swal({
                            text: "Your Cart added",
                            timer: 1000,
                            position:'top-end'
                        });
                    }
                })
        } else {
            navigate('/login',{ state:{from: location}});
        }

    }
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <p className="absolute right-0 mr-4 mt-4 px-4 bg-slate-900 text-white">${price}</p>
            <div className="card-body flex flex-col items-center">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-end">
                    <button onClick={() => handleAddCart(item)} className="btn btn-outline bg-slate-100 border-0 border-b-4 border-orange-400 mt-4">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;