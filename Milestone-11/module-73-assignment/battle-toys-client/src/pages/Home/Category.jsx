import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import CategoryCard from './CategoryCard';
import Loading from '../Loading/Loading';
const Category = () => {
    const [loading, setLoading] = useState(false)
    const [toys, setToys] = useState([]);
    useEffect(() => {
        setLoading(true)
        fetch('https://battle-toys-server.vercel.app/initialToys')
            .then(res => res.json())
            .then(data => {
                setToys(data)
                setLoading(false)
            }).catch(error=>setLoading(false))
    }, [])
    return (
        <div data-aos="fade-up" className='my-20 shadow-md rounded-lg md:p-4'>
            <Loading loading={loading}>
                <h2 className='text-4xl text-pink-400 text-center mb-10 font-bold'>Product Category You may like</h2>

                <Tabs>
                    <TabList>
                        <Tab>Anime</Tab>
                        <Tab>Marvel</Tab>
                        <Tab>Transformers</Tab>
                    </TabList>

                    <TabPanel>
                        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 p-4'>

                            {toys.map(toy => toy?.category === "Anime" && <CategoryCard key={toy._id} toy={toy} />)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 p-4'>
                            {toys.map(toy => toy?.category === "Marvel" && <CategoryCard key={toy._id} toy={toy} />)
                            }
                        </div>
                    </TabPanel> <TabPanel>
                        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 p-4 '>
                            {toys.map(toy => toy?.category === "Transformers" && <CategoryCard key={toy._id} toy={toy} />)
                            }
                        </div>
                    </TabPanel>
                </Tabs>
            </Loading>
        </div>
    );

};

export default Category;