import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { RxHamburgerMenu } from 'react-icons/rx';
import { BsCartDash,BsBookHalf } from 'react-icons/bs';
import { MdMenuBook, MdBorderColor, MdMapsHomeWork, MdCalendarMonth, MdHistory, MdPerson } from 'react-icons/md';
import {GiForkKnifeSpoon } from 'react-icons/gi';
import useCart from '../hooks/useCart';
import useAdmin from '../hooks/useAdmin';
const Dashboard = () => {
    const [cart] = useCart()
    //todo : isAdmin need to dynamic form database
    // const isAdmin = true;
    const [isAdmin]=useAdmin()

    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle " />
            <div className="drawer-content ">
                {/* <!-- Page content here --> */}
                {/* drawer button */}
                <label htmlFor="my-drawer-2" className="absolute top-2 left-2 text-2xl md:hidden"><RxHamburgerMenu /></label>
                <Outlet />
            </div>
            <div className="drawer-side bg-[#d1a054]">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80  text-base-content">
                    {
                        isAdmin ? <>
                        <li>     <NavLink to={'/dashboard/adminHome'}> <MdMapsHomeWork />User Home</NavLink> </li>
                        <li>     <NavLink to={'/dashboard/addItems'}> <GiForkKnifeSpoon />Add Items</NavLink> </li>
                        <li>     <NavLink to={'/dashboard/manageBooking'}> <BsBookHalf />Manage Booking</NavLink> </li>
                        <li>     <NavLink to={'/dashboard/allUser'}> <MdPerson />All User</NavLink> </li>

                        </> : <>
                            <li>     <NavLink to={'/dashboard/userHome'}> <MdMapsHomeWork />User Home</NavLink> </li>
                            <li>     <NavLink to={'/dashboard/reservation'}> <MdCalendarMonth />Reservation</NavLink> </li>
                            <li>     <NavLink to={'/dashboard/paymenthistory'}> <MdHistory />Payment History</NavLink> </li>
                            <li>     <NavLink to={'/dashboard/mycart'}>  <BsCartDash />  My Cart
                                <div className="badge badge-secondary">+{cart.length}</div></NavLink> </li>
                        </>
                    }

                    <div className="divider"></div>
                    <li><NavLink to="/menu"><MdMenuBook />Our Menu</NavLink></li>
                    <li><NavLink to="/order/salad"><MdBorderColor />Order Food</NavLink></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;