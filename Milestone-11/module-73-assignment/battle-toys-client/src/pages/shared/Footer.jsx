import { Link } from 'react-router-dom';
import logo from './../../assets/logo.png'
function Footer() {
  return (
    <div className=' bg-pink-50 py-6 px-2'>


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
            <span className='text-pink-full'>Battle Toys</span>  offer an exciting range of action-packed toys that ignite adventure and inspire creativity. From fearless warriors to powerful superheroes, our collection promises endless hours of thrilling playtime. Unleash the excitement and let the battles begin at Battle Toys!

          </small>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>

      </footer>
      <p className='text-center mt-6'>&copy; 2023 <span className="text-pink-full">Battle Toys</span>. All rights reserved.</p>
    </div>

  );
}

export default Footer;
