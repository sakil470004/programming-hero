import { Link } from 'react-router-dom';
import logo from './../../assets/logo.png'
function Footer() {
  return (
    <div className='  py-6 px-2'>


      <footer className="footer gap-10 grid grid-cols-1 lg:grid-cols-3 place-items-start md:place-items-center  justify-between">
        <div>
          <Link to={'/'} className=""><img src={logo} width={100} alt="" /></Link>
          <a className="link link-hover">Facebook</a>
          <a className="link link-hover">Twetter</a>
          <a className="link link-hover">Linkedin</a>
          <a className="link link-hover">Email</a>
        </div>
        <div>
          <h4>About Us</h4>
          <small>
            <span className='text-error'>Fighting Sprit</span> This web application is a MERN project with Firebase and Google login functionalities. It features a dashboard where admins can manage instructors and admins, instructors can create courses, and students can select and pay for courses. The project leverages MongoDB, Express.js, React, and Node.js to deliver a comprehensive e-learning platform.

          </small>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>

      </footer>
      <p className='text-center mt-6 text-error'>&copy; 2023 <span className="text-pink-full">Fighting Spirit</span>. All rights reserved.</p>
    </div>

  );
}

export default Footer;
