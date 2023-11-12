import Banner from './Banner';
import Gallery from './Galley';
import Category from './Category';
import LatestProduct from './LatestProduct';
import Services from './Services';
import setTittle from '../shared/titleFixer';

const Home = () => {
    setTittle('Home')
    return (
        <div className='px-2 md:p-0'>
            <Banner />
            <Gallery />
            <Category />
            <LatestProduct />
            <Services/>
        </div>
    );
};

export default Home;