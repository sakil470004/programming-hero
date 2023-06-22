import React, { useContext } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import logo from './../../assets/logo.png'
import useRole from '../../hooks/useRole';
import { AiOutlineHome,AiOutlineLogout ,AiOutlineUsergroupDelete} from "react-icons/ai";
import { GrSelect } from "react-icons/gr";
import { GiTeacher } from "react-icons/gi";
import { SiGoogleclassroom } from "react-icons/si";
import { BiImageAdd ,BiHistory} from "react-icons/bi";
import { TbArrowsJoin2 } from "react-icons/tb";
import { MdFlightClass } from "react-icons/md";
import { Helmet } from 'react-helmet-async';
import { AuthContext } from '../../providers/AuthProvider';

const Dashbaord = () => {
  const { role } = useRole()
  const {logOut}=useContext(AuthContext);
  return (
    <div className="dashboardCSS drawer lg:drawer-open">
    <Helmet>
                <title>Fighting Spirit | Dashboard</title>
            </Helmet>
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content my-0 mx-4">
        {/* Page content here */}
        <Outlet />
        <label htmlFor="my-drawer-2" className="btn btn-error drawer-button lg:hidden absolute top-4 left-4">|||</label>

      </div>
      <div className="drawer-side bg-rose-100">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content my-2">
          {/* Sidebar content here */}
          <img src={logo} alt="" />
          {/* admin */}
           <li><NavLink to={'/dashboard/home'}><AiOutlineHome/> Dashboard Home</NavLink></li>
          {role === 'admin' &&<>
              <li><NavLink to={'/dashboard/manageUsers'}><AiOutlineUsergroupDelete/>Manage Users</NavLink></li>
              <li><NavLink to={'/dashboard/manageAddedCourses'}><SiGoogleclassroom/>Manage Added Courses</NavLink></li>
            </>
          }
          {/* instructor */}
          {
            role === 'instructor' &&<>
              <li><NavLink to={'/dashboard/addedCourses'}><BiImageAdd/>Added Courses</NavLink></li>
              <li><NavLink to={'/dashboard/manageCourses'}><SiGoogleclassroom/>Manage Courses</NavLink></li>
            </>
          }
          {/* student */}
          {
            role === 'student' &&<>
              <li><NavLink to={'/dashboard/selectedCourses'}><GrSelect/>Selected Course</NavLink></li>
              <li><NavLink to={'/dashboard/myEnrollClass'}><TbArrowsJoin2/>My Enroll Classes</NavLink></li>
              <li><NavLink to={'/dashboard/paymentHistory'}><BiHistory/>Payment History</NavLink></li>
            </>
          }
          <div className='divider'></div>
          <li><NavLink to={'/'}><AiOutlineHome/> Home</NavLink></li>
          <li><NavLink to={'/classes'}><MdFlightClass/>Courses</NavLink></li>
          <li><NavLink to={'/instructors'}><GiTeacher/>Instructors</NavLink></li>
          <p onClick={()=>{
            logOut()
            .then()
          }}><button className='btn btn-error w-full' ><AiOutlineLogout/> Log out</button></p>
        </ul>

      </div>
    </div>
  );
};

export default Dashbaord;